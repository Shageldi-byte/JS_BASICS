// class User {
//   name;
//   email;
//   #password;
//   constructor() {}

//   #validateEmail(email) {
//     // check email is valid or not.
//     return true;
//   }

//   #validatePassword(password) {
//     // check password is satisfying the minimum requirements or not.
//     return true;
//   }

//   signUp(name, email, password) {
//     let isValidated = false;
//     isValidated = this.#validateEmail(email);
//     isValidated &&= this.#validatePassword(password);

//     if (isValidated) {
//       this.name = name;
//       this.email = email;
//       this.#password = password;
//       // add user in your db.
//       console.log('User registered successfuly');
//     } else {
//       console.log('Please enter correct Details!!');
//     }
//   }

//   login(email, password) {
//     if (email === this.email && password === this.#password) {
//       console.log('Login Successfully');
//     } else {
//       console.log('Authentication Failed!!');
//     }
//   }

//   #isRegisteredUser(email) {
//     // check user is registered or not.
//     return true;
//   }

//   resetPassword(email, newPassword) {
//     if (this.#isRegisteredUser(email)) {
//         this.#password = newPassword;
//         console.log('Operation performed successfully');
//     }
//     else {
//       console.log('No account found!');
//     }
//   }
// };

// const nehal = new User();
// nehal.signUp('Nehal Mahida', 'nm@gmail.com', 'password:)'); // User registered successfuly

// // nehal.#validateEmail('nm@gmail.com'); // Syntax Error.

// nehal.login('nm@gmail.com', 'password:)'); // Login Successfully
// nehal.resetPassword('nm@gmail.com', ''); // Operation performed successfully



// let person = {
//     first_name:'Shageldi',
//     last_name:'Alyyew',
//     getFunction: function(){
//         return `${this.first_name} ${this.last_name}`;
//     },
//     phone_number: {
//         phone:'623432432',
//         code:'+993'
//     }
// }

// console.log(person.phone_number);

// class Person{
//     first_name;
//     last_name;
//     dob;
//     #age;
//     constructor(first_name, last_name,dob) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.dob=dob;
//     }
//     calculateAge(){
//         this.#age=new Date().getFullYear()-this.dob;
//     }
//     getAge(){
//         return this.#age;
//     }
//     printAge(){
//         console.log(this.#age);
//     }
// }

// let person1 = new Person('Shageldi','Alyyew',2000);
// person1.calculateAge();
// let age = person1.getAge();
// person1.printAge();


// Defining object
// let person = {
//     first_name: 'Shageldi',
//     last_name:'Alyyew',
//     getDetails: function() {
//         return(`My fullname is ${person.first_name} ${person.last_name}`);
//     },
//     phone_number : {
//         phone:"632343543",
//         code:"+993"
//     }
// }

// console.log(person.getDetails());

// function person(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }

// let person1=new person('Shageldi','Alyyew');
// let person2=new person('Merdan','Alyyew');

// console.log(person2.fname);


// const coder = {
//     isStuding: false,
//     getDetails: function(){
//         return(`My name is ${this.name}, Studing? ${this.isStuding}`)
//     }
// }

// const me = Object.create(coder);
// me.name = 'Shageldi';
// console.log(me.getDetails());



// let person = new Person('Shageldi','Alyyew');
// console.log(person.getDetails());

// let person2 = new Person('Merdan','Alyyew');
// console.log(person2.firstName);

// function Person2(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person2.prototype.getDetails = function(){
//     return `My name is ${this.firstName}`;
// }

// let person3 = new Person2('Merdan','Alyyew');
// console.log(person3.getDetails());


// class Person {
//     firstName;// public
//     lastName;// public
//     dob; // public
//     #age;// private
//     constructor(fname,lname,dob){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.dob = dob;
//     }
//     // setter
//     calculateAge(){
//         this.#age = new Date().getFullYear()-this.dob;
//     }
//     printAge(){
//         console.log(this.#age);
//     }
//     getAge(){
//         return this.#age;
//     }
//     // setter
//     addAddress(addr){
//         this.addr=addr;
//     }
//     setFirstName(firstName){
//         this.firstName = firstName;
//     }
//     // getter
//     getDetails(){
//         return(`My name is ${this.firstName}, I live in ${this.addr}`);
//     }
// }

// let person = new Person("fdsfd","fsgdfgf",2000);
// // person.firstName='FJADBJH';
// person.addAddress('HDVWGSFDHBFKJDgf');
// person.calculateAge();
// person.printAge();
// person.getAge();
// // person.setFirstName('John');
// console.log(person.getDetails());



// // Abstraction example
//     function person(fname,lname){
//         let firstname = fname;// private
//         let lastname = lname;//private
//       
//         let getDetails_noaccess = function(){
//             return (`First name is: ${firstname} Last 
//                 name is: ${lastname}`);
//         }// private

// this.printDetails=function(){
//     console.log(firstname);
// }
//       
//         this.getDetails_access = function(){
//             return (`First name is: ${firstname}, Last 
//                 name is: ${lastname}`);
//         }
//     }
//     let person1 = new person('Shageldi','Alyyew');
//     console.log(person1.firstname);
//     console.log(person1.getDetails_noaccess);
//     console.log(person1.getDetails_access());
// person1.printDetails();


// Inheritance example
    class person{
        constructor(name){
            this.name = name;
        }
        // method to return the string
        toString(){
            return (`Name of person: ${this.name}`);
        }
    }
    class student extends person{
        constructor(name,id){
            // super keyword for calling the above 
            // class constructor
            super(name);
            this.id = id;
        }


    }

    class headOfTheClassroom extends student{
        degree;
        constructor(name,id,degree){
            super(name,id);
            this.degree = degree;
        }
        toString(){
            return(`${super.toString()}`);
        }
    }
    let student1 = new headOfTheClassroom('Shageldi',22,'first');
    console.log(student1.toString());
class Library{
    books;
    ebooks;
    constructor(books,ebooks) {
        this.books = books;
        this.ebooks =ebooks;
    };
    getByAuthorName(authorName){
        return [];
    }
}
class Book {
    name;
    id;
    constructor(name, id) {
        this.id=id;
        this.name=name;
    }
}
let books = [
    new Book('Name',1),
    new Book('Name',2),
    new Book('Name',3),
    new Book('Name',4),
];
let booksOfAuthor=new Library(books,[]).getByAuthorName('Author');










