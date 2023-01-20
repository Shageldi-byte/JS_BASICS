// Resume builder

let result = '';

let name = prompt('What is your name?');

let surname = prompt(`${name} what is your surname?`);
//Alyyew

let gender = surname[surname.length-1]==='a'?'Women':'Man';

let dob=new Date(prompt(`${name} ${surname} when was your birth date?`)); // 01.01.2000

let currentTime = new Date();

console.log(dob)
console.log(currentTime)




// console.log(result);


// Hello my name is Shageldi. I am from Dashoguz. My job is Student.
// I was born 22 years ago. My hobbies (football, coding). 