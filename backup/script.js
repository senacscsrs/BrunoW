document.addEventListener('DOMContentLoaded', () => {
  /* --- Modal --- */
  const services = {
    form: { title: 'Formulário de Contato' }
  };

  document.body.insertAdjacentHTML(
    'beforeend',
    `<div id="modalOverlay" class="modal-overlay">
       <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
         <button id="modalClose" aria-label="Fechar modal">&times;</button>
         <h2 id="modalTitle"></h2><p id="modalDesc"></p>
         <form action="https://formspree.io/f/xgvybzwo" method="POST">
           <label>Nome <input type="text" name="nome" required></label>
           <label>E‑mail <input type="email" name="email" required></label>
           <label>Mensagem <textarea name="mensagem" rows="4" required></textarea></label>
           <input type="text" name="_gotcha" style="display:none">
           <button type="submit">Enviar</button>
         </form>
       </div>
     </div>`
  );

  const overlay    = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc  = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const svc = services[btn.dataset.service];
      if (!svc) return;
      modalTitle.textContent = svc.title;
      modalDesc.textContent  = svc.desc || '';
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.style.display === 'flex') closeModal(); });

  /* ---------- PRELOADER ---------- */
  const pre = document.getElementById('preloader');
  if (pre) {
    const ring = pre.querySelector('.progress');   // anel que anima

    const waitAfterComplete = 1000; // 1 segundo parado após animação

    const fade = () => {
      pre.classList.add('fade-out'); // inicia fade-out (CSS)
      // Remove do DOM após a transição de opacidade terminar (1s)
      pre.addEventListener('transitionend', () => pre.remove(), { once: true });
    };

    if (ring) {
      ring.addEventListener('animationend', e => {
        if (e.animationName === 'fillRing') {
          // Quando o círculo completar, esperar 1s e fazer fade
          setTimeout(fade, waitAfterComplete);
        }
      });
    } else {
      // fallback: se não achar anel, some em 3s
      setTimeout(fade, 3000);
    }

    // Failsafe: força remoção após 5s pra evitar travar
    setTimeout(() => {
      if (document.body.contains(pre)) fade();
    }, 5000);
  }
});
