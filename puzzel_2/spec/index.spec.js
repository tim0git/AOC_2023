const {calculateHowManyGamesCanBePlayed, calculateTotalPower} = require('../index');

describe('calculateHowManyGamesCanBePlayed', () => {
    it('should return a number', () => {
        const result = calculateHowManyGamesCanBePlayed("test_input.txt",{red: 0, blue: 0, green: 0});
        expect(typeof result).toEqual('number');
    });
    it('should return 8 when given the possible input of {12: red, 13: blue, 14: green}', () => {
        const result = calculateHowManyGamesCanBePlayed("test_input.txt", {red: 12, blue: 14, green: 13});
        expect(result).toEqual(8);
    });
    it('should return 2449 when given the possible input of {red: 12, green: 13, blue: 14}', () => {
        const result = calculateHowManyGamesCanBePlayed("input.txt", {red: 12, green: 13, blue: 14});
        expect(result).toEqual(2449);
    });
    it('should return total power of 2286 when passed test data', () => {
        const result = calculateTotalPower("test_input.txt");
        expect(result).toEqual(2286);
    });
    it('should return total power of 63981 when passed test data', () => {
        const result = calculateTotalPower("input.txt");
        expect(result).toEqual(63981);
    });
});


