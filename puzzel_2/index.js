const fs = require('fs');
const { testIfRoundCanBePlayed, parseGameNumber, calculatePower, aggregateBallsUsedPerRoundForEntireGame } = require('./utils');

const calculateHowManyGamesCanBePlayed = (path, totalBalls) => {
    const data = fs.readFileSync(path, 'utf8');
    const games = data.trim().split('\n');
    let result = 0

    games.forEach(game => {
        const rounds = game.split(";")
        const ballsUsedPerRoundForEntireGame = aggregateBallsUsedPerRoundForEntireGame(rounds)
        if(ballsUsedPerRoundForEntireGame.every(round => testIfRoundCanBePlayed(round, totalBalls))) {
            result += parseGameNumber(game);
        }
    })

    return result;
}
const calculateTotalPower = (path) => {
    const games = fs.readFileSync(path, 'utf8').trim().split('\n');
    let totalPower = 0;

    games.forEach(game => {
        const rounds = game.split(";")

        const ballsUsedPerRoundForEntireGame = aggregateBallsUsedPerRoundForEntireGame(rounds)

        const maxBallsUsedPerRoundForGame = ballsUsedPerRoundForEntireGame.reduce((accumulator, item) => {
            const {red, blue, green} = item;
            accumulator.red = Math.max(accumulator.red, red);
            accumulator.blue = Math.max(accumulator.blue, blue);
            accumulator.green = Math.max(accumulator.green, green);
            return accumulator;
        }, { red: 0, blue: 0, green: 0 });

        totalPower += calculatePower(Object.values(maxBallsUsedPerRoundForGame));
    })

    return totalPower;
};

module.exports = {calculateTotalPower, calculateHowManyGamesCanBePlayed};
