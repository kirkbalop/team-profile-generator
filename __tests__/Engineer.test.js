const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Can set github thru constructor arg', () => {
    const testGit = "githubguy";
    const emp = new Engineer('dave', 1, 'dave@dave.dave', testGit);
    expect(emp.github).toBe(testGit);
});

test('getRole function returns "engineer"', () => {
    const testRole = "Engineer";
    const emp = new Engineer('Dave', 1, 'dave@dave.dave', "githubguy");
    expect(emp.getRole()).toBe(testRole);
});

test('can get Github username thru getGithub function', () => {
    const testUN = "githubguy";
    const emp = new Engineer('dave', 1, 'dave@dave.dave', testUN);
    expect(emp.getGithub()).toBe(testUN);
});