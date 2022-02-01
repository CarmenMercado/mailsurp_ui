import {utils} from "../src/assets/js/utils";

test('validate empty all files', () => {
    const form ={
        email:null,
        subject:null,
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('validate empty one file', () => {
    const form ={
        email:'some@test.com',
        subject:'test',
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('validate empty two file', () => {
    const form ={
        email:'some@test.com',
        subject:null,
        body:null
    };
    expect(utils(form)).toBe(false);
});

test('All values', () => {
    const form ={
        email:'some@test.com',
        subject:'test',
        body:"some text"
    };
    expect(utils(form)).toBe(true);
});
