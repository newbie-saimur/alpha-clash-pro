let currentScore, currentLife;

function goToScoreBoard() {
    document.getElementById('play-ground').classList.add('hidden');
    document.getElementById('score').classList.remove('hidden');
    document.getElementById('total-score-gained').innerText = currentScore;
}

function updateScore() {
    currentLife = 3;
    currentScore = 0;
    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('current-life').innerText = currentLife;
}

function getRandomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const index = Math.round(Math.random() * 25);
    return alphabets[index];
}

// Game Loop - Continue until Life Become 0
function gameLoop() {
    const alpha = getRandomAlphabet();
    document.getElementById('show-alpha').innerText = alpha;
    document.getElementById(alpha).classList.replace('bg-white', 'bg-[#FFA500]');
}

// Handling KeyPress in the PlayGround
document.addEventListener('keyup', function (event) {
    if (!document.getElementById('home').classList.contains('hidden') && event.key.toLowerCase() === 'enter') {
        document.getElementById('home').classList.add('hidden');
        document.getElementById('play-ground').classList.remove('hidden');
        updateScore();
        gameLoop();
    }
    else if (!document.getElementById('play-ground').classList.contains('hidden')) {
        const pressedByPlayer = event.key.toLowerCase();
        const expected = document.getElementById('show-alpha').innerText.toLowerCase();
    
        if (pressedByPlayer === expected) {
            currentScore += 1;
            document.getElementById('current-score').innerText = currentScore;
        }
        else if(pressedByPlayer !== 'escape'){
            currentLife -= 1;
            document.getElementById('current-life').innerText = currentLife;
        }
        document.getElementById(expected).classList.replace('bg-[#FFA500]', 'bg-white');
        if (currentLife && pressedByPlayer !== 'escape') gameLoop();
        else goToScoreBoard();
    }
});

// Button Event Handling - Home & Score Page Button
document.getElementById('play-btn').addEventListener('click', function () {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('play-ground').classList.remove('hidden');
    updateScore();
    gameLoop();
});

document.getElementById('play-again-btn').addEventListener('click', function () {
    document.getElementById('score').classList.add('hidden');
    document.getElementById('play-ground').classList.remove('hidden');
    updateScore();
    gameLoop();
});

document.getElementById('go-home-btn').addEventListener('click', function () {
    document.getElementById('score').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    updateScore();
});

