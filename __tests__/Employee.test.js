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

test('can set email thru constructor arg', () => {
    const testEM = "dave@dave.dave";
    const emp = new Employee('Dave', '200', testEM);
    expect(emp.email).toBe(testEM);
});

test('can set name thru getName function', () => {
    const testName = 'Dave';
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

test('can set id thru getId function', () => {
    const testId = '100';
    const emp = new Employee('Dave', testId);
    expect(emp.getId()).toBe(testId);
});

test('can set email thru getEmail function', () => {
    const testEM = 'dave@dave.dave';
    const emp = new Employee('dave', '100', testEM);
    expect(emp.getEmail()).toBe(testEM);
});