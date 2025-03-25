console.log("hello!!");
console.dir(document.body);

//ways to accsss elements from an html page
console.log(document.body); //for accessing html part of code
let heading=document.getElementById("heading"); //select with id
console.dir(heading); 

let headings=document.getElementsByClassName("heading"); //select with class
console.dir(headings);
console.log(headings);

let paras=document.getElementsByTagName("p");
console.log(paras);

let firstEL=document.querySelector("p");//returns first element
console.dir(firstEL);

let allEL=document.querySelectorAll("p");//returns a nodelist
console.dir(allEL);

let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"));

let diV=document.querySelector("div");
console.log(diV);
div.style.backgroundColor="purple"; //using style tag in js
div.style.fontSize="26px";
// div.innerText="Heyy!!";
div.style.textAlign="center";
//to center the content inside a div element 
// div.style.display="flex";
// div.style.justifyContent="center";
// div.style.alignItems="center";

let newbutton=document.createElement("button");
console.log(newbutton);
newbutton.innerText="click me";
// let div=document.querySelector("div");
div.append(newbutton);

let newheading= document.querySelector("h1");
newheading.innerText="hi,i am new!";
document.querySelector("body").prepend(newheading);
para.remove();//for deleting elements
