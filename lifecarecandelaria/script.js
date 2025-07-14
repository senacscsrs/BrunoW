
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in intersection observer (preserva seu código atual)
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, options);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Dados dos serviços com base nos profissionais
  const services = {
    farmacia: {
      title: 'Farmácia Estética',
      img: 'imgs/jessi.jpeg',
      desc: `Com formação sólida e paixão pelo cuidado com a pele, Jéssica une ciência e estética para promover autoestima e bem-estar. Especialista em procedimentos minimamente invasivos, oferece atendimentos personalizados com foco na naturalidade dos resultados.<br><br><strong>Profissional responsável:</strong> Jéssica Luisa Wojahn, Farmacêutica Esteta.`
    },
    psicologia: {
      title: 'Psicologia',
      img: 'imgs/sandra.jpeg',
      desc: `Sandra atua com empatia e escuta ativa, ajudando pacientes a enfrentarem desafios emocionais e construírem uma vida com mais equilíbrio e saúde mental. Seu atendimento é acolhedor e ético, respeitando a individualidade de cada pessoa.<br><br><strong>Profissional responsável:</strong> Sandra Eick, Psicóloga.`
    },
    massoterapia: {
      title: 'Massoterapia',
      img: 'imgs/gio.jpeg',
      desc: `Especializada em terapias manuais, Giovana utiliza técnicas como relaxante, terapêutica e drenagem linfática para aliviar tensões, dores e melhorar a qualidade de vida dos pacientes. Seu toque profissional é sinônimo de cuidado e bem-estar.<br><br><strong>Profissional responsável:</strong> Giovana Schwantz, Massoterapeuta.`
    },
    fisioterapia_quiropraxia: {
      title: 'Fisioterapia Quiropraxia/Osteopatia',
      img: 'imgs/gui.jpeg',
      desc: `Guilherme é referência em tratamentos musculoesqueléticos, combinando fisioterapia, quiropraxia e osteopatia para recuperar movimentos, aliviar dores e melhorar a postura de forma segura e eficaz.<br><br><strong>Profissional responsável:</strong> Guilherme Rocha, Fisioterapeuta Quiropraxista/Osteopata.`
    },
    fisioterapia: {
      title: 'Fisioterapia',
      img: 'imgs/tania.jpeg',
      desc: `Com dedicação e vasta experiência clínica, Tânia desenvolve planos terapêuticos individualizados para reabilitação física, alívio de dores crônicas e prevenção de lesões, sempre prezando pela qualidade e conforto no atendimento.<br><br><strong>Profissional responsável:</strong> Tânia Zanella, Fisioterapeuta.`
    },
    nutricao: {
      title: 'Nutrição',
      img: 'imgs/natanaine.jpeg',
      desc: `Natanaine acredita na nutrição como ferramenta de transformação. Com escuta atenta e abordagem atualizada, ela propõe planos alimentares personalizados, promovendo saúde, bem-estar e uma relação equilibrada com a comida.<br><br><strong>Profissional responsável:</strong> Natanaine Rodrigues Bohrer, Nutricionista.`
    },
    psiquiatria: {
      title: 'Psiquiatria',
      img: 'imgs/tiago.jpeg',
      desc: `Com um olhar humano e técnico, Dr. Tiago conduz seus atendimentos com ética, empatia e conhecimento científico. Atua no diagnóstico e tratamento de transtornos mentais, promovendo saúde emocional e qualidade de vida.<br><br><strong>Profissional responsável:</strong> Dr. Tiago Nunes Braz, Psiquiatra.`
    },
    podologia: {
      title: 'Podologia',
      img: 'imgs/lovana.jpeg',
      desc: `Especialista no cuidado com os pés, Lovana oferece tratamentos para calos, unhas encravadas, micose e prevenção de complicações, especialmente em pacientes diabéticos. Seu atendimento é cuidadoso, higiênico e acolhedor.<br><br><strong>Profissional responsável:</strong> Lovana Grützmacher, Podologista.`
    }
  };

  let modalHTML = `
  <div id="modalOverlay" class="modal-overlay" style="display:none;">
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button id="modalClose" aria-label="Fechar modal">&times;</button>
      <h2 id="modalTitle"></h2>
      <img id="modalImg" src="" alt="" />
      <p id="modalDesc"></p>
      <a href="https://wa.me/5551996941935" target="_blank" class="btn-primary" style="margin-top:1rem; display:inline-block;">Reservar horário</a>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const overlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  // Abrir modal
  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceKey = btn.dataset.service;
      const service = services[serviceKey];
      if (!service) return;

      modalTitle.textContent = service.title;
      modalImg.src = service.img;
      modalImg.alt = service.title;
      modalDesc.innerHTML = service.desc;

      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Fechar modal
  const closeModal = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Esc para fechar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
      closeModal();
    }
  });
});

  window.addEventListener('DOMContentLoaded', () => {
    const flag = 'prototypeAlertShown';   // nome da chave

    if (!sessionStorage.getItem(flag)) {  // primeira visita nesta guia
      alert('Você está visualizando um protótipo; qualquer mudança, mande um e‑mail para bhwojahn@outlook.com');
      sessionStorage.setItem(flag, '1');  // grava para não repetir
    }
  });
