// reduce function a function that combines the elements of an array into a single value
// the function has two parrameters we need to pass 1 is current value and 2 accumlator
// accumlator we give it manually

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((currentValue,accumilator)=>{
    return currentValue+accumilator
},0)

console.log(sum)

// curring
// a funtion with multiple arguments is converted into a series of functions, each taking one argument 

function add(a){
    return function (b){
        return a+b;
    }
}

console.log(add(2)(3))

// a simple example

function multiply(a){
    return function(b){
        return a*b;
    }
}

let double = multiply(2)
let triple = multiply(3)

// here the multiply is used multiple times(reusable code)
// the multiply will become the first argument and second will take the while calling it using doule

console.log(`double value  : ${double(3)}`)
console.log(`triple value  : ${triple(10)}`)

// generater funtion
// a generator function is special function that pausess the execution and resumes later and returns one value at a time 
// yeild - pausess the function and returns a value and resumes from same place on next call

function* generate(){
    let count = 1;
    while(true){
        yield count;
        count++;
    }
}

const countcollector = generate()

console.log(countcollector.next().value)
console.log(countcollector.next().value)
console.log(countcollector.next().value)
console.log("auto generator")
for(let i=0;i<10;i++){
    console.log(countcollector.next().value)
}


// deep copy and shallow copy 

// shallow copy - the main object or array is copied it linked to the original as well
// and then if we make any changes to the copied one it will change the original as well

// a shallow copy is having referrencing to the same memory point to the original

// there are two ways to create a shallow copy

const original = {name:'syam',address:{city:'hyderabad'}};

// using assign
const shallowCopy = Object.assign({},original);

// using the spread operator
const shallowCopy2 = {...original};

shallowCopy2.address.city = "guntur"

console.log(original.address.city)
console.log(shallowCopy.address.city)
console.log(shallowCopy2.address.city)



// for deep copy is makes the exact clone with different memory referrence so that the changes in the copied one does not effect the original

const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.name = "sundar"

console.log(deepCopy)
console.log(original)