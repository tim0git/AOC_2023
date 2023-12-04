const gameEngine = require('../index');

describe('gameEngine', () => {
    it('should return a number', () => {
        const result = gameEngine("test_input.txt",{red: 0, blue: 0, green: 0});
        expect(typeof result).toEqual('number');
    });
    it('should return 8 when given the possible input of {12: red, 13: blue, 14: green}', () => {
        const result = gameEngine("test_input.txt", {red: 12, blue: 14, green: 13});
        expect(result).toEqual(8);
    });
    it('should return 2449 when given the possible input of {red: 12, green: 13, blue: 14}', () => {
        const result = gameEngine("input.txt", {red: 12, green: 13, blue: 14});
        expect(result).toEqual(2449);
    });
});


