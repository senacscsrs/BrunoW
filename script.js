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

  document.querySelectorAll('.formopen').forEach(btn => {
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


//BOTÃO SPIN BTN

// BOTÃO SPIN BTN
document.addEventListener('DOMContentLoaded', () => {
  const buttonData = {
    spinBtn1: {
      barrelClass: 'barrelImg1',
      projects: [
        'institucional-helloworld',
        'institucional-imagens-etamanhos',
        'institucional-boair',
        'institucional-gasolinajs',
        'institucional-trabalhodesafio',
      ],
    },
    spinBtn2: {
      barrelClass: 'barrelImg2',
      projects: [
        'pessoal-redvsblue',
        'pessoal-cores',
        'pessoal-chute',
        'pessoal-simon',
      ],
    },
    spinBtn3: {
      barrelClass: 'barrelImg3',
      projects: [
        'profissional-lifecare',
        'profissional-placeholder1',
        'profissional-placeholder2',
      ],
    },
  };

  const state = {
    spinBtn1: { rotation: 30, index: 0, clicks: 0 },
    spinBtn2: { rotation: 30, index: 0, clicks: 0 },
    spinBtn3: { rotation: 30, index: 0, clicks: 0 },
  };

  function showProject(projectIds, visibleIndex) {
    projectIds.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.toggle('visible', idx === visibleIndex);
    });
  }

  Object.entries(buttonData).forEach(([btnId, data]) => {
    const btn = document.querySelector(`button.${btnId}`);
    const barrelImg = btn?.querySelector(`.${data.barrelClass}`);
    if (!btn || !barrelImg) return;

    // Inicializar rotação
    barrelImg.style.transform = `rotate(30deg)`;

    // Mostrar primeiro projeto
    showProject(data.projects, 0);

    btn.addEventListener('click', () => {
      const st = state[btnId];
      st.clicks++;
      st.rotation += 60;
      st.index = (st.index + 1) % data.projects.length;

      barrelImg.style.transform = `rotate(${st.rotation}deg)`;
      barrelImg.style.transition = 'transform 0.5s ease-in-out';

      showProject(data.projects, st.index);
    });
  });
});

const flag = 'visitedPortfolio'; 

if (!sessionStorage.getItem(flag)) {  
      alert('Este portoflio atualmente está em desenvolvimento, pode ser que algumas coisa ainda não funcionem como esperado.');
      sessionStorage.setItem(flag, '1');  
    } ;
