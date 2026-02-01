// closures

// the javascript variables remembers the environment variable values even after executing the funtion 
// code example

function outer(){
    let message = "this is the outer value"

    function inner(){
        console.log(message)
    }
    return inner
}

const clouserVal = outer()
clouserVal()

// the need of the clousers are for defining the private variables

function counter(){
    let count = 0;

    return {
        increment:()=>{
            count ++;
            console.log(count);
        },
        decrement:()=>{
            count --;
            console.log(count);
        },
        displayCount:()=>{
            console.log(count)
        }
    }
}

let myCounter = counter()
myCounter.decrement()
myCounter.increment()
myCounter.displayCount()

// setTimeout and setInterval

// setTimeout used to execute a function aftera certain delay
// setInterval used to execute a function at specified time intervals

setTimeout(()=>{
    console.log("hi after 2 sec")
},2000)

// clearInterval it deletes the time interval that specified before, like the fuction before if is stored in a variable and store it in timer and pass it to the clearInterval(timer) it deletes before the execution

const timer = setInterval(()=>{
    console.log("hloo for every 2 seconds")
},2000)

// this combination will take us to the nasty topics called debounce and thottler
setTimeout(()=>{
    clearInterval(timer)
},10000)

// promisess
// a promise is an object that represents the eventual result of an asynchronous operation

data = {name:'syam',age:24}

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve(data)
            }else{
                reject("no data found")
            }
        },2000)
    })
}

fetchData().then(
    data =>{
        console.log("data",data)
    }
).catch(
    (error)=>{
        console.log(error)
    }
)

// declarig a function with async makes it returns a promise
// await pausess the funtion untill the execution of the async operation

async function dataFetch(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log("data fetched", data)
    }catch(error){
        console.log(error)
    }
}

dataFetch()

// this refers the object it calling

const user = {
    name:"syam",
    sayName:function (){
        console.log(this.name)
    }
}

user.sayName() // here the user is the object calling that object is this refers to
