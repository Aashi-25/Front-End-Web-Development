console.log("one");
console.log("two");
console.log("three");

//above code is a demonstration of synchronous programming where code is run line by line in same sequence
//in asynchronous programing,if a set of code is taking more time to run then the code after it is executed first and then,once that set of code is executed completely,its output is demonstrated on screen.

function hello() {
    console.log("hello");
}
setTimeout(hello,2000); //2000 msec..setTimeout function says it will execute hello after 2sec(2000msec)
//this is also a callback function..hello function passed as argument

console.log("four");
console.log("five");

//CallBack functions-when a function is passed in the definition of another function
function sum(a,b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum); //callback

//nested if-else
let Age = 19;
if (Age>=18){
    if(Age>=60){
        console.log("senior");
    } else{
        console.log("middle");
    }
} else{
    console.log("child");
}

//nested loops
for(let i = 0; i<5; i++){
    let str="";
    for(let j=0 ; j<5 ; j++){
        str = str+j;
    }
    console.log(i+1 , str);
}

function getData(dataId, getNextData){
    //2sec
    setTimeout(() => {
        console.log("data",dataId);
        if (getNextData){
        getNextData();
        }
    },2000);    
}

//create a function that prints data1 then data2 then data3 one after another
//CallBack hell- nested callbacks become difficult to understand and manage

//CALL-BACK HELL
getData(1, () => {
    console.log("getting data2...")
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
});

//writing above code using promise chain

//PROMISE-CHAIN
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3)
    })
    .then((res) => {
        console.log(res);
    }) 

//writing the above code using Async-Await

//ASYNC-AWAIT
function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Data ${id} loaded`);
            resolve();
        }, 2000);
    });
}
async function getAllData() {
    // console.log("data 1 loading......");
    await getData(1);
    // console.log("data 2 loading......");
    await getData(2);
    // console.log("data 3 loading......");
    await getData(3);
}
getAllData();

//IIFE- immediately invoked function expression(doesn't require a function call but the function can only be executed once.For again execution, the code has to be written again.)
(async function getAllData() {
    // console.log("data 1 loading......");
    await getData(1);
    // console.log("data 2 loading......");
    await getData(2);
    // console.log("data 3 loading......");
    await getData(3);
})();



//Promises-object overcome the problem of callback hell
//Promise has 3 states-pending,rejected,fulfilled(resolved)
let promise = new Promise((resolve , reject) => {
    console.log("I am a promise.");
    resolve("success");
})

function getNewData(dataid,getnextdata){
    let p= new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success");
            if (getnextdata) {
                getnextdata();
            };
        }, 5000);
    });
}

//USING .then() and .catch()
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("hello from Promise");
        reject("network error");
        resolve("error resolved");
    });
};

let mes = getPromise();
promise.then((res)=> {
    console.log("promise fulfilled",res);
}); //

promise.catch((err) => {
    console.log("promise rejected",err);
});

//PROMISE CHAIN 
//Asynchronous function
function asyncFunc1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("IMPORTANT DATA-1");
            resolve("SUCCESS!!!");
        },6000);
    });
};
function asyncFunc2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("IMPORTANT DATA-2");
            resolve("SUCCESS!!!");
        },6000);
    });
};

//chaining
console.log("FETCHING DATA1.....");
let p1= asyncFunc1();
p1.then((res) => {
    console.log("FETCHING DATA2.....");
    let p2= asyncFunc2();
    p2.then((res) => {});
});

//ASYNC-AWAIT
async function hello() {
    console.log("hello");
}

//await keyword can be used in an async function only
function api() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("weather report");
            resolve(200); //200 demonstrates successful api call
        },2000);
    });
}
async function getWeatherData() {
    await api(); //1st call
    await api(); //2nd call
};
getWeatherData();