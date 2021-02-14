const { test, expect } = require('@jest/globals');
const { TestScheduler, TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('initiates an Employee Object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test('can set name thru constructor arg', () => {
    const name = 'Dave';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('can set id thru constructor arg', () => {
    const idTest = 200;
    const emp = new Employee('Dave', idTest);
    expect(emp.id).toBe(idTest);
});