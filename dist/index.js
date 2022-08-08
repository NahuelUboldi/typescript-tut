"use strict";
// basic types
let id = 5;
let company = 'nahuel';
let isPublishied = true;
let x = 'Hello';
let age;
age = 36;
//arrays
let array = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'Brad', true];
// tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
//Union
let pid;
pid = '23'; // correct
pid = 23; // also correct
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'john',
};
// Type assertion
let cid = 1;
let customerId = cid;
let otherCustomerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    //does not return
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
console.log(brad.register());
