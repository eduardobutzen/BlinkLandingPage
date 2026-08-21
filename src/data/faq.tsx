import { Link } from "react-router-dom";
import type { AccordionItem } from "@/components/ui/interactive-accordion";

/** Perguntas frequentes. `content` é ReactNode para permitir links e ênfases. */
export const perguntasFrequentes: AccordionItem[] = [
  {
    id: "arquivos",
    number: "01",
    title: "Meus arquivos ficam guardados?",
    content: (
      <p>
        O material é enviado para processamento por IA de terceiros (Anthropic, com fallback para
        Google) e o que fica na sua conta são os cards gerados e as imagens que você aprovou. Cada
        conta só acessa os próprios dados, garantido por Row Level Security no banco. Os detalhes
        estão na <Link to="/privacidade" className="text-foreground underline underline-offset-4">
          Política de Privacidade
        </Link>.
      </p>
    ),
  },
  {
    id: "offline",
    number: "02",
    title: "Funciona offline?",
    content: (
      <p>
        Gerar cards com IA e sincronizar entre aparelhos precisam de internet — o processamento
        acontece no servidor. A geração é o momento que exige conexão; o estudo em si é leve e
        local.
      </p>
    ),
  },
  {
    id: "preco",
    number: "03",
    title: "Quanto custa?",
    content: (
      <p>
        O plano Free é gratuito e inclui 300 gerações por IA por mês, além de decks e cards
        ilimitados criados por você. O preço do Pro ainda não foi definido — quem entrar na lista de
        espera fica sabendo primeiro.
      </p>
    ),
  },
  {
    id: "formatos",
    number: "04",
    title: "Que tipo de arquivo posso enviar?",
    content: (
      <p>
        PDF, PowerPoint (.pptx), Word (.docx) e imagem. Também dá para colar um texto ou
        simplesmente digitar o tópico. O limite por arquivo é de 25 MB e 80 páginas ou slides; se
        passar disso, o Blink processa o que couber e avisa em vez de falhar.
      </p>
    ),
  },
  {
    id: "exportar",
    number: "05",
    title: "Consigo levar meus decks embora?",
    content: (
      <p>
        Sim. Decks que são seus podem ser exportados e importados em arquivo, com resolução de
        conflito (copiar, pular ou substituir) quando algo já existir. Decks baixados da comunidade
        seguem a licença escolhida por quem publicou.
      </p>
    ),
  },
  {
    id: "idioma",
    number: "06",
    title: "Está em português?",
    content: (
      <p>
        Toda a interface é em português brasileiro, do onboarding às conquistas. E o app é feito
        para celular, em iOS e Android.
      </p>
    ),
  },
];
