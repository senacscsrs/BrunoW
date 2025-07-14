/* --------------------------------------------------------------------
   Modal de contato — Bruno Wojahn
-------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Serviços disponíveis (pode acrescentar mais depois) */
  const services = {
    form: {
      title: 'Formulário de Contato',
    }
  };

  /* 2. HTML do modal (gerado só uma vez) */
  const modalHTML = `
    <div id="modalOverlay" class="modal-overlay">
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button id="modalClose" aria-label="Fechar modal">&times;</button>

        <h2 id="modalTitle"></h2>
        <p id="modalDesc"></p>

        <form action="https://formspree.io/f/xgvybzwo" method="POST">
          <label>Nome
            <input type="text" name="nome" required />
          </label>

          <label>E-mail
            <input type="email" name="email" required />
          </label>

          <label>Mensagem
            <textarea name="mensagem" rows="4" required></textarea>
          </label>

          <!-- Campo honeypot do Formspree para bloquear bots -->
          <input type="text" name="_gotcha" style="display:none" />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  /* 3. Seleções rápidas */
  const overlay    = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc  = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  /* 4. Abrir modal */
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = services[btn.dataset.service];
      if (!service) return;

      modalTitle.textContent = service.title;
      modalDesc.textContent  = service.desc || '';

      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  /* 5. Fechar modal */
  const closeModal = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.style.display === 'flex') closeModal(); });
});
