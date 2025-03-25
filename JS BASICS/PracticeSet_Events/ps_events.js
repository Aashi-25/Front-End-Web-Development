let modebtn=document.querySelector("#mode");

let curmode="light";

modebtn.addEventListener("click", () => {
    if(curmode =="light"){
        curmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        curmode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        
    }
    console.log(curmode);
    console.log("you are trying to change mode.");
});

// //toggle effect using classes
//   document.querySelector("body").classList.add("light");
//   document.querySelector("body").classList.remove("dark");
