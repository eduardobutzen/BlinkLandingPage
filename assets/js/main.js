/* Blink — comportamento da landing */
(function () {
  'use strict';

  /* ---------- Tema (claro / escuro / sistema) ---------- */
  var root = document.documentElement;
  var STORAGE_KEY = 'blink-theme';

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#e2e2df');
  }

  // O tema inicial já é aplicado inline no <head> para evitar flash.
  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    });
  }

  // Acompanha o sistema enquanto o usuário não escolheu manualmente.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function () {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!saved) applyTheme(systemTheme());
  };
  if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);

  /* ---------- Revelação em scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Lista de espera ----------
     Sem backend ainda: abre o cliente de e-mail com a inscrição pronta.
     Trocar por um POST para o provedor (Formspree, Buttondown, Supabase…)
     quando o serviço estiver definido.                                   */
  var form = document.querySelector('[data-waitlist]');
  if (form) {
    var msg = form.parentNode.querySelector('.form-msg');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var email = (input.value || '').trim();
      if (!email || email.indexOf('@') < 1) {
        if (msg) msg.textContent = 'Digite um e-mail válido para entrar na lista.';
        input.focus();
        return;
      }
      var assunto = encodeURIComponent('Lista de espera do Blink');
      var corpo = encodeURIComponent('Quero avisar quando o Blink chegar nas lojas.\n\nE-mail: ' + email);
      window.location.href = 'mailto:blinkflashcards@gmail.com?subject=' + assunto + '&body=' + corpo;
      if (msg) msg.textContent = 'Abrimos seu e-mail com a inscrição pronta — é só enviar.';
      form.reset();
    });
  }

  /* ---------- Ano no rodapé ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
