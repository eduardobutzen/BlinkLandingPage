/** Corpo do documento; cabeçalho, índice e layout ficam em LegalPage. */
export function TermsBody() {
  return (
    <>
        <h2 id="aceite"><span className="doc__n">1</span>Aceitação destes termos</h2>
        <p>Ao criar uma conta ou usar o Blink, você concorda com estes Termos de Uso e com a{" "}
          <a href="/privacidade">Política de Privacidade</a>. Se não concordar com algum ponto,
          não use o serviço.</p>
        <p>O Blink é operado por Gabriel Maica Warpechowski, pessoa física residente em Santo Ângelo (RS).</p>

        <h2 id="servico"><span className="doc__n">2</span>O que o Blink é</h2>
        <p>O Blink é um aplicativo de flashcards com repetição espaçada que gera cards a partir de
          material fornecido por você (PDF, PowerPoint, Word, imagem, texto colado ou tópico digitado)
          e agenda as revisões pelo algoritmo SM-2. Inclui três modos de prática (flashcards, quiz e os dois
          intercalados), acompanhamento de
          progresso e uma área de Comunidade para publicar e baixar decks.</p>
        <p>É uma ferramenta de estudo. <b>Não é serviço educacional certificado, consultoria profissional
          nem fonte de informação verificada</b>, e não substitui o seu material original ou a orientação
          de um professor.</p>

        <h2 id="conta"><span className="doc__n">3</span>Sua conta</h2>
        <ul>
          <li>Você precisa de uma conta com e-mail e senha para usar o Blink.</li>
          <li>Idade mínima de 13 anos; entre 13 e 18, com consentimento dos responsáveis.</li>
          <li>Você é responsável por manter a senha em segurança e por tudo que acontecer na sua conta.</li>
          <li>Informe dados verdadeiros e mantenha o e-mail atualizado, porque é por ele que fazemos a recuperação de acesso.</li>
          <li>Uma conta é pessoal e não deve ser compartilhada.</li>
        </ul>

        <h2 id="uso"><span className="doc__n">4</span>Uso aceitável</h2>
        <p>Ao usar o Blink, você concorda em <b>não</b>:</p>
        <ul>
          <li>Enviar material sobre o qual não tenha direito de uso, nem conteúdo que viole direitos autorais de terceiros.</li>
          <li>Publicar na Comunidade conteúdo ilegal, ofensivo, discriminatório, enganoso ou que exponha dados pessoais de terceiros.</li>
          <li>Republicar como seu um deck cuja licença não permita isso (veja a seção 7).</li>
          <li>Automatizar acessos, burlar os limites do plano, sondar a infraestrutura ou tentar acessar dados de outras contas.</li>
          <li>Usar o serviço para gerar conteúdo abusivo, fraudulento ou destinado a prejudicar terceiros.</li>
          <li>Revender, sublicenciar ou explorar comercialmente o serviço sem autorização por escrito.</li>
        </ul>

        <h2 id="conteudo"><span className="doc__n">5</span>Seu conteúdo continua seu</h2>
        <p>Os decks, cards e materiais que você cria ou envia permanecem seus. Você nos concede apenas a
          licença técnica necessária para operar o serviço: armazenar, processar, exibir para você e
          sincronizar entre os seus aparelhos.</p>
        <p>Se você publicar um deck na Comunidade, essa licença se estende ao alcance da opção que você
          escolher no momento da publicação, e nada além dela.</p>
        <p>Você pode exportar os seus decks em arquivo e excluir a sua conta a qualquer momento, dentro
          do próprio aplicativo.</p>

        <h2 id="ia"><span className="doc__n">6</span>Geração por inteligência artificial</h2>
        <p>Ao pedir uma geração, o material enviado é processado por provedores de IA de terceiros
          (Google, por meio dos modelos Gemini), conforme detalhado na{" "}
          <a href="/privacidade#ia">Política de Privacidade</a>.</p>
        <ul>
          <li><b>O resultado pode conter erros.</b> Cards, explicações e respostas do chat gerados por IA podem trazer imprecisões, omissões ou interpretações equivocadas do material. Confira o conteúdo antes de confiar nele, especialmente em contextos de saúde, direito e finanças.</li>
          <li><b>Há limites técnicos por arquivo:</b> 25 MB, 80 páginas ou slides e até 60 figuras aprovadas. Material acima disso é processado até onde couber, com aviso.</li>
          <li><b>Não garantimos disponibilidade contínua</b> da geração por IA: ela depende de serviços de terceiros que podem falhar ou mudar suas condições.</li>
        </ul>

        <h2 id="comunidade"><span className="doc__n">7</span>Comunidade e licenças de deck</h2>
        <p>Ao publicar um deck, você escolhe uma das licenças abaixo, e ela é aplicada pelo serviço:</p>
        <ul>
          <li><b>Protegido</b>: outras pessoas podem baixar e estudar, mas não exportar em arquivo nem republicar.</li>
          <li><b>Compartilhável</b>: podem baixar e exportar em arquivo, mas não republicar como conteúdo próprio.</li>
          <li><b>Aberto</b>: podem exportar e republicar adaptações, sempre com crédito a você.</li>
        </ul>
        <p>A publicação é feita por <i>snapshot</i>: quem baixa fica com uma cópia independente.
          Despublicar não recolhe as cópias já baixadas. Decks adaptados exibem a origem
          (“Adaptado de …”), preservando a proveniência.</p>
        <p>Conteúdo denunciado entra em fila de moderação. Podemos remover do ar qualquer deck que viole
          estes termos ou a lei, sem aviso prévio quando houver risco a terceiros.</p>

        <h2 id="planos"><span className="doc__n">8</span>Planos, limites e pagamentos</h2>
        <p>O Blink oferece um plano gratuito (Grátis) e um plano pago (Blink Plus).</p>
        <ul>
          <li>O plano <b>Grátis</b> inclui o estudo com repetição espaçada, flashcards e quiz, a criação e edição dos seus próprios cards, a aba Revisar e a comunidade. Ele não inclui recursos de IA e exibe anúncios do próprio Blink entre os cards.</li>
          <li>O <b>Blink Plus</b> custa <b>R$ 29,90 por mês</b> ou <b>R$ 199,90 por ano</b> e acrescenta a geração de decks por IA, a explicação da IA nas questões erradas, o chat com a IA sobre a questão, o download de decks da comunidade e a remoção dos anúncios.</li>
          <li>Os recursos de IA do Plus têm limites diários e mensais de uso, verificados no servidor e informados no app e no site. Podemos ajustar esses limites, comunicando a mudança com antecedência razoável.</li>
          <li>Assinaturas contratadas pelas lojas seguem as regras de cobrança, renovação e reembolso da <b>App Store</b> ou do <b>Google Play</b>, e o cancelamento é feito na conta da respectiva loja.</li>
          <li>Aplicam-se as regras do Código de Defesa do Consumidor, inclusive o direito de arrependimento em até 7 dias para contratações à distância.</li>
        </ul>

        <h2 id="disponibilidade"><span className="doc__n">9</span>Disponibilidade e mudanças</h2>
        <p>Trabalhamos para manter o serviço no ar, mas ele pode ficar indisponível por manutenção,
          falha de terceiros ou motivo fora do nosso controle. Podemos alterar, adicionar ou descontinuar
          funcionalidades. Se uma mudança for relevante e negativa para você, avisaremos com antecedência
          razoável e, no caso de plano pago, ofereceremos alternativa proporcional.</p>

        <h2 id="encerramento"><span className="doc__n">10</span>Suspensão e encerramento</h2>
        <p>Você pode encerrar sua conta a qualquer momento pelo próprio aplicativo, o que apaga seus
          dados conforme a Política de Privacidade.</p>
        <p>Podemos suspender ou encerrar contas que violem estes termos, especialmente em casos de
          violação de direitos autorais, abuso da Comunidade, tentativa de burlar limites ou ameaça à
          segurança de outras pessoas. Sempre que possível, avisamos antes e damos chance de correção.</p>

        <h2 id="garantias"><span className="doc__n">11</span>Garantias e limitação de responsabilidade</h2>
        <p>O Blink é fornecido “no estado em que se encontra”. Não garantimos que o serviço será
          ininterrupto, livre de erros, nem que o conteúdo gerado por IA será exato, completo ou adequado
          a um fim específico.</p>
        <p>Na máxima extensão permitida pela lei brasileira, não respondemos por lucros cessantes, perda
          de oportunidade, prejuízo em provas, concursos ou avaliações, nem por danos indiretos
          decorrentes do uso do serviço. Nada aqui afasta direitos irrenunciáveis do consumidor nem a
          responsabilidade por dolo ou culpa grave.</p>
        <p>Mantenha cópias do seu material original. A exportação de decks em arquivo existe justamente
          para isso.</p>

        <h2 id="geral"><span className="doc__n">12</span>Disposições gerais</h2>
        <ul>
          <li><b>Alterações:</b> podemos atualizar estes termos. Mudanças relevantes serão comunicadas no aplicativo antes de entrar em vigor; continuar usando o Blink depois disso significa concordar com a nova versão.</li>
          <li><b>Cessão:</b> você não pode transferir sua conta a terceiros. Podemos ceder estes termos em caso de reorganização societária, mantendo as suas condições.</li>
          <li><b>Independência das cláusulas:</b> se alguma disposição for considerada inválida, as demais continuam valendo.</li>
          <li><b>Lei aplicável e foro:</b> aplica-se a lei brasileira. Fica eleito o foro da comarca de Santo Ângelo (RS), ressalvado o direito do consumidor de demandar no foro do seu domicílio.</li>
        </ul>

        <h2 id="contato"><span className="doc__n">13</span>Contato</h2>
        <p>Dúvidas sobre estes termos:{" "}
          <a href="mailto:blinkflashcards@gmail.com">blinkflashcards@gmail.com</a>.</p>

        <div className="card card--callout">
          <p className="small muted">Veja também a <a href="/privacidade">Política de Privacidade</a>.</p>
        </div>
    </>
  );
}
