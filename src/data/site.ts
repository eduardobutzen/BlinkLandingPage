export const EMAIL_SUPORTE = "blinkflashcards@gmail.com";

/* Fichas do Blink nas lojas. O identificador da Play é o pacote do app
   (`br.com.blinkflashcards.app`, reverse-DNS do domínio; ver o app.json do
   app). A App Store usa o id da Apple (6825818805, o `ascAppId` do eas.json);
   o app entrou na loja em 13/11/2026. */
export const URL_APP_STORE: string = "https://apps.apple.com/br/app/blink-flashcards-com-ia/id6825818805";
export const URL_GOOGLE_PLAY: string = "";
/* Vazio até o app sair na Play Store: o endereço certo é
   https://play.google.com/store/apps/details?id=br.com.blinkflashcards.app,
   mas hoje ele dá 404. O site continua anunciando o Android (o lançamento lá
   vai acontecer), só que o botão e o link do Google Play aparecem como "em
   breve", sem clique, até esta URL ser preenchida. */

/** Destino dos botões da App Store: a ficha, ou /baixar enquanto o link não existe. */
export const LINK_APP_STORE = URL_APP_STORE || "/baixar";
