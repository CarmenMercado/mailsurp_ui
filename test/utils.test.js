const sum = require('./sum.js');
const utils = require('./../assets/js/utils')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('validate files', () => {
    form ={
        email:null,
        subject:null,
        body:null
    };
    expect(utils(form)).toBe(false);
});
