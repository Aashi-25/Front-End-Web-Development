// Q1-Create a const object called "Product" to sore the information shown in the picture.

const product={
    name:"Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
}

console.log(product);

//Create a const object called "profile" to store information shown in the picture.

const profile={
    username:"ShradhhaKhapra",
    isfollow:false,
    followers:7999,
    follwoing:456,
}
console.log(profile);

//Get user to input a number using prompt("enter a number:").Check if the number is a multiple of 5 or not.
let num=prompt("Enter a number:");
if(num % 5 == 0){
    console.log("multiple of 5");
}
else{
    console.log("not a multiple of 5")
};