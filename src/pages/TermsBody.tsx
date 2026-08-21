export function TermsBody() {
  return (
    <main className="section">
      <div className="wrap doc">

        <p className="eyebrow">Legal</p>
        <h1>Termos de Uso</h1>
        <p className="doc__meta">Aplica-se ao aplicativo Blink (iOS e Android) e a este site.<br />
          Última atualização: 20 de agosto de 2026 · Vigência a partir de [DEFINIR data de publicação]</p>

        <div className="doc__toc">
          <h4>Nesta página</h4>
          <ol>
            <li><a href="#aceite">Aceitação destes termos</a></li>
            <li><a href="#servico">O que o Blink é</a></li>
            <li><a href="#conta">Sua conta</a></li>
            <li><a href="#uso">Uso aceitável</a></li>
            <li><a href="#conteudo">Seu conteúdo continua seu</a></li>
            <li><a href="#ia">Geração por inteligência artificial</a></li>
            <li><a href="#comunidade">Comunidade e licenças de deck</a></li>
            <li><a href="#planos">Planos, limites e pagamentos</a></li>
            <li><a href="#disponibilidade">Disponibilidade e mudanças</a></li>
            <li><a href="#encerramento">Suspensão e encerramento</a></li>
            <li><a href="#garantias">Garantias e limitação de responsabilidade</a></li>
            <li><a href="#geral">Disposições gerais</a></li>
            <li><a href="#contato">Contato</a></li>
          </ol>
        </div>

        <h2 id="aceite">1. Aceitação destes termos</h2>
        <p>Ao criar uma conta ou usar o Blink, você concorda com estes Termos de Uso e com a
          <a href="/privacidade">Política de Privacidade</a>. Se não concordar com algum ponto,
          não use o serviço.</p>
        <p>O Blink é operado por [DEFINIR titular — nome/razão social, CNPJ ou CPF, endereço].</p>

        <h2 id="servico">2. O que o Blink é</h2>
        <p>O Blink é um aplicativo de flashcards com repetição espaçada que gera cards a partir de
          material fornecido por você — PDF, PowerPoint, Word, imagem, texto colado ou tópico digitado —
          e agenda as revisões pelo algoritmo SM-2. Inclui quatro modos de prática, acompanhamento de
          progresso e uma área de Comunidade para publicar e baixar decks.</p>
        <p>É uma ferramenta de estudo. <b>Não é serviço educacional certificado, consultoria profissional
          nem fonte de informação verificada</b>, e não substitui o seu material original ou a orientação
          de um professor.</p>

        <h2 id="conta">3. Sua conta</h2>
        <ul>
          <li>Você precisa de uma conta com e-mail e senha para usar o Blink.</li>
          <li>Idade mínima de 13 anos; entre 13 e 18, com consentimento dos responsáveis.</li>
          <li>Você é responsável por manter a senha em segurança e por tudo que acontecer na sua conta.</li>
          <li>Informe dados verdadeiros e mantenha o e-mail atualizado — é por ele que fazemos a recuperação de acesso.</li>
          <li>Uma conta é pessoal e não deve ser compartilhada.</li>
        </ul>

        <h2 id="uso">4. Uso aceitável</h2>
        <p>Ao usar o Blink, você concorda em <b>não</b>:</p>
        <ul>
          <li>Enviar material sobre o qual não tenha direito de uso, nem conteúdo que viole direitos autorais de terceiros.</li>
          <li>Publicar na Comunidade conteúdo ilegal, ofensivo, discriminatório, enganoso ou que exponha dados pessoais de terceiros.</li>
          <li>Republicar como seu um deck cuja licença não permita isso (veja a seção 7).</li>
          <li>Automatizar acessos, burlar os limites do plano, sondar a infraestrutura ou tentar acessar dados de outras contas.</li>
          <li>Usar o serviço para gerar conteúdo abusivo, fraudulento ou destinado a prejudicar terceiros.</li>
          <li>Revender, sublicenciar ou explorar comercialmente o serviço sem autorização por escrito.</li>
        </ul>

        <h2 id="conteudo">5. Seu conteúdo continua seu</h2>
        <p>Os decks, cards e materiais que você cria ou envia permanecem seus. Você nos concede apenas a
          licença técnica necessária para operar o serviço: armazenar, processar, exibir para você e
          sincronizar entre os seus aparelhos.</p>
        <p>Se você publicar um deck na Comunidade, essa licença se estende ao alcance da opção que você
          escolher no momento da publicação — nada além dela.</p>
        <p>Você pode exportar os seus decks em arquivo e excluir a sua conta a qualquer momento, dentro
          do próprio aplicativo.</p>

        <h2 id="ia">6. Geração por inteligência artificial</h2>
        <p>Ao pedir uma geração, o material enviado é processado por provedores de IA de terceiros
          (Anthropic e, como alternativa, Google), conforme detalhado na
          <a href="/privacidade#ia">Política de Privacidade</a>.</p>
        <ul>
          <li><b>O resultado pode conter erros.</b> Cards gerados por IA podem trazer imprecisões, omissões ou interpretações equivocadas do material. Confira o conteúdo antes de confiar nele — especialmente em contextos de saúde, direito e finanças.</li>
          <li><b>A correção do modo Escrever avalia sentido</b>, não literalidade, e também está sujeita a erro.</li>
          <li><b>Há limites técnicos por arquivo:</b> 25 MB, 80 páginas ou slides e até 60 figuras aprovadas. Material acima disso é processado até onde couber, com aviso.</li>
          <li><b>Não garantimos disponibilidade contínua</b> da geração por IA: ela depende de serviços de terceiros que podem falhar ou mudar suas condições.</li>
        </ul>

        <h2 id="comunidade">7. Comunidade e licenças de deck</h2>
        <p>Ao publicar um deck, você escolhe uma das licenças abaixo, e ela é aplicada pelo serviço:</p>
        <ul>
          <li><b>Protegido</b> — outras pessoas podem baixar e estudar, mas não exportar em arquivo nem republicar.</li>
          <li><b>Compartilhável</b> — podem baixar e exportar em arquivo, mas não republicar como conteúdo próprio.</li>
          <li><b>Aberto</b> — podem exportar e republicar adaptações, sempre com crédito a você.</li>
        </ul>
        <p>A publicação é feita por <i>snapshot</i>: quem baixa fica com uma cópia independente.
          Despublicar não recolhe as cópias já baixadas. Decks adaptados exibem a origem
          (“Adaptado de …”), preservando a proveniência.</p>
        <p>Conteúdo denunciado entra em fila de moderação. Podemos remover do ar qualquer deck que viole
          estes termos ou a lei, sem aviso prévio quando houver risco a terceiros.</p>

        <h2 id="planos">8. Planos, limites e pagamentos</h2>
        <p>O Blink oferece um plano gratuito e pretende oferecer um plano pago (Pro).</p>
        <ul>
          <li>O plano <b>Free</b> inclui a criação ilimitada de decks e cards por você e um limite de gerações por IA por mês — atualmente <b>300 por conta</b>. O limite é verificado no servidor.</li>
          <li>Podemos ajustar os limites do plano gratuito, comunicando a mudança com antecedência razoável.</li>
          <li>O plano <b>Pro</b> e seu preço ainda não foram lançados. Quando forem, as condições comerciais, o prazo de renovação e a política de cancelamento serão apresentados antes da contratação.</li>
          <li>Assinaturas contratadas pelas lojas seguem as regras de cobrança, renovação e reembolso da <b>App Store</b> ou do <b>Google Play</b>, e o cancelamento é feito na conta da respectiva loja.</li>
          <li>Aplicam-se as regras do Código de Defesa do Consumidor, inclusive o direito de arrependimento em até 7 dias para contratações à distância.</li>
        </ul>

        <h2 id="disponibilidade">9. Disponibilidade e mudanças</h2>
        <p>Trabalhamos para manter o serviço no ar, mas ele pode ficar indisponível por manutenção,
          falha de terceiros ou motivo fora do nosso controle. Podemos alterar, adicionar ou descontinuar
          funcionalidades. Se uma mudança for relevante e negativa para você, avisaremos com antecedência
          razoável e, no caso de plano pago, ofereceremos alternativa proporcional.</p>

        <h2 id="encerramento">10. Suspensão e encerramento</h2>
        <p>Você pode encerrar sua conta a qualquer momento pelo próprio aplicativo, o que apaga seus
          dados conforme a Política de Privacidade.</p>
        <p>Podemos suspender ou encerrar contas que violem estes termos, especialmente em casos de
          violação de direitos autorais, abuso da Comunidade, tentativa de burlar limites ou ameaça à
          segurança de outras pessoas. Sempre que possível, avisamos antes e damos chance de correção.</p>

        <h2 id="garantias">11. Garantias e limitação de responsabilidade</h2>
        <p>O Blink é fornecido “no estado em que se encontra”. Não garantimos que o serviço será
          ininterrupto, livre de erros, nem que o conteúdo gerado por IA será exato, completo ou adequado
          a um fim específico.</p>
        <p>Na máxima extensão permitida pela lei brasileira, não respondemos por lucros cessantes, perda
          de oportunidade, prejuízo em provas, concursos ou avaliações, nem por danos indiretos
          decorrentes do uso do serviço. Nada aqui afasta direitos irrenunciáveis do consumidor nem a
          responsabilidade por dolo ou culpa grave.</p>
        <p>Mantenha cópias do seu material original. A exportação de decks em arquivo existe justamente
          para isso.</p>

        <h2 id="geral">12. Disposições gerais</h2>
        <ul>
          <li><b>Alterações:</b> podemos atualizar estes termos. Mudanças relevantes serão comunicadas no aplicativo antes de entrar em vigor; continuar usando o Blink depois disso significa concordar com a nova versão.</li>
          <li><b>Cessão:</b> você não pode transferir sua conta a terceiros. Podemos ceder estes termos em caso de reorganização societária, mantendo as suas condições.</li>
          <li><b>Independência das cláusulas:</b> se alguma disposição for considerada inválida, as demais continuam valendo.</li>
          <li><b>Lei aplicável e foro:</b> aplica-se a lei brasileira. Fica eleito o foro da comarca de [DEFINIR comarca], ressalvado o direito do consumidor de demandar no foro do seu domicílio.</li>
        </ul>

        <h2 id="contato">13. Contato</h2>
        <p>Dúvidas sobre estes termos:
          <a href="mailto:blinkflashcards@gmail.com">blinkflashcards@gmail.com</a>.</p>

        <div className="card card--callout">
          <p className="small muted">Veja também a <a href="/privacidade">Política de Privacidade</a>.</p>
        </div>

      </div>
    </main>
  );
}
