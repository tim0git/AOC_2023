const fs = require('fs');

const colours = ['red', 'blue', 'green'];
const colourRegex = new RegExp(`(\\d+)\\s+(${colours.join('|')})`, 'g');

const aggregateBallsUsedInEachRound =(allBallsMatchedInRound)=> {
    const colouredBallAccumulator = {
        red: 0,
        blue: 0,
        green: 0,
    };

    allBallsMatchedInRound.forEach(item => {
        const match = item.match(/(\d+) (\w+)/);
        const [, count, color] = match;
        colouredBallAccumulator[color] = parseInt(count);
    });
    return colouredBallAccumulator;
}
const parseGameNumber = (game) => {
    const gameNumberRegex = /Game (\d+)/;
    return parseInt(game.match(gameNumberRegex)[1])
}
const testIfRoundCanBePlayed = (ballsUsedPerRoundForGame, totalBalls) => {
    return ballsUsedPerRoundForGame.red <= totalBalls.red && ballsUsedPerRoundForGame.blue <= totalBalls.blue && ballsUsedPerRoundForGame.green <= totalBalls.green;
}
const gameEngine = (path, totalBalls) => {
    const data = fs.readFileSync(path, 'utf8');
    const games = data.trim().split('\n');
    let result = 0

    games.forEach(game => {
        const rounds = game.split(";")

        const ballsUsedPerRoundForGame = rounds.map(round => {
            const allBallsMatchedInRound = round.match(colourRegex) || [];
            return aggregateBallsUsedInEachRound(allBallsMatchedInRound)
        })

        if(ballsUsedPerRoundForGame.every(round => testIfRoundCanBePlayed(round, totalBalls))) {
            result += parseGameNumber(game);
        }
    })

    return result;
}

module.exports = gameEngine;
