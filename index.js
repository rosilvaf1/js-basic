//Study javascript concepts:
//closure / scoping / hoisting
//types en js(primitives, complex), falsy values, first-class functions
//array methods (findIndex, IndexOf, Includes, map, filter, push, reduce, some, every)


//array method
//indexOf
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// expected output: 1
//map
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
//includes t or f
console.log(array1.includes(2));
console.log(array1.includes(4));
//findIndex
const isLargeNumber = (element) => element > 5;
console.log(array1.findIndex(isLargeNumber));
//reduce
let summation = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation);

//push
const count = array1.push("cows");
console.log(array1);
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

//global variable
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
//function Scope
function myFunction() {
  var carName = "Volvo";   // Function Scope
}

// code here can NOT use carName


//hoisting

x = 5; // Assign 5 to x
console.log (x)                 // Display x in the element
var x; // Declare x

var y; // Declare x
y = 7; // Assign 5 to x
console.log(y)




const edad = 29;

let miEdad = getEdad();

function getEdad(){
  console.log(edad);
}


//Closure
//lexical Scoping

let name = 'John';

function greeting() { 
    let message = 'Hi';
    console.log(message + ' '+ name);
}
greeting();


//nested function
function greeting() {
  let message = 'Hi';
  let suma

  function sayHi() {
      console.log(message);
  }

  sayHi();
}

greeting();


//closures
function suma(a){
  function calculate(b){
    return  a+b;
  }
  calculate();
}
console.log(suma(1)(2))


function sum(a){
  return function calculate(b){
    return  a+b;
  }
}
console.log(sum(1)(2))

//falsy
console.log("The 7 falsy values")
0 ? console.log("truthy") : console.log("falsy") // falsy
null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy

console.log("Some examples of truthy values")
37 ? console.log("truthy") : console.log("falsy") // truthy
true ? console.log("truthy") : console.log("falsy") // truthy
"😂" ? console.log("truthy") : console.log("falsy") // truthy
let empty = []
empty ? console.log("truthy") : console.log("falsy") // truthy
empty = {}
empty ? console.log("truthy") : console.log("falsy") // truthy




//Operadores Lógicos
//|| (OR)
console.log(true || true); // true (verdadero)
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false (falso)

console.log(1 || 0); // 1 (1 es un valor verdadero)

console.log(null || 1); // 1 (1 es el primer valor verdadero)
console.log(null || 0 || 1); // 1 (el primer valor verdadero)
console.log(1 || 3 || 5)
console.log(undefined || null || 0); // 0 (todos son valores falsos, retorna el último valor)

//&& (AND)
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false


// si el primer operando es un valor falso,
// AND lo retorna. El segundo operando es ignorado
console.log(null && 5); // null
console.log(0 && "cualquier valor"); // 0

//! (NOT)
console.log(!true); // false
console.log(!0); // true
