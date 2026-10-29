/**
 * Prévia de link para robôs de rede social (WhatsApp, Instagram, Telegram...).
 *
 * O site é uma SPA: o HTML que o servidor entrega é sempre o mesmo, com as
 * meta tags da página inicial. Quem abre no navegador nem percebe, porque o
 * React troca o título depois. Mas o robô do WhatsApp não roda JavaScript, e
 * todo link de deck aparecia na conversa como o site genérico do Blink.
 *
 * O `vercel.json` manda para cá só os pedidos de robô para /deck/* e /autor/*
 * (pelo user-agent). Aqui buscamos o deck ou o autor pelas mesmas funções
 * públicas da página (`share_preview_*`) e devolvemos um HTML mínimo com o
 * título e a descrição do deck, e a imagem do Blink. Gente de verdade nunca
 * chega aqui.
 */

const SUPABASE_URL = "https://ekgznmmkccqitbibtgja.supabase.co";
// A chave PUBLICÁVEL, a mesma que viaja no bundle do site (src/lib/preview.ts).
const SUPABASE_ANON_KEY = "sb_publishable_Hu3A963n1IUgziuMcxGp5Q_FecT39TO";
const SITE = "https://blinkflashcards.com.br";
const IMAGEM_PADRAO = `${SITE}/assets/brand/og-blink.png?v=2`;

// Cópia de src/lib/preview.ts (expandirId): o link novo traz o id curto.
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const CURTO = /^[A-Za-z0-9_-]{22}$/;

function expandirId(texto) {
  if (UUID.test(texto)) return texto.toLowerCase();
  if (!CURTO.test(texto)) return null;
  let bits = "";
  for (const c of texto) bits += ALFABETO.indexOf(c).toString(2).padStart(6, "0");
  let hex = "";
  for (let i = 0; i < 128; i += 4) hex += parseInt(bits.slice(i, i + 4), 2).toString(16);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

async function buscar(funcao, argumento) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${funcao}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(argumento),
  });
  if (!r.ok) return null;
  return r.json();
}

export default async function handler(req, res) {
  const tipo = req.query.tipo === "autor" ? "autor" : "deck";
  const bruto = String(req.query.id ?? "");
  const id = expandirId(bruto);
  const url = `${SITE}/${tipo}/${encodeURIComponent(bruto)}`;

  let titulo = "Blink: sua apostila vira flashcards";
  let descricao = "Flashcards com IA e repetição espaçada. Abra no Blink e comece a estudar.";
  // Sempre a imagem do Blink (decisão de 29/10/2026): grande e igual em todo
  // link, com o nome do deck no texto. A capa do deck é quadrada e o WhatsApp
  // a mostraria como miniatura pequena; e deck sem capa ficaria diferente.
  const imagem = IMAGEM_PADRAO;

  try {
    if (id && tipo === "deck") {
      const p = await buscar("share_preview_deck", { p_deck: id });
      if (p?.deck) {
        const d = p.deck;
        titulo = `${d.title} | Blink`;
        const cards = `${d.card_count} ${d.card_count === 1 ? "card" : "cards"}`;
        descricao = d.description
          ? `${cards} no Blink. ${d.description}`
          : `${cards} no Blink${d.author_name ? `, por ${d.author_name}` : ""}. Abra e comece a estudar.`;
      } else {
        titulo = "Deck não encontrado | Blink";
      }
    } else if (id && tipo === "autor") {
      const p = await buscar("share_preview_author", { p_author: id });
      if (p?.autor) {
        const a = p.autor;
        titulo = a.name === "Blink" ? "Decks oficiais do Blink" : `${a.name} no Blink`;
        descricao = `${a.deck_count} ${a.deck_count === 1 ? "deck publicado" : "decks publicados"}, ${a.card_count} cards. Abra no Blink e estude junto.`;
      }
    }
  } catch {
    // Prévia é enfeite: se a busca falhar, vai a genérica, nunca um erro.
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
  res.status(200).send(`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Blink">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:image" content="${esc(imagem)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titulo)}">
<meta name="twitter:description" content="${esc(descricao)}">
<meta name="twitter:image" content="${esc(imagem)}">
<link rel="canonical" href="${esc(url)}">
</head><body><a href="${esc(url)}">${esc(titulo)}</a></body></html>`);
}
