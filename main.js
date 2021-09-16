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
