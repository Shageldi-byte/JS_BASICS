// let firstName = "John";// es module, inline variable
// const secondName = "John";
// let number = 1; // number
// let number2= "1";
// // let parsed = parseInt(number2);
// let floatVar=1.1;
// let isEqual = number === number2;
// let array = [1,2,3]; // index starts from 0
// let added = 10+10;
// let one = 100 / 10;
// let two = 99 % 10;

// // var lastName = "John";// common js, global variable

// function test(){
//     let firstName = "John";
// }

// es module
// const integer2 = () =>{

// }

integer22();


// Integer
// common js 
function integer1(){
    let l = 200; // 2
    let result = l / 100;
    console.log(result);
}

function integer4(){
    let a = 10;
    let b = 2;
    let result = parseInt(a / b);
    console.log(result);
}

// 12  1  2

function integer5(){
    let a = 10;
    let b = 3;
    let result = a % b;
    console.log(result);
}

function integer6(){
    let n = 12;
    let a = parseInt(n / 10); // 1
    let b = n % 10; // 2
    let result = b*10+a;// 21
    console.log(`${result}`); // string template
}

function integer12(){
    let n = 123;
    let a = parseInt(n/100);
    let b = parseInt((n % 100) / 10);
    let c = n % 10;
    let result = (c * 100) + (b * 10) + a;
    console.log(result);
    // 1 n / 100
    // 2 (n % 100)/10
    // 3 (n % 10)
}

// 60  1
// 120 2



// 123  231



function integer22() {
    let n = 7240; // 60 
    let result = n % 3600;
    console.log(result);
}

function integer25(){
    let n = 8;
    let result = (n % 7)+3; // 2

}





