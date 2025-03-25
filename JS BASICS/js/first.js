console.log("welcome to javascript basics");
console.log("Aashi Goel");
console.log("I love javascript");

// defining variables
name="tony stark";
console.log(name); //tony stark printed in console
price=99.99;
console.log(price);
X=null;
console.log(X);
Y=undefined;
console.log(Y);
let myname="Aashi";
console.log(myname);

//LET being a block scope variable 
{
    let a=10;
    console.log(a);
}

{
    let a =40;
    console.log(a);
}

//object
const student={
    fullName:"Rahul Kumar",
    age:20,
    cgpa:9.0,
    isPass:true,
}
console.log(student);
console.log(student["cgpa"]);

//arithematic operators
{let a=5;
let b=2;
console.log("a+b=",a+b);
a++;
console.log(a);}

//assignment operators
let a=10;
b=20;
a += 4;
console.log(a);

//comparison operators
let num1=4;
let num2=6;
console.log(num1==num2);

let x=3;
let y="3";
console.log(x==y);
console.log(x===y);//checks both value and type
console.log(x!==y);

//logical operators
let m=15;
let n=23;
let cond1 = m>n;
let cond2 = m<n;
console.log("cond1 && cond2 = ",cond1&&cond2);
console.log("cond1 || cond2 = ",cond1||cond2);
console.log("cond1 ! cond2 :- ",!cond2);

//conditional statements
let age = 25;
if (age>18){
    console.log("you can vote");
}

let z=10;
if (z%2==0){
    console.log("even number");
}else{
    console.log("odd number");
}

//ternary operator
AGE=20;
console.log(AGE>=18?"adult":"not adult");