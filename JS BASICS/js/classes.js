const student = {
    fullName : "Aashi Goel",
    marks : 97.3,
    printMarks: function() {
        console.log("marks = ",this.marks); //this.marks = student.marks
    }
}; //creation of object

//practical implementation of prototype
let arr = ["apple" , "banana" , "mango"]; //array internally stored as an object in js
