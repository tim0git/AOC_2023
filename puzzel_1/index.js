const fs = require('fs');

const wordMap = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0"
}
const sumCalibrationDocument = (path) => {
    const fileContents  = fs.readFileSync(path, 'utf8').trim().split('\n');
    let result = 0

    fileContents.forEach(line => {
        const lineReversed = line.split('').reverse().join('')

        const numbers = Object.keys(wordMap);
        const numbersString = numbers.join('|');
        const regex = new RegExp(`\\d|${numbersString}`, 'g');
        const regexReversed = new RegExp(`\\d|${numbers.map(str => str.split('').reverse().join('')).join('|')}`, 'g');

        const matches = line.match(regex);
        const matchesReversed = lineReversed.match(regexReversed);
        if (matches[0].length > 1) {
            matches[0] = wordMap[matches[0]]
        }

        if (matchesReversed[0].length > 1) {
            matchesReversed[0] = wordMap[matchesReversed[0].split('').reverse().join('')]
        }

        const number = matches[0] + matchesReversed[0]

        result += parseInt(number)
    })
    return result
}

module.exports = sumCalibrationDocument;
