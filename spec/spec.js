var code = require('../grader.js');


describe('Letter Grader', function () {
    it('should take a test score and return the equivalent letter grade', function () {
        expect(code.outputLetterGrader(98)).toEqual('A');
    })
});