const utils = require('./../src/assets/js/utils')

test('validate empty all files', () => {
    form ={
        email:null,
        subject:null,
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('validate empty one file', () => {
    form ={
        email:'some@test.com',
        subject:'test',
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('validate empty two file', () => {
    form ={
        email:'some@test.com',
        subject:null,
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('All values', () => {
    form ={
        email:'some@test.com',
        subject:'test',
        body:"some text"
    };
    expect(utils(form)).toBe(true);
});
