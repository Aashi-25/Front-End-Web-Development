// let button=document.querySelector("b1");
// b1.onclick=(evt) => {
//     console.log("button was clicked");
//     let a=25;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
// };

let div=document.querySelector("div");
div.onmouseover = () => {
    console.log("hello from div!!");
};

//using event listeners
let button=document.querySelector("#b1");
button.addEventListener("click",() => {
    console.log("button1 was clicked!.....handler1");
});
button.addEventListener("click",() => {
    console.log("button1 was clicked!.....handler2");
});

button.addEventListener("click",() => {
    console.log("button1 was clicked!.....handler3");
});

const handler4 = ("click",() => {
    console.log("button1 was clicked!.....handler4");
});
button.addEventListener("click",handler4);


//removing handler4 using remove event listener
button.removeEventListener("click",handler4);


