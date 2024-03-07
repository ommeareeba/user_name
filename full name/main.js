"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string concatenation.
var firstName = 'Omme';
var lastName = 'Areeba';
var fullName = firstName + '' + lastName;
console.log(fullName);
//template literals
var firstName = 'Areeba';
var lastName = 'Khan';
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
