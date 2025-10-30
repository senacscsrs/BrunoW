// script.js
const screen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

let input = '';

keys.addEventListener('click', function(e) {
    const target = e.target;
    if (!target.matches('button')) return;

    const value = target.value;

    if (target.classList.contains('operator')) {
        if (value === '=') {
            aguardandoSequence(() => {
                screen.value = "ja existe um usuário com esse calculo";
                input = '';
            });
        } else {
            input += value;
            screen.value = input;
        }
    } else if (target.classList.contains('all-clear')) {
        input = '';
        screen.value = '';
    } else {
        input += value;
        screen.value = input;
    }
});

function aguardandoSequence(finalCallback) {
    const steps = ["aguardando.", "aguardando..", "aguardando..."];
    let i = 0;
    function nextStep() {
        if (i < steps.length) {
            screen.value = steps[i];
            i++;
            setTimeout(nextStep, 500);
        } else {
            finalCallback();
        }
    }
    nextStep();
}
