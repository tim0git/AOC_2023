const colours = ['red', 'blue', 'green'];
const colourRegex = new RegExp(`(\\d+)\\s+(${colours.join('|')})`, 'g');
const parseGameNumber = (game) => {
    const gameNumberRegex = /Game (\d+)/;
    return parseInt(game.match(gameNumberRegex)[1])
}
const aggregateBallsUsedInEachRound = (allBallsMatchedInRound) => {
    return allBallsMatchedInRound.reduce((accumulator, item) => {
        const [, count, color] = item.match(/(\d+) (\w+)/);
        accumulator[color] = (accumulator[color] || 0) + parseInt(count);
        return accumulator;
    }, { red: 0, blue: 0, green: 0 });
};
const aggregateBallsUsedPerRoundForEntireGame = (rounds) => {
    return rounds.map(round => {
        const allBallsMatchedInRound = round.match(colourRegex) || [];
        return aggregateBallsUsedInEachRound(allBallsMatchedInRound)
    })
}
const testIfRoundCanBePlayed = (ballsUsedPerRoundForGame, totalBalls) => {
    return ballsUsedPerRoundForGame.red <= totalBalls.red && ballsUsedPerRoundForGame.blue <= totalBalls.blue && ballsUsedPerRoundForGame.green <= totalBalls.green;
}
const calculatePower = (counts) => counts.reduce((acc, count) => acc * count, 1);

module.exports = {aggregateBallsUsedInEachRound, aggregateBallsUsedPerRoundForEntireGame, testIfRoundCanBePlayed, parseGameNumber, calculatePower};
