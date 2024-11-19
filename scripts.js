const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humaScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS]
    const randomeNumber = Math.floor(Math.random() * 3)

    return choices[randomeNumber]

}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if (
        (human === GAME_OPTION.PAPER && machine === GAME_OPTION.ROCK) ||
        (human === GAME_OPTION.ROCK && machine === GAME_OPTION.SCISSORS) ||
        (human === GAME_OPTION.SCISSORS && machine === GAME_OPTION.PAPER)) {
        humaScoreNumber++
        humanScore.innerHTML = humaScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "você perdeu para a Alexa!"
    }

}

