export const EMAIL_SUPORTE = "blinkflashcards@gmail.com";

/* Fichas do Blink nas lojas. O identificador da Play é o pacote do app
   (`br.com.blinkflashcards.app`, reverse-DNS do domínio; ver o app.json do
   app). PREENCHER `URL_APP_STORE` com o link da ficha
   (https://apps.apple.com/br/app/…/id…). */
export const URL_APP_STORE: string = "";
export const URL_GOOGLE_PLAY: string = "https://play.google.com/store/apps/details?id=br.com.blinkflashcards.app";

/** Destino dos botões da App Store: a ficha, ou /baixar enquanto o link não existe. */
export const LINK_APP_STORE = URL_APP_STORE || "/baixar";
