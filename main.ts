export{}
let message = 'Hello Buddy!';
console.log(message);
//Types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Clark';
let sentence: string = `My name is ${name}. I am learning TypeScript!`;
console.log(sentence);
//good for static type checking and intellisense (name.*) in VSC!!!

//Sub-Types
let n: null = null;
let u: undefined = undefined;
//null and undefined are subtypes of above and be assigned to all 3.
let isNew: boolean = null;
let myName: string = undefined;

//Array-types
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string,number] = ['Clark', 99];   //Types and Values must match!!!

//enum Type
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);  // prints 2

enum Color2 {Red = 11, Green, Blue};
let d: Color2 = Color2.Blue;
console.log(d); //prints 13

//Any Type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Clark';

