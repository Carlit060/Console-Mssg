//1.6 Assignment
console.log("hey do you have any pets ?");

//------------------------------------------------------------------------------------------------------------------

//2.4 Assignment
var life = 100; //this is my life bar NUMBER
life = life - 10;
//90
life = life / 10;
var name = "Carlos Franco"; //this is the name displayed in the game STRING
var checkout = false; //BOOLEAN
var box = null;
//const life = 100;
//let life = 100;
life = life - 50;
var x = 5;
let y = 12;
if (true) {
  //var x = 6;
  let x = 13;
}
console.log(x);
console.log(y);

//const life =100; can't be re declared
//let life = 100; it can be changed with
//life = life -50;
//const usually used for imaged

console.log(life);

//------------------------------------------------------------------------------------------------------------------

//3.4 Assignment
const fullName = "Carlos Franco";
const state = "Fliping Wood";
function toUpeer(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}
const toUpperCase = () => {
  hello;
};
// const location = {
//   country: US,
//   state: TX,
//   city: SA,
// };
//<button onmouseover="this.inerHTML=Date()">The time</button>;

//------------------------------------------------------------------------------------------------------------------

//4.3 Assignment
const namee = "Carlito";
const agee = "22";
const combined = namee + agee;
console.log(`hello Im ${name}, and I love graphic design`);

//4.5 Assignment

/*In the following example, we're creating four variables and then concatenating them
together to create the result variable. The resulting
message will be printed to the console using console.log()*/
let firstName = "Carlos";
let lastName = "Franco";
let age = "22";
let country = "USA";
//string concatenation with the " + " operator
let result =
  "My Name is " +
  firstName +
  " " +
  lastName +
  ".My age is " +
  age +
  " and I live in " +
  country +
  ".";
console.log(result);
//ES6 way of doing concatenations the ${} syntax.
result = `My Name is ${firstName} ${lastName}.My age is ${age} and I live in ${country}.`;
console.log(result);

//"If" Conditional Statement
/*if statement is used to check if a certain condition is true,
and if so, execute a block of code*/
//Example
/*In the following example, We have defined a variable num and given it a 
value of 10.The if statement checks if the value of (num%2) is equal to 0.
If it is, the statement inside the curly braces after if is executed, which
in this case is printing "Number is Even" to the console using console.log()*/
let num = 10;
if (num % 2 == 0) {
  console.log("Number is Even");
}

//switch Statement
/*A switch statement is a type of control flow statement that allows you to
execute different code blocks based on the value of a variable or expression.*/
//Example
/*In the following example,the variable day is set to 4.The switch statement
checks the value of day and executes the corresponding code block.Since day 
is equal to 4,the code block for the case 4: statement is executed, and the
console will log 'Thursday'.If day had been set to any other value other than
case values, the code block for the default: statement would have been executed.*/

let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

//string method
/*JavaScript provides several built-in methods for working with strings. Here are some of the most 
commonly used string methods in JavaScript:*/

//concat(string1, string2, ... , stringN): Concatenates two or more strings together.
//Example:
let s1 = "Carlos";
let s2 = "Franco";
result = s1.concat(" ", s2);
console.log(result); // Output: Carlos Franco

//slice(start, end): Extracts a portion of the string and returns it as a new string.
//Example:
let myString = "Carlos Franco!";
let subString = myString.slice(0, 6);
console.log(subString); // Output: Carlos

//replace(searchValue, replaceValue): Searches a string for a specified value and replaces it with another value.
//Example:
let s3 = "Hello Carlos!";
let newString = s3.replace("Carlos", "Franco");
console.log(newString); // Output: Hello Franco!

//toLowerCase(): Converts all the characters in a string to lowercase.
//toUpperCase(): Converts all the characters in a string to uppercase.
//Example:
let s4 = "Carlos Franco!";
let lowerCaseString = s4.toLowerCase();
let upperCaseString = s4.toUpperCase();
console.log(lowerCaseString); // Output: carlos franco!
console.log(upperCaseString); // Output: CARLOS FRANCOQ

//split(separator, limit): Splits a string into an array of substrings based on a specified separator.
//Example
let s5 = "Carlos Franco!";
let myArray = myString.split(" ");
console.log(myArray); // Output: ["Carlos", "Franco!"]
//These are just a few of the many string methods available in JavaScript.

//Number Method
/*JavaScript provides several built-in methods for working with numbers.
 Here are some of the most commonly used numeric methods in JavaScript:*/

//toString(): Returns a string representation of the number.
//Example
let myNumber1 = 321;
let myStringResult = myNumber1.toString();
console.log(myStringResult); // Output: "321"

//toFixed(): Formats a number using fixed-point notation and returns the result as a string.
//Example
let myNumber2 = 3.14159;
let formattedNumber = myNumber2.toFixed(3);
console.log(formattedNumber); // Output: "3.141"

//Math.random(): Generates a random number between 0 and 1.
//Example
let randomNumber = Math.random();
console.log(randomNumber); // Output: a random number between 0 and 1

//Math.round(): Rounds a number to the nearest integer.
//Math.floor(): Rounds a number down to the nearest integer.
//Math.ceil(): Rounds a number up to the nearest integer.
//Example
let myNumber = 3.5;
let roundedNumber = Math.round(myNumber);
let flooredNumber = Math.floor(myNumber);
let ceiledNumber = Math.ceil(myNumber);
console.log(roundedNumber); // Output: 4
console.log(flooredNumber); // Output: 3
console.log(ceiledNumber); // Output: 4

//------------------------------------------------------------------------------------------------------------------

//Assignment 5.5

//FOR Loop
//A for loop is a control flow statement that allows you to execute a block of code multiple times.
//You can use a for loop to iterate over an array or any other iterable object in JavaScript.
//Example:
/*In the following Example we define an array numbers with 10 elements containing the integers from 1 to 10 and
then initializes a variable sum to 0.Here we use for loop to iterate over each element in the numbers array.
The loop variable num is assigned to each element in turn,and the loop body adds the current value of num to the 
sum variable using the += operator.After the loop completes, the value of sum is the sum of all the integers in the numbers array.

*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (num of numbers) {
  sum += num;
}
console.log("The Sum of numbers are: " + sum);

//while loop
/*while loop is a control flow statement that allows you to repeatedly execute a block of code as long as a certain
 condition is true.*/
//Example
/*In thie example, The loop will continue to execute until the value of seconds is no longer greater than 0
This code is a simple countdown timer that uses a while loop to display the number of seconds remaining until the
countdown is complete. Once the countdown is complete, the message "Times Up" is displayed.*/
let seconds = 10;
while (seconds > 0) {
  console.log(seconds + " seconds left");
  seconds--;
}
console.log("Times Up");

//Change CSS with JS
/*In the following Example First,we'll select the text element that you want to change the CSS of.
You can use the querySelector method to select the element using its CSS selector.
Next, create a function that will be called when the button is clicked. Within this function, you can use
the style property of the text element to change its CSS properties.*/
function changeCSS1() {
  // Get the element you want to modify
  var text = document.querySelector("#message1");
  var colors = ["red", "green", "blue", "purple", "orange"];
  var fonts = ["Arial", "Verdana", "Helvetica", "Georgia", "Tahoma"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  var randomShadow = "8px 8px 8px gray";
  text.style.color = randomColor;
  text.style.fontFamily = randomFont;
  text.style.textShadow = randomShadow;
  text.style.border = "2px solid black";
  text.style.textAlign = "center";
  text.style.alignItems = "center";
  text.style.justifyContent = "center";
}
//When the button is clicked, the changeCSS function is called and the CSS properties of the text are changed.
var button1 = document.querySelector("#changeButton1");
button1.addEventListener("click", changeCSS1);

//change CSS based upon a variable value
var variableValue = 0;
function changeCSS2() {
  var newtext = document.querySelector("#message2");
  if (variableValue == 0) {
    console.log("red");
    newtext.style.color = "red";
  } else {
    console.log("blue");
    newtext.style.color = "blue";
  }
  variableValue = (variableValue + 1) % 2;
}
var button2 = document.querySelector("#changeButton2");
button2.addEventListener("click", changeCSS2);

//------------------------------------------------------------------------------------------------------------------

//Assignment 6.4

//Object
/*In JavaScript, an object is a collection of key-value pairs, where each key is
a string (or symbol) and each value can be any type of data, including other objects.*/
//Example
var employee = {
  name: "Carlos Franco",
  position: "Software Engineer",
  age: 30,
  salary: 50000,
};
console.log(employee.name); // "Carlos Franco"
console.log(employee.position); // "Software Engineer"

//Object Methhod
/*In JavaScript, an object can have properties and methods. A method is simply a function that is a property of an object.
 Here's an example of an object with a method*/
var calculator = {
  num1: 20,
  num2: 10,
  add: function () {
    console.log(this.num1 + this.num2);
  },
  subtract: function () {
    console.log(this.num1 - this.num2);
  },
};
calculator.add(); // Output:30
calculator.subtract(); // Output:10

//Array
//In JavaScript, an array is an ordered list of values, which can be of any type, including other arrays.
//Example
let fruits = ["apple", "banana", "orange", "kiwi"];
//We can access the values in the array using index notation
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
console.log(fruits[3]); // "kiwi"

//Array Method
//There are many Methods of array available in javascript.Here are some of them:
//push(): Adds one or more elements to the end of an array and returns the new length of the array.
//Example
fruits = ["apple", "banana"];
fruits.push("orange", "kiwi");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]

//pop(): Removes the last element from an array and returns that element.
//Example
fruits = ["apple", "banana", "orange", "kiwi"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "kiwi"
console.log(fruits); // ["apple", "banana", "orange"]

//shift(): Removes the first element from an array and returns that element.
//Example
fruits = ["apple", "banana", "orange", "kiwi"];
let firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "orange", "kiwi"]

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
//Example
fruits = ["banana", "orange", "kiwi"];
fruits.unshift("apple", "grape");
console.log(fruits); // ["apple", "grape", "banana", "orange", "kiwi"]

//These are just a few examples of the many array methods available in JavaScript.

//------------------------------------------------------------------------------------------------------------------

