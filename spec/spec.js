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