var assert = require('assert');
var C = require('./change.js')
describe('change', function () {
    describe('�ײv����', function () {
        it("�x���������ײv", function () {
            assert.equal('29.92',C.change('NT', 'US'));
        });
    });
})