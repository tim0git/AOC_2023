const fs = require('fs');

const colours = ['red', 'blue', 'green'];
const colourRegex = new RegExp(`(\\d+)\\s+(${colours.join('|')})`, 'g');

const aggregateBallsUsedInEachRound = (allBallsMatchedInRound) => {
    return allBallsMatchedInRound.reduce((accumulator, item) => {
        const [, count, color] = item.match(/(\d+) (\w+)/);
        accumulator[color] = (accumulator[color] || 0) + parseInt(count);
        return accumulator;
    }, { red: 0, blue: 0, green: 0 });
};
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
