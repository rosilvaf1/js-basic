//array method
//indexOf
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// expected output: 1
//map
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
//includes
console.log(array1.includes(2));
console.log(array1.includes(4));
//findIndex
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
//reduce
let summation = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation);
//push
const count = array1.push("cows");
console.log(count);
//filter
const result = array1.filter((i) => i > 6);
console.log(result);
//some
const even = (element) => element % 2 === 0;
console.log(array1.some(even))
//find
const found = array1.find(element => element > 10);
console.log(found);
//every
const isBelowThreshold = (currentValue) => currentValue > 0;
console.log(array1.every(isBelowThreshold));

//FIRST CLASS FUNCTIONS
//function assigned to a variable
const sayHello = () => { return 'hello'; }
console.log(sayHello())
//funciton passed as an argument to other function 
const sayHelloToAPerson = (greet, person) => { console.log(greet() + person)}
sayHelloToAPerson(sayHello, ' juan')
//function can be return other function
const greeter = greeting => { return person => { return greeting + person} }
const sayHiPerson = greeter ('Hi')
console.log(sayHiPerson('Juan'))


console.log("The 7 falsy values")
0 ? console.log("truthy") : console.log("falsy") // falsy
0n ? console.log("truthy") : console.log("falsy") // falsy
null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy

console.log("Some examples of truthy values")
37 ? console.log("truthy") : console.log("falsy") // truthy
37n ? console.log("truthy") : console.log("falsy") // truthy
true ? console.log("truthy") : console.log("falsy") // truthy
"😂" ? console.log("truthy") : console.log("falsy") // truthy
let empty = []
empty ? console.log("truthy") : console.log("falsy") // truthy
empty = {}
empty ? console.log("truthy") : console.log("falsy") // truthy

//Closure
//lexical Scoping
let name = 'John';

function greeting() { 
    let message = 'Hi';
    console.log(message + ' '+ name);
}

function greeting() {
  let message = 'Hi';

  function sayHi() {
      console.log(message);
  }

  sayHi();
}

greeting();

//closures
function greeting() {
  let message = 'Hi';

  function sayHi() {
      console.log(message);
  }

  return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable
//block scope
{
  let x = 2;
}
// x can NOT be used here
{
  var x = 2;
}
// x CAN be used here
//local scope
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName