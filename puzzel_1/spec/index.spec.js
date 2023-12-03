const sumCalibrationDocument = require('../index.js');

describe('CalibrationDocumentSummation', () => {
    it('should return a number', () => {
        const result = sumCalibrationDocument("./calibration_doc.txt")
        expect(typeof result).toBe('number')
    });
    it('should return 142 when passed test data', () => {
        const result = sumCalibrationDocument("./calibration_doc.txt")
        expect(result).toBe(142)
    });
    it('should return 281 when passed new test data', () => {
        const result = sumCalibrationDocument("./calibration_doc2.txt")
        expect(result).toBe(281)
    });
    it('should return 53389 when passed new test data', () => {
        const result = sumCalibrationDocument("./calibration_doc.real.txt")
        expect(result).toBe(53389)
    });
});
