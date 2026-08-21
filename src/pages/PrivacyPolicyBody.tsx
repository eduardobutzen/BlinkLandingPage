export function PrivacyPolicyBody() {
  return (
    <main className="section">
      <div className="wrap doc">

        <p className="eyebrow">Legal</p>
        <h1>Política de Privacidade</h1>
        <p className="doc__meta">Aplica-se ao aplicativo Blink (iOS e Android) e a este site.<br />
          Última atualização: 20 de agosto de 2026 · Vigência a partir de [DEFINIR data de publicação]</p>

        <div className="doc__toc">
          <h4>Nesta página</h4>
          <ol>
            <li><a href="#quem">Quem é responsável pelos seus dados</a></li>
            <li><a href="#dados">Que dados o Blink trata</a></li>
            <li><a href="#ia">Processamento do seu material por inteligência artificial</a></li>
            <li><a href="#finalidades">Para que usamos cada dado</a></li>
            <li><a href="#compartilhamento">Com quem compartilhamos</a></li>
            <li><a href="#seguranca">Como protegemos</a></li>
            <li><a href="#comunidade">Conteúdo que você publica na Comunidade</a></li>
            <li><a href="#notificacoes">Notificações</a></li>
            <li><a href="#retencao">Retenção e exclusão da conta</a></li>
            <li><a href="#direitos">Seus direitos</a></li>
            <li><a href="#criancas">Idade mínima</a></li>
            <li><a href="#internacional">Transferência internacional</a></li>
            <li><a href="#mudancas">Mudanças nesta política</a></li>
            <li><a href="#contato">Contato</a></li>
          </ol>
        </div>

        <h2 id="quem">1. Quem é responsável pelos seus dados</h2>
        <p>O Blink é um aplicativo de flashcards com repetição espaçada operado por
          [DEFINIR titular — nome/razão social, CNPJ ou CPF, endereço], doravante “nós”.
          Para qualquer assunto relacionado a esta política, o canal é
          <a href="mailto:blinkflashcards@gmail.com">blinkflashcards@gmail.com</a>.</p>
        <p>Tratamos dados pessoais na qualidade de <b>controlador</b>, nos termos da Lei nº 13.709/2018 (LGPD).</p>

        <h2 id="dados">2. Que dados o Blink trata</h2>

        <h3>2.1 Dados de conta</h3>
        <ul>
          <li>Endereço de e-mail e senha (armazenada apenas como <i>hash</i>, nunca em texto puro).</li>
          <li>Preferências: tema, tamanho de fonte, sons, gestos, redução de movimento, meta diária, horário de lembrete.</li>
          <li>Indicador de que você já concluiu o onboarding.</li>
        </ul>

        <h3>2.2 Conteúdo que você cria ou envia</h3>
        <ul>
          <li>Decks, cards, tags, emojis, cores e capas.</li>
          <li>O material que você envia para gerar cards: PDF, PowerPoint (.pptx), Word (.docx), imagens, textos colados ou tópicos digitados.</li>
          <li>Imagens extraídas desse material que você aprovar para virar imagem de card.</li>
        </ul>

        <h3>2.3 Dados de estudo</h3>
        <ul>
          <li>Sessões de estudo, respostas (acerto/erro), tempo e taxa de acerto.</li>
          <li>Agendamento de cada card pelo algoritmo SM-2: intervalo, <i>ease factor</i>, repetições e data da próxima revisão.</li>
          <li>Meta diária, sequência de dias, XP, nível, patente e conquistas.</li>
        </ul>

        <h3>2.4 Dados técnicos</h3>
        <ul>
          <li>Registros de acesso e de erro necessários à operação e à segurança do serviço.</li>
          <li>Contagem de gerações por IA no período, para aplicar o limite do seu plano.</li>
        </ul>
        <p>O Blink <b>não</b> exibe anúncios e <b>não</b> vende os seus dados.</p>

        <h2 id="ia">3. Processamento do seu material por inteligência artificial</h2>
        <p>Esta é a parte mais importante desta política, então ela vem sem rodeios:
          <b>quando você pede ao Blink para gerar cards, o conteúdo enviado é transmitido a provedores
          de inteligência artificial de terceiros para processamento.</b></p>
        <ul>
          <li><b>Anthropic</b> — modelos Claude, usados para ler documentos, gerar os cards a partir de tópicos ou textos e corrigir as respostas do modo Escrever.</li>
          <li><b>Google</b> — modelos Gemini, acionados como alternativa quando o provedor principal está indisponível.</li>
        </ul>
        <p>O envio acontece a partir dos nossos servidores, não do seu aparelho, e apenas quando você
          solicita uma geração. As chaves de acesso a esses provedores ficam guardadas como segredos no
          servidor e nunca são embarcadas no aplicativo.</p>
        <p>O tratamento realizado por esses provedores é regido pelos termos e políticas deles.
          Não temos controle sobre as práticas internas de cada fornecedor além do que os respectivos
          contratos preveem. Se você não quiser que um material específico seja processado dessa forma,
          não o envie para geração por IA — criar cards manualmente não aciona nenhum provedor externo.</p>

        <h2 id="finalidades">4. Para que usamos cada dado</h2>
        <ul>
          <li><b>Manter a sua conta</b> e sincronizar decks, sessões, conquistas e configurações entre aparelhos.</li>
          <li><b>Gerar cards</b> a partir do material que você enviar.</li>
          <li><b>Agendar as revisões</b> pelo algoritmo de repetição espaçada.</li>
          <li><b>Calcular progresso</b>: meta diária, sequência, XP, níveis e conquistas.</li>
          <li><b>Enviar lembretes locais</b> com a contagem real de cards devidos, se você ativar.</li>
          <li><b>Aplicar os limites do seu plano</b>, verificados no servidor.</li>
          <li><b>Operar a Comunidade</b>, incluindo moderação de denúncias.</li>
          <li><b>Garantir segurança</b> e investigar abuso ou uso indevido.</li>
        </ul>
        <p>As bases legais correspondentes são a execução do contrato (prestação do serviço que você
          contratou), o cumprimento de obrigação legal e o legítimo interesse em manter o serviço
          seguro e funcional.</p>

        <h2 id="compartilhamento">5. Com quem compartilhamos</h2>
        <ul>
          <li><b>Supabase</b> — infraestrutura de autenticação, banco de dados, armazenamento de arquivos e funções de servidor.</li>
          <li><b>Anthropic</b> e <b>Google</b> — processamento de IA, conforme a seção 3.</li>
          <li><b>Apple</b> e <b>Google</b> — quando houver assinatura, o processamento do pagamento ocorre nas lojas; não recebemos os dados do seu cartão.</li>
          <li><b>Autoridades</b> — apenas mediante requisição legal válida.</li>
        </ul>
        <p>Não compartilhamos dados pessoais com anunciantes nem com corretores de dados.</p>

        <h2 id="seguranca">6. Como protegemos</h2>
        <ul>
          <li><b>Row Level Security em todas as tabelas.</b> O isolamento entre contas é aplicado pelo banco de dados: uma conta não consegue ler os dados de outra, mesmo que a interface falhe.</li>
          <li><b>Segredos fora do aplicativo.</b> Nenhuma chave de API viaja no pacote instalado no seu aparelho.</li>
          <li><b>Armazenamento de imagens por hash do conteúdo</b>, com escrita restrita à pasta da sua própria conta — o que evita duplicatas e acesso cruzado.</li>
          <li><b>Tráfego criptografado</b> entre o aplicativo e os nossos servidores.</li>
        </ul>
        <p>Nenhum sistema é imune a incidentes. Se ocorrer um incidente de segurança relevante,
          comunicaremos você e a ANPD conforme exige a LGPD.</p>

        <h2 id="comunidade">7. Conteúdo que você publica na Comunidade</h2>
        <p>Publicar um deck na aba Comunidade torna aquele conteúdo <b>visível para outras pessoas</b>,
          junto do seu nome de exibição, da avaliação recebida e da contagem de downloads.
          A publicação é feita por <i>snapshot</i>: quem baixa fica com a própria cópia.</p>
        <p>Isso tem uma consequência prática: <b>despublicar um deck não apaga as cópias</b> já baixadas
          por outras pessoas. Publique apenas conteúdo que você tenha o direito de compartilhar e que
          não contenha dados pessoais seus ou de terceiros.</p>
        <p>Decks denunciados entram em uma fila de moderação e, quando removidos, saem do ar de fato.</p>

        <h2 id="notificacoes">8. Notificações</h2>
        <p>Os lembretes de estudo são <b>notificações locais</b>, agendadas no próprio aparelho no horário
          que você escolher (padrão 20:00). O alerta de sequência em risco é uma opção separada.
          Você pode desligar ambos no aplicativo ou nas configurações do sistema.</p>

        <h2 id="retencao">9. Retenção e exclusão da conta</h2>
        <p>Mantemos os seus dados enquanto a sua conta existir. <b>A exclusão da conta está disponível
          dentro do próprio aplicativo</b> e remove os seus dados de ponta a ponta — decks, cards,
          sessões, progresso, conquistas e imagens armazenadas.</p>
        <p>Ressalvas honestas sobre o que a exclusão não alcança:</p>
        <ul>
          <li>Cópias de decks que você publicou e que outras pessoas já baixaram permanecem com elas.</li>
          <li>Registros que precisemos manter por obrigação legal ou para defesa em processo são conservados pelo prazo estritamente necessário.</li>
          <li>Backups são sobrescritos no ciclo normal de rotação, em até [DEFINIR prazo — conferir com a configuração do provedor].</li>
        </ul>

        <h2 id="direitos">10. Seus direitos</h2>
        <p>A LGPD garante a você, entre outros, o direito de confirmar a existência de tratamento,
          acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização,
          bloqueio ou eliminação, pedir a portabilidade, obter informação sobre compartilhamentos e
          revogar consentimento.</p>
        <p>Para exercer qualquer um deles, escreva para
          <a href="mailto:blinkflashcards@gmail.com">blinkflashcards@gmail.com</a>. Respondemos em até
          15 dias. Boa parte disso você resolve sozinho e na hora: exportar decks em arquivo e excluir a
          conta são funções do próprio aplicativo.</p>

        <h2 id="criancas">11. Idade mínima</h2>
        <p>O Blink não se destina a menores de 13 anos. Entre 13 e 18 anos, o uso deve contar com
          consentimento e supervisão dos pais ou responsáveis. Se identificarmos uma conta criada por
          criança abaixo da idade mínima, ela será removida.</p>

        <h2 id="internacional">12. Transferência internacional</h2>
        <p>Os provedores de infraestrutura e de IA mencionados nesta política podem processar dados fora
          do Brasil, inclusive nos Estados Unidos. Essas transferências ocorrem com base nas hipóteses
          do art. 33 da LGPD e nas cláusulas contratuais firmadas com cada fornecedor.</p>

        <h2 id="mudancas">13. Mudanças nesta política</h2>
        <p>Se esta política mudar de forma relevante, atualizaremos a data no topo e avisaremos dentro do
          aplicativo antes que a nova versão passe a valer. Continuar usando o Blink depois disso
          significa concordar com o texto atualizado.</p>

        <h2 id="contato">14. Contato</h2>
        <p>Dúvidas, pedidos relativos aos seus dados ou reclamações:
          <a href="mailto:blinkflashcards@gmail.com">blinkflashcards@gmail.com</a>.</p>
        <p>Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>

        <div className="card card--callout">
          <p className="small muted">Veja também os <a href="/termos">Termos de Uso</a>.</p>
        </div>

      </div>
    </main>
  );
}
