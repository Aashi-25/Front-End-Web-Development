// You are creating a website for your college.Create a class user with 2 properties, name and email. It also has a method called viewData() that allows user to view website data.

let data = "secret information"
class User {
    constructor (name , email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("website data = ",data)
    }
}

let student1 = new User("Aashi", "aashi25goel@gmail.com");
let student2 = new User("Sangya","ojha.sangya25@gmail.com");
let student3 = new User("Disha","disha_22@gmail.com");

//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        data = "some new value";
    }
}

let admin1 = new Admin("admin","admin@college.com");