'use strict';

/* ── COUNTDOWN ── */
(function () {
  const launch = new Date();
  launch.setDate(launch.getDate() + 30);
  launch.setHours(0, 0, 0, 0);

  const els = {
    days:    document.getElementById('days'),
    hours:   document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function flip(el, val) {
    if (!el || el.textContent === val) return;
    el.style.transform = 'translateY(-6px)';
    el.style.opacity   = '0';
    setTimeout(() => {
      el.textContent   = val;
      el.style.transform = 'translateY(0)';
      el.style.opacity   = '1';
    }, 120);
  }

  function tick() {
    const diff = launch - Date.now();
    if (diff <= 0) {
      Object.values(els).forEach(e => { if (e) e.textContent = '00'; });
      return;
    }
    flip(els.days,    pad(Math.floor(diff / 86400000)));
    flip(els.hours,   pad(Math.floor((diff % 86400000) / 3600000)));
    flip(els.minutes, pad(Math.floor((diff % 3600000)  / 60000)));
    flip(els.seconds, pad(Math.floor((diff % 60000)    / 1000)));
  }

  // smooth CSS transition on number elements
  Object.values(els).forEach(el => {
    if (el) {
      el.style.transition = 'transform 0.12s ease, opacity 0.12s ease';
    }
  });

  tick();
  setInterval(tick, 1000);
})();

/* ── NOTIFY FORM ── */
(function () {
  const form = document.getElementById('nf');
  const msg  = document.getElementById('nf-msg');
  const inp  = document.getElementById('nf-email');
  const btn  = document.getElementById('nf-btn');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const val = inp.value.trim();
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      msg.textContent = '⚠ Please enter a valid email address.';
      msg.className   = 'nf-msg error';
      inp.focus();
      return;
    }
    btn.disabled    = true;
    btn.textContent = 'Sending…';
    msg.textContent = '';
    setTimeout(() => {
      btn.disabled    = false;
      btn.textContent = 'Notify Me →';
      inp.value       = '';
      msg.textContent = '✅ You\'re on the list! We\'ll reach out at launch.';
      msg.className   = 'nf-msg success';
      setTimeout(() => { msg.textContent = ''; msg.className = 'nf-msg'; }, 7000);
    }, 1300);
  });
})();

/* ── YEAR ── */
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
