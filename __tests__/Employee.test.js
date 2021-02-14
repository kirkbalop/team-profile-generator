const { test, expect } = require('@jest/globals');
const { TestScheduler, TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('initiates an Employee Object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});