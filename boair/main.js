// script.js

document.addEventListener('DOMContentLoaded', function() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const forms = {
    'Passagens aéreas': document.getElementById('searchForm'),
    'Hotéis': document.getElementById('hotelForm'),
    'Aluguel de carro': document.getElementById('carForm')
  };

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      Object.values(forms).forEach(f => f.style.display = 'none');
      forms[btn.textContent].style.display = 'flex';
    });
  });
});

// Lógica de envio do formulário de busca
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const origem = this.elements[0].value;
  const destino = this.elements[1].value;
  const dataIda = this.elements[2].value;
  const dataVolta = this.elements[3].value;
  const classe = this.elements[4].value;

  if (origem && destino && dataIda && dataVolta) {
    alert(`Buscando voos de ${origem} para ${destino} (${classe}) de ${dataIda} até ${dataVolta}...`);
    // Aqui você poderia integrar com uma API futuramente
  } else {
    alert('Preencha todos os campos da busca.');
  }
});

// Lógica de envio do formulário de promoções
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = this.elements[0].value;
  const telefone = this.elements[1].value;

  if (email && telefone) {
    alert(`Obrigado por se cadastrar! Você receberá promoções no ${email} e ${telefone}.`);
    this.reset();
  } else {
    alert('Por favor, preencha seu e-mail e telefone.');
  }
});

