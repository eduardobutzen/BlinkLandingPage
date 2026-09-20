/**
 * A vitrine pública de um deck ou de um autor compartilhado por link.
 *
 * Os dados NÃO vêm direto do banco. As regras do Supabase liberam a leitura da
 * comunidade só para quem está logado — e abrir isso para o público seria
 * publicar o catálogo inteiro, com todos os cards, para qualquer um. Quem
 * atende aqui é a Edge Function `share-preview`, que lê com a chave de serviço
 * do lado do servidor e devolve só o que pode aparecer na web.
 *
 * Por isso este arquivo não tem chave nenhuma: o site é público e não guarda
 * segredo.
 */

const SUPABASE_URL = "https://ekgznmmkccqitbibtgja.supabase.co";
const ENDPOINT = `${SUPABASE_URL}/functions/v1/share-preview`;

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
  try {
    const resposta = await fetch(`${ENDPOINT}?${tipo}=${encodeURIComponent(id)}`);
    if (!resposta.ok) return null;
    return (await resposta.json()) as Preview;
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
  return tipo === "deck" ? `blink://community/${id}` : `blink://community/author/${id}`;
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
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ? urlApple : urlGoogle;
}
