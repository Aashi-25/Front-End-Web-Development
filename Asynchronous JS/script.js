// setTimeout(callback , time_in_sec) :- setTimeout consisits of 2 things callback which is a function and time in seconds.


console.log("he")
setTimeout(function(){
    //here comes that code which you wish to eexecute after 2 sec 
    console.log("hey 2 after 2 sec");
} , 2000)
console.log("he2")

//callback functions hamesha async code mein ans aane pr chalte hai

//js is asynchronous
console.log("hey")
console.log("hey2")
setTimeout(function(){
    console.log("hey3");
},0);
console.log("hey4") 

//output :-
// hey
// hey2
// hey4
// hey3 
// first content of main stack gets executed (sync content) then side stack content is shifted to main stack(async part)

//async code likhne ke liye :- fetch , XMLHttpRequest , axios ,setTimeout , setinterval
//async ka ans chalane k liye :- callbacks , then catch , async await

var ans = new Promise((res , rej) => {
    if(true){
        return res();
    } else{
        return rej();
    }
})

//promise can have three states resolve , reject and pending
 ans
 .then(function(){
    console.log("resolved!")
 }) //if resolve state exists

 .catch(function(){
    console.log("not resolved")
 }) //if reject state exists

 //user will ask for a number between 0-9 and if the number is below 5 resolve if not , reject

 var ans2 = new Promise((res , rej) => {
    var n = Math.floor(Math.random()*10);

    if(n < 5){
        return res();
    } else{
        return rej();
    }
 })
 ans2.then(function(){
    console.log("num is less than 5");
 })
 .catch(function(){
    console.log("num is greater than 5");
 })

 //sabse pehle ghar pr aao , fir gate kholo aur gate lagao , fir khana pakao khana khao , so jao (all async tasks)

var ans3 = new Promise(function(res , rej){
    return res("sabse pehle ghar pr aao")
})
var p2 = ans3.then(function(data) {
    console.log(data);

    return new Promise(function (res , rej) {
        return res("gate kholo gate lagao");
    })
})

var p3 = p2.then(function(data){
    console.log(data);

    return new Promise(function(res , rej){
        return res("khana pakao khana khao ");
    })
})

p4 = p3.then(function(data){
    console.log(data);

    return new Promise(function(res , rej){
        return res("chill karo so jaao");
    })
})

p4.then(function(data){
    console.log(data);
})

//ASYNC-AWAIT
//to avoid the use of then in promises as that makes the code lengthy, async await is used
async function abcd(){
    await fetch(``);
} //trick -> put async in front of the nearest function of fetch snd write await with fetch 

function xyz() {
    fetch(`https://randomuser.me/api/`)
    .then (function (raw) {
        return raw.json();
    })
    .then(function (data) {
        console.log(data);
    });
}
xyz();

//implementing above function usinf async-await
async function asyncImp() {
    let raw = await fetch(`https://randomuser.me/api/`); //provides raw data

    let ans = await raw.json();
    console.log(ans);
    

} //remove one .then wrt one await

asyncImp();