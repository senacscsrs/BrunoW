const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const display = document.getElementById("display");
    if (this.textContent === "=") {
      const thinkingFrames = ["thinking.", "thinking..", "thinking..."];
      let frame = 0;
      let cycles = 0;
      display.value = thinkingFrames[frame];
      let interval = setInterval(() => {
        frame = (frame + 1) % thinkingFrames.length;
        display.value = thinkingFrames[frame];
        if (frame === 0) {
          cycles++;
          if (cycles === 3) {
            clearInterval(interval);
            setTimeout(() => {
              display.value = "hello world";
            }, 500); // 0.5s delay before printing
          }
        }
      }, 400);
    } else if (this.id === "clear") {
      display.value = "";
    } else {
      display.value += this.textContent;
    }
  });
});
