var code = require('../grader.js');

describe('Letter Grader', function () {
    it('should take a test score and return the equivalent letter grade', function () {
        expect(code.outputLetterGrader(99)).toEqual('A');
        expect(code.outputLetterGrader(88)).toEqual('B');
        expect(code.outputLetterGrader(77)).toEqual('C');
        expect(code.outputLetterGrader(66)).toEqual('D');
        expect(code.outputLetterGrader(55)).toEqual('F');
    })
});

describe('Average Score', function () {
    it('should take an array of test scores and return the average score',  function () {
        expect(code.outputAverageScore([90, 95, 87, 60])).toEqual(83);
        expect(code.outputAverageScore([90, 95, 87, 60, 54])).toEqual(77.2);
        expect(code.outputAverageScore([90, 95, 85])).toEqual(90);
        expect(code.outputAverageScore([90, 95])).toEqual(92.5);
        expect(code.outputAverageScore([90])).toEqual(90);
    })
})

describe('Median Score', function () {
    it('should take an array of test scores and return the median score', function () {
        expect(code.outputMedianScore([52,80,80,86,94])).toEqual(80);
        expect(code.outputMedianScore([52,79,80,86,94,98])).toEqual(83);
    })
})