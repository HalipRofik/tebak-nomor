'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    
    // jika input salah
    if (!guess) {
        displayMessage("Input Salah");
        
        // jika benar
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage("🎉 Benar!");
        document.body.style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // jika salah
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Terlalu Tinggi!' : '📉 Terlalu Rendah!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Eleh Sia!');
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = '#ff5e58';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Mulai tebak...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})