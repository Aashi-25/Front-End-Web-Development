const employee = {
    calcTax1() {
        console.log("tax rate is 10%.")
    },

    calcTax2 : function () {
        console.log("Tax is 10%.")
    }
};
//both ways are correct for writing functions

const karanArjun1 = {
    salary : 50000,
    calcTax1() {
        console.log("tax rate is 20%");
    }
};
const karanArjun2 = {
    salary : 50000
};
const karanArjun3 = {
    salary : 50000
};
const karanArjun4 = {
    salary : 50000
};
const karanArjun5 = {
    salary : 50000
};

karanArjun1._proto_ = employee;
karanArjun2._proto_ = employee;
karanArjun3._proto_ = employee;
karanArjun4._proto_ = employee;
karanArjun5._proto_ = employee;

//if object and prototype has same method(function) object's prototype is used

//use of classes
class ToyotaCar{
    constructor() {
        console.log("creating new object.")
    }
    start () {
        console.log("start");
    }
    stop () {
        console.log("stop");
    }  
    
    setBrand(brand){
        this.brandname = brand;
    }
}

//creating object of class
let fortuner = new ToyotaCar(); //all the properties of toyotacar class will e assigned to fortuner object
console.log(fortuner);
let mercedes = new ToyotaCar();
console.log(mercedes);
fortuner.setBrand("toyota");

//INHERITANCE
class Parent{
    hello(){
        console.log("hello!")
    }
}
    class Child extends Parent{}
        let obj = new Child();


class Person {
    constructor() {
        console.log("Enter Parent's constructor")
        this.species = "homosapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep")
    }

    work(){
        console.log("Do nothing!")
    }
}

class Engineer extends Person{ //all properties of person inherited by class engineer
    constructor(branch){
        console.log("Enter Child's constructor")
        super(name); //to invoke parent class constructor       
        this.branch = branch;
        console.log("Exit child's constructor")
    }
    work(){
        super.eat();
        console.log("solve problems, build something!")
    }
}

let enjobj = new Engineer("Aashi");
//incase of work() function, which is defined both in parent and child class,child class function will be used

//Try and Catch block...Error handling
let X = 5;
let Y = 10;
try{
    console.log("X + Y =",X + c); //error
} catch(err){
    console.log(err);
}