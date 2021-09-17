"use strict";
exports.__esModule = true;
var message = 'Hello Buddy!';
console.log(message);
//Types
var isBeginner = true;
var total = 0;
var name = 'Clark';
var sentence = "My name is " + name + ". I am learning TypeScript!";
console.log(sentence);
//good for static type checking and intellisense (name.*) in VSC!!!
//Sub-Types
var n = null;
var u = undefined;
//null and undefined are subtypes of above and be assigned to all 3.
var isNew = null;
var myName = undefined;
//Array-types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Clark', 99]; //Types and Values must match!!!
//enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // prints 2
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 11] = "Red";
    Color2[Color2["Green"] = 12] = "Green";
    Color2[Color2["Blue"] = 13] = "Blue";
})(Color2 || (Color2 = {}));
;
var d = Color2.Blue;
console.log(d); //prints 13
//Any Type
var randomValue = 10;
randomValue = true;
randomValue = 'Clark';
var myVariable = 10;
console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();
//Unknown type
var myVariable2 = 10;
function hasName(obj) {
    return obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//(myVariable2 as string).toUpperCase();
//Type Inference
var a;
a = 20;
a = true;
var b = 20; //here b is Infered to a NUMBER Type when value is declared!!
//Union of types for same Variable - restrict to specified type.
//Will give intellesense support where "any" type will not.
var multiType;
multiType = 20;
multiType = true;
//Functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//num2?: number  --> makes optional parameter
function sum(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
sum(5, 10);
//num2?: number  --> makes default parameter with value 10
function summing(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
summing(5, 10);
summing(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Clark',
    lastName: 'Kent'
};
fullName(p);
