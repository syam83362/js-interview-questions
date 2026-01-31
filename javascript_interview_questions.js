// templete literals
// the combination of backticks, flower braces and dollor sogn ({},``,$)

// example
a = 10
b = 20
console.log(`sum of ${a} and ${b} is ${a+b}`)

// hoisting
// the hoisting means moving or hoisting the declarations top of their scope before execution
// the functions do not throw any error and executes and for var gives an undefined and let and const throws an referrence error
name('syam')

// this will executes fine because of hoisting
function name(name){
    console.log(name)
}
console.log(game) // this will be the undefined and for let and const throws an referrence error
var game = 'magic'

if (true){
    var a= 10
    let b =20
    const c =30

    console.log(a)
    console.log(b)
    console.log(c)
}

// console.log(a)
// console.log(b)
// console.log(c)

// the difference between the var, let and const
// let and const are block scoped and var is function scoped  and also const prevents the reassignment
// that is why outside of the if lock we get a referrence error of a and b
// the var is function scoped that why it is globally available now, if it is inside a function it is accesable inside that function only

// Arrays 

// array literal syntax/

let furits = ["apple","banana","mango"]
console.log(furits)

// array constructor

let numbers = new Array(10,20,30)
console.log(numbers)

// for each loop
furits.forEach(furit=>console.log(furit))

// equality and strict equality operator (==  and ===)

// == performs type correcion and === does not perform the typr coercion
// the type coercion means converting the types   example 
if (5 == "5"){
    console.log("they are equall")
}

// here the string 5 converts into int due to type coercion

// array methods map()
// Array.map(element, index, array){
    // return newElement
// }

// map function 
// a map function is an array method that takes an array and make modifications according to the requirements and gives an updated one

const multipled = numbers.map(num => num*2)
console.log(multipled)

const products = [
    {
        name:"laptop",
        price:15000
    },
    {
        name:"mobile",
        price:10000
    }
]

const updated = products.map(product=>({
    ...product,
    price:product.price + 20000
}));

console.log(updated)

// here the difference above and below one is return function and that is () at anonymous function it refers return 

const updated1 = products.map(product=>{
    return{
        ...product,
        price:product.price + 40000
    }
});

console.log(updated1)

// higher oder function 

// a function that can be able to accept an function and also return a function as a result is called as an higher order function

const doubled = numbers.map(function (num){
    return num * 2
});

// IIFE immedietly invoked funtion expression
// runs as soon as it is created

(function (){
    console.log("hello world");
}) ();
