let bau_aberto = false;
const bau = document.getElementById('bau');
bau.disabled = true;
let bauimagem = document.getElementById('bau_img');
let iout = null;
let img = document.getElementById('imgcontainer');

const imagens = [
  'i1.jpg',
  'i2.jpg',
  'i3.jpg',
  'i4.jpg',
  'i5.jpg',
  'i6.jpg',
  'i7.jpg',
  'i8.jpg',
  'i9.jpg',
  'i10.jpg',
  'i11.jpg',
  'i12.jpg',
  'i13.jpg',
  'i14.jpg',
  'i15.jpg',
  'i16.jpg',
  'i17.jpeg',
  'i18.jpeg',
  'i19.jpeg',
  'i20.jpeg',
  'i21.jpeg',
  'i22.jpeg',
  'i23.jpeg',
  'i24.jpeg',
  'i25.jpeg',
  'i26.jpeg',
  'i27.jpeg',
  'i28.jpeg',
  'i29.jpeg',
  'i30.jpeg',
  'i31.jpeg'
];

let imagem_escolhida = null;

function toggleImagens() {
  iout = "imagens";
  bau.style.cursor = 'pointer';
  bau.disabled = false;
  piada.textContent = null;
  img.src = null;
  img.style.display = 'none';
}

function toggleBau() {
  switch (iout) {
    case "imagens":
      toggleBauImgs();
      break;
    default:
      console.log('algodeumitoerrado');
  }
}

function toggleBauImgs() {
  if (bau_aberto === false) {
    imagem_escolhida = `imagensarray/${imagens[Math.floor(Math.random() * imagens.length)]}`;
    bau_aberto = true;
    bauimagem.src = 'imgs/bauaberto.png';
    bau.classList.add('aberto');
    img.src = imagem_escolhida;
    img.style.display = 'block';
    return;
  } else if (bau_aberto) {
    bau_aberto = false;
    bauimagem.src = 'imgs/baufechado.png';
    bau.classList.remove('aberto');
    img.src = null;
    img.style.display = 'none';
    return;
  } else {
    console.log("algodeuerrado");
  }
}

function handleSelect() {
  const select = document.getElementById('imgoutxt');
  const valor = select.value;

  if (valor === 'imagens') {
    toggleImagens();
  } else {
    bau.style.cursor = 'not-allowed';
    bau.disabled = true;
    piada.textContent = null;
    img.src = null;
    img.style.display = 'none';
  }
}
