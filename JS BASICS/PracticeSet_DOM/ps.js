let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + " from Apna College atudents";
// console.dir(h2.innertext);

//q2
// let box=document.querySelectorAll(".box");
// console.dir(box[0].innerText);
// box[0].innerText="First-div";
// box[1].innerText="Second-div";
// box[2].innerText="Third-div";

//second method
let box=document.querySelectorAll(".box");
let idx=0;
for (div of box){
    box[idx].innerText=`new unique value ${idx}`;
    // console.dir(box.innerText);
    idx++;
}

//q3
let button=document.createElement("button");
// button=document.querySelector("button");
button.innerText="CLICK";
button.style.backgroundColor="red";
button.style.color="white";
document.querySelector("body").prepend(button);

//q4
let p=document.querySelector(".para");
p.classList.add("newclass");
console.log(p);

