const spinBtn = document.getElementById("spin");
const slot1El = document.getElementById("slot1");
const slot2El = document.getElementById("slot2");
const slot3El = document.getElementById("slot3");
const message = document.getElementById("message");
const balanceDisplay = document.getElementById("balance");

let balance = 100;
const emojis = ["🍒", "🍋", "🍇", "🔔", "💎"];

spinBtn.addEventListener("click", () => {
  if (balance <= 0) return;


  [slot1El, slot2El, slot3El].forEach(slot => {
    slot.classList.add("spinning");
  });


  let spinInterval = setInterval(() => {
    slot1El.textContent = randomEmoji();
    slot2El.textContent = randomEmoji();
    slot3El.textContent = randomEmoji();
  }, 100);


  setTimeout(() => {
    clearInterval(spinInterval);


   let slot1, slot2, slot3;

if (Math.random() < 0.2) {
  slot1 = slot2 = slot3 = randomEmoji();
} else {

  do {
    slot1 = randomEmoji();
    slot2 = randomEmoji();
    slot3 = randomEmoji();
  } while (slot1 === slot2 && slot2 === slot3);
}


    slot1El.textContent = slot1;
    slot2El.textContent = slot2;
    slot3El.textContent = slot3;


    [slot1El, slot2El, slot3El].forEach(slot => {
      slot.classList.remove("spinning");
    });

    if (slot1 === slot2 && slot2 === slot3) {
      message.textContent = "🎉 Vamosss! Você Ganhou $50!";
      balance += 50;
    } else {
      message.textContent = "😢 Nada... Você Perdeu $10.";
      balance -= 10;
    }

    if (balance <= 0) {
      message.textContent = "💀 You're broke! Refresh to restart.";
      spinBtn.disabled = true;
      spinBtn.style.opacity = 0.5;
    }

    balanceDisplay.textContent = `Balance: $${balance}`;
  }, 1000);
});

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}
