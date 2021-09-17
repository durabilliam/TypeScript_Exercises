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

let myVariable: any = 10;
console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();

//Unknown type
let myVariable2: unknown = 10;

function hasName(obj: any): obj is { name: string}{
  return obj &&
    typeof obj === "object" &&
    "name" in obj
}
if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}
//(myVariable2 as string).toUpperCase();

//Type Inference
let a;
a = 20;
a = true;

let b = 20; //here b is Infered to a NUMBER Type when value is declared!!

//Union of types for same Variable - restrict to specified type.
//Will give intellesense support where "any" type will not.
let multiType: number | boolean;
multiType = 20;
multiType = true;


//Functions
function add(num1: number, num2: number): number{
  return num1 + num2;
}
add(5, 10);

//num2?: number  --> makes optional parameter
function sum(num1: number, num2?: number): number{
  if (num2)
    return num1 + num2;
  else
    return num1;
}
sum(5, 10);

//num2?: number  --> makes default parameter with value 10
function summing(num1: number, num2: number = 10): number{
  if (num2)
    return num1 + num2;
  else
    return num1;
}
summing(5, 10);
summing(5)

//Interface
interface Person{
  firstName: string;
  lastName: string;
}

function fullName(person: Person){
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Clark',
  lastName: 'Kent'
};

fullName(p)