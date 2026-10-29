/**
 * A vitrine pública de um deck ou de um autor compartilhado por link.
 *
 * Os dados NÃO saem das tabelas. As policies da comunidade liberam leitura só
 * para quem está logado, e abrir uma policy para `anon` publicaria o catálogo
 * inteiro — daria para paginar a tabela e raspar todos os cards. Quem atende
 * aqui são duas funções do Postgres (`share_preview_deck` e
 * `share_preview_author`), que rodam com privilégio de dono mas devolvem um
 * registro por chamada, com as colunas numa lista fechada.
 *
 * A chave abaixo é a PUBLICÁVEL — ela já viaja dentro do bundle do app e é
 * feita para ser exposta. Quem protege os dados são as policies e o recorte
 * das funções, nunca o sigilo dela.
 */

const SUPABASE_URL = "https://ekgznmmkccqitbibtgja.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Hu3A963n1IUgziuMcxGp5Q_FecT39TO";

export interface DeckPublico {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  tags: string[];
  card_count: number;
  downloads_count: number;
  rating_avg: number;
  rating_count: number;
  author_id: string;
  author_name: string | null;
  author_avatar_url: string | null;
  license: "protected" | "shareable" | "open" | null;
  published_at: string;
  /** Mandado só por link, sem estar na Comunidade. Ausente nas respostas antigas = público. */
  privado?: boolean;
}

export interface AutorPublico {
  id: string;
  name: string;
  avatar_url: string | null;
  deck_count: number;
  card_count: number;
  downloads: number;
  rating_count: number;
  rating_avg: number;
  since: string;
}

export type Preview =
  | { tipo: "deck"; deck: DeckPublico; amostra: string[] }
  | { tipo: "autor"; autor: AutorPublico; decks: DeckPublico[] };

/**
 * `null` = não existe (ou foi tirado do ar pela moderação). A página trata os
 * dois como a mesma coisa de propósito: quem recebeu o link não tem nada a
 * ganhar sabendo qual dos dois aconteceu.
 */
export async function buscarPreview(
  tipo: "deck" | "autor",
  id: string,
): Promise<Preview | null> {
  const uuid = expandirId(id);
  if (uuid == null) return null;
  const funcao = tipo === "deck" ? "share_preview_deck" : "share_preview_author";
  const argumento = tipo === "deck" ? { p_deck: uuid } : { p_author: uuid };

  try {
    const resposta = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${funcao}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(argumento),
    });
    if (!resposta.ok) return null;
    // A função devolve `null` quando o deck não existe, foi removido pela
    // moderação ou o id está malformado — os três casos viram a mesma página,
    // porque quem recebeu o link não ganha nada sabendo qual foi.
    const dados = await resposta.json();
    return (dados ?? null) as Preview | null;
  } catch {
    return null;
  }
}

// ── Abrir no app ─────────────────────────────────────────────────────────────

/**
 * O endereço que abre o app direto na tela certa.
 *
 * Enquanto os Universal Links não estiverem ativos (dependem do Team ID da
 * Apple e da assinatura Android), este é o ÚNICO caminho de volta para o app —
 * e ele só funciona se o app estiver instalado. Por isso o botão que o usa
 * precisa ter um plano B: ver `abrirNoApp`.
 */
export function esquemaDoApp(tipo: "deck" | "autor", id: string): string {
  // Os mesmos caminhos do link público. O antigo `blink://community/<id>` o
  // app recebia e não sabia ler: abria e ficava parado.
  return `blink://${tipo}/${id}`;
}

// ── Id curto ─────────────────────────────────────────────────────────────────

/**
 * Os links novos trazem o id em 22 caracteres (base64url do UUID), porque o
 * UUID cru tem o formato da chave Pix aleatória e o WhatsApp no iPhone o
 * oferecia como "copiar chave Pix" em vez de abrir o link. Os links antigos,
 * com o UUID, continuam valendo.
 *
 * Cópia de `Blink/utils/shortId.ts`: o alfabeto tem que ser o mesmo dos dois
 * lados.
 */
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const CURTO = /^[A-Za-z0-9_-]{22}$/;

export function expandirId(texto: string): string | null {
  if (UUID.test(texto)) return texto.toLowerCase();
  if (!CURTO.test(texto)) return null;
  let bits = "";
  for (const c of texto) bits += ALFABETO.indexOf(c).toString(2).padStart(6, "0");
  let hex = "";
  for (let i = 0; i < 128; i += 4) hex += parseInt(bits.slice(i, i + 4), 2).toString(16);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Tenta abrir o app; se nada acontecer, manda para a loja.
 *
 * O truque do prazo é o padrão da web para isto, e existe porque o navegador
 * não avisa se o esquema `blink://` foi atendido: quando o app abre, a aba
 * perde o foco e o `setTimeout` nunca chega a rodar. Se ele rodar, é porque
 * ninguém atendeu — aí a loja é o destino honesto.
 */
export function abrirNoApp(tipo: "deck" | "autor", id: string, urlDaLoja: string) {
  const voltou = window.setTimeout(() => {
    window.location.href = urlDaLoja;
  }, 1500);

  // Se a página for escondida, o app abriu: cancela a ida para a loja.
  const cancelar = () => {
    if (document.hidden) window.clearTimeout(voltou);
  };
  document.addEventListener("visibilitychange", cancelar, { once: true });

  window.location.href = esquemaDoApp(tipo, id);
}

/** A loja certa para o aparelho de quem abriu. */
export function lojaDoAparelho(urlApple: string, urlGoogle: string): string {
  // Sem ficha na Play (`urlGoogle` vazio), o Android cai na /baixar, que
  // explica; mandar para "" recarregaria a página sem dizer nada.
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ? urlApple : urlGoogle || "/baixar";
}
