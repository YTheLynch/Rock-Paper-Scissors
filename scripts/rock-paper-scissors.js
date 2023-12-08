const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
document.querySelector('.js-scoreboard-text').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function pickmove() {
    const randnum = Math.random();
    let move;
    if (randnum >= 0 && randnum < 1 / 3) {
        move = 'rock';
    } else if (randnum >= 1 / 3 && randnum < 2 / 3) {
        move = 'paper';
    } else {
        move = 'scissors';
    }

    console.log(move);
    return move;
}

function playgame(playermove) {
    let computermove = pickmove();

    let result;

    if (playermove === 'rock') {
        if (computermove === 'rock') {
            result = 'Tie.';
            score.ties++;
        } else if (computermove === 'paper') {
            result = 'You lose.';
            score.losses++;
        } else {
            result = 'You win.';
            score.wins++;
        }
    } else if (playermove === 'paper') {
        if (computermove === 'rock') {
            result = 'You win.';
            score.wins++;
        } else if (computermove === 'paper') {
            result = 'Tie.';
            score.ties++;
        } else {
            result = 'You lose.';
            score.losses++;
        }
    } else {
        if (computermove === 'rock') {
            result = 'You lose.';
            score.losses++;
        } else if (computermove === 'paper') {
            result = 'You win.';
            score.wins++;
        } else {
            result = 'Tie.';
            score.ties++;
        }
    }
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-picked-move').innerHTML = `You <img src = "imgs/${playermove}-emoji.png" class = "move-icon"> <img src = "imgs/${computermove}-emoji.png" class = "move-icon"> Computer`;
    document.querySelector('.js-scoreboard-text').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function resetscore() {
    localStorage.removeItem('score');
    document.querySelector('.js-scoreboard-text').innerHTML = `Wins: ${score.wins = 0}, Losses: ${score.losses = 0}, Ties: ${score.ties = 0}`;
}

