// basic types
let id: number = 5;
let company: string = 'nahuel';
let isPublishied: boolean = true;
let x: any = 'Hello';
let age: number;
age = 36;

//arrays
let array: number[] = [1, 2, 3, 4, 5, 6];
let arr: any[] = [1, true, 'Hello'];

//tuple
let person: [number, string, boolean] = [1, 'Brad', true];
// tuple array
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
];

//Union
let pid: string | number;

pid = '23'; // correct
pid = 23; // also correct

//Enum
enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

//objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: 'john',
};

// Type assertion
let cid: any = 1;
let customerId = <number>cid;
let otherCustomerId = cid as number;

// functions

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  //does not return
  console.log(message);
}

//Interfaces
interface UserInterface {
  readonly id: number; // read only property
  name: string;
  age?: number; // optional property
}
const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, 'Brad');

console.log(brad.register());
