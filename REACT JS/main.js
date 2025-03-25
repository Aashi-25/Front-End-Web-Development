//logical && and ||
let a = true;
let b = true;
console.log(a && b);

function getName(name){
    return name;
}
console.log(a && getName("Aashi baby")); // o/p = Aashi baby
let c = false;
let d = true;
console.log(c && getName("Aashi baby")); // o/p = false as if the first value is false the next value never gets checked in case of logical &&

console.log(c || d);
console.log(c || getName("Aashi baby")); // o/p = Aashi baby

//Template literals
let name1 = "John";
let name2 = "Doe";
console.log(`${name1} ${name2}`);

//Ternary operator
let showRecipeOne = false;
function getRecipeOneName(recipeName){
    return recipeName;
}

function getRecipeTwoName(recipeName){
    return recipeName;
}

if(showRecipeOne){
    console.log(getRecipeOneName("pizza"));
} else{
    console.log(getRecipeTwoName("coke"));
}

//applying if-else logic through ternary operator
showRecipeOne ? console.log(getRecipeOneName("pizza")) : console.log(getRecipeTwoName("coke")) ;

//destructuring in objects and arrays
const id = 1;
const productname = "Product apple watch";
const rating = 5;

const product = {
    id : id,
    productname : productname,
    rating : rating,
};
//shorthand for the above syntax -->
const prod = {
    id,
    productname,
    rating
}
console.log(product);
console.log(prod); //same result as above in console

const prod2 = {
    description : "Product 2 description",
    id,
    productname,
    rating
}

const getPorudctTwoDescription = prod2.description;
console.log(getPorudctTwoDescription);

//applying same logic through destructuring obj syntax
const {description} = prod2;
console.log(description);

const array = [1,2,3];
let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue , getArraySecondValue);

// applying concept of destructing array
const [arrayFirstElement , arraySecondElement , arrayThirdElement , arrayFourthELement] = array;
console.log(arrayFirstElement , arraySecondElement , arrayThirdElement , arrayFourthELement); // o|p = 1 2 3 undefined

//default paramenters , spread and rest operators
function mulOfTwoNumbers(num1=1, num2=2){
    return num1 * num2;
}
console.log(mulOfTwoNumbers(2,3)); // o|p = 6
console.log(mulOfTwoNumbers()); // o|p = 2
console.log(mulOfTwoNumbers(5)); // o|p = 10

const array2 = [2 , 4 , 6];
const array3 = [10,11,12];

//spread operator(...)
console.log(...array2); // o|p = 2 4 6 
console.log([...array2]); // o|p = [2, 4, 6]
console.log([...array2,...array3]); // o|p = [2 4 6 10 11 12]
console.log([999, ...array2, ...array3]); //statistically adding values to the array

//rest function
function getInfo(a,...b){ //rest parameter
    console.log(a,b);
    return "Sangam Mukherjee";
}
console.log(getInfo(1,2,3,4,5));
console.log(getInfo(1,2,3,4,5,4,5,3,2,5,2,5,2,4));

// ES6 array mwthods
// map , filter , find , some , every , includes , indexOf , findIndex

const personsArray = [
    {
        name : "Person 0",
        age : 10,
        country : "USA"
    },
    {
        name : "Person 1",
        age : 30,
        country : "USA"
    },
    {
        name : "Person 2",
        age : 40,
        country : "AUSTRALIA"
    },
    {
        name : "Person 3",
        age : 40,
        country : "INDIA"
    },
    {
        name : "Person 4",
        age : 70,
        country : "INDIA"
    }
];

let getAllNames = personsArray.map((singlePerson , index) => {
    console.log(singlePerson , index);
    // return singlePerson.name;
    return `${singlePerson.name} age is ${singlePerson.age} years.`;
});
console.log(getAllNames);

let getPersonFromUSA = personsArray.find((singlePerson, index) =>{
    return singlePerson.country === "USA";
});
console.log(getPersonFromUSA); //the find function will return the first occurance of country = USA

let getPersonfromIndia = personsArray.filter((singlePerson , index) => {
    return singlePerson.country == "INDIA";
});
console.log(getPersonfromIndia); //filter returns all occurences of country = INDIA

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson , index) => {
    return singlePerson.age > 40;
})
console.log(checkSomeArrayMethodWithExample); // op = true meaning that there is atlst one person with age = 40

let checkEveryArrayMethodWithExample = personsArray.every((singlePerson , index) => {
    return singlePerson.age > 40;
})
console.log(checkEveryArrayMethodWithExample); //op = false

const fruitsArray = ["apple" , "banana" , "orange"];
console.log(fruitsArray.includes("sangam") , fruitsArray.indexOf("banana")); //op=false

let getIndexOfPerson = personsArray.findIndex((singlePerson , index) => {
    return singlePerson.country === "INDIA"
})
console.log(getIndexOfPerson); //op = 3

//async await 
let getlistofquotes = document.querySelector(".list_of_prod");

function renderQuotes(getQuotes){
    getlistofquotes.innerHTML = getQuotes.map(singleProdItem => `<p> ${singleProdItem.quote} </p>`).join('');
}

async function fetchlistofquotes() {
    try{
        const apiResponse = await fetch("https://dummyjson.com/quotes" , {
            method : 'GET'
        });
        
    const result = await apiResponse.json();
    console.log(result);

    if(result.quotes.length > 0) renderQuotes(result.quotes)
    }
    catch(e){
        console.log(e);
    }
}

fetchlistofquotes();