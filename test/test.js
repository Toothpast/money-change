var assert = require('assert');
var C = require('./change.js')
describe('change', function () {
    describe('匯率換算', function () {
        it("台幣換美金匯率", function () {
            assert.equal('29.92',C.change('NT', 'US'));
        });
    });
})