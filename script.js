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
    let result = ((n+1) % 7);
    console.log(result);
}


boolean36();

function boolean1(){
    5==5  // true
    5=="5" // true
    5==="5" // false
    5>4 // true
    5<4 // false
    5>=5 // true
    5<=5 // true
    5!=5 // false
    5!=6 // true
    5!=="5" // false
    5!=="6"  // false

}

function boolean2(){
    let a = 5, b=6;
    let result = (a > 2 && b<=3);
    5 , 6 // false
    5 , 3 // true
    3 , 2 // true
    1 , 1 // false

}

function boolean6(){
    let a = 5, b = 6, c = 10;

    let result = (a < b && b < c);

    console.log(result);
}

function boolean7() {
    let a = 10, b = 6, c = 5;  // 10 6 5
    let result = (a < b && b < c) || (a > b && b > c);
    console.log(result);
}

function boolean8(){
    let a = 1, b=3;
    let result = a%2===1 && b%2===1;
    console.log(result);
}


function boolean9(){
    let a = 2, b=2;
    let result = a%2===1 || b%2===1;
}

function boolean10(){
    let a = 1, b=2; // 2+4 = false  2+5 = true  1+2 = true  100+201 =true
    let result = (a+b)%2!==0;
}

function boolean24(){
    let a=2,b=4,c=5;
    let d = (b*b) - 4 * a * c;
    let result = d>=0;
    console.log(`${d} / ${result}`); 
}

function boolean29(){
    // let x=-1, y=-2;// 4 -1=false
    // let x1=-3,y1=2;
    // let x2=3,y2=-3;

    // (x<x1 and y<y1) and (x<x2 and y<y2)
    // (-1<-3 and -2<2) and (-1<3 and -2<-3)  

    let x1=1,y1=4;
    let x2=4,y2=1;
    let x=3,y=2;
    // (3<1 and 2<4) and (3<4 and 2<1)

}

function boolean34(){
    // 3 2   8 3
    // 8 3
    // 5 6
    // 7 8


    // 1 3  6 4
    // 6 4
    // 5 7
    // 2 2
}


function boolean36(){
    // x1=1 y1=3  -2 

    // x2=5  y2=7  -2
    // x2=3  y2=1   2
    // x2=3  y2=5   -2

    // x1=2 y1=8  10

    // x2=7 y2=3  10


    // 4 6  10
    // 8 2  10

    // false
    // 3  3
    // 3  7
    // 8  4

    let x1=1,y1=3,x2=3,y2=7;

    let result=(x1-y1)===(x2-y2) || (x1+y1)===(x2+y2);
    // (2-8)===(7-3);
    // console.log(result);
    
}

function boolean37(){
    // x1 y1
    // 5 5

    x1-x2
    // 5 - 6 -1 0 1
    y1-y2 
    // 5-6 -1 0 1

    // x2 y2
    // 6 6
    // 4 6
    // 5 6
    // 4 5
    // 4 4
    // 5 4
    // 6 4
    // 6 5

    // 5 7


}

function ifElse1(){
    let a=3,b=5;
    if(a!==b){
       let max = a>b?a:b;
       a=max;
       b=max;
    } else {
        a=0;
        b=0;
    }


    console.log(`${a} ${b}`);
}

function ifElse2(){
    let a=30;
    a=a>0?a+=1:a-=2;


    a=a===0?a=10:a>0?a+=1:a-=2;
}

function ifElse10(){
    let a=6,b=3;
    let sum=a+b;
    let isEqual = a===b;
    a=isEqual?0:sum;
    b=isEqual?0:sum;
}

function ifElse28(){
    // x y
    // 1 3 (x1 y1)
    // 4 3 (x2 y2)
    // 4 1 (x3 y3)
    // x4 y4

    // if(x2==x3) x4=x1;
    // else if(x3==x1) x4=x2;
    // else x4=x1;

    x1=1, y1=3, x2=4, y2=3, x3=4, y3=1, x4=0, y4=0
    if(x2==x3){
        x4=x1
    } else if(x3==x1) x4=x2
    else {
        x4=x3
    }

    if(y2==y3){
        y4=y1
    } else if(y3==y1) y4=y2
    else {
        y4=y3
    }

    console.log(`${x4} ${y4}`)


}

function ifElse28(){
    let y = 2004;
    if(y%100==0){
        if(y%400==0) console.log('366');
        else console.log('365')
    }else if(y%4==0){
        console.log('366');
        
    }else{
        console.log('365');
        
    }
}

function ifElse29(){
    let n = -5;
    let result='';

    result = n<0?'Otrisatel ':n>0?'Polozitel ':'Nol ';
    result += n!==0?n%2==0?'jubut ':'tak ':'';
    result += 'san';
    console.log(result);
}

function ifElse30(){
    let n = 0; // 1 - 999
    let result = '';

    if(n>0 && n<1000){
        result = n%2==0?'Jubut ':'Tak ';
        result += n>0 && n<10?'birbelgili ':n>9 && n<100?'Ikibelgili ':n>99 && n<1000?'Ucbelgili ':'';
        result+='san';
        console.log(result);
    } else {
        console.error('Unsupperted input');
    }
}



// swicth case

function case1(){
    let day = Number(prompt('Hepdanin gununi girizin')); // '1'
    switch(day){
        case 1:
            alert('Dushenbe');
            break;
        case 2:
            alert('Sishenbe');
            break;
        case 3:
            alert('Carshenbe');
            break;
        case 4:
            alert('Penshenbe');
            break;
        case 5:
            alert('Anna');
            break;
        case 6:
            alert('Shenbe');
            break;
        case 7:
            alert('Yekshenbe');
            break;
        default:
            alert('Beyle hepdanin guni yok!');
            break;  
    }
}

function case3(){
    let month = Number(prompt('Ayy girizin'));
    switch(month){
        case 1:
        case 2:
        case 12:
            alert('Gysh');
            break;
        case 3:
        case 4:
        case 5:
            alert('Bahar');
            break;
        case 6:
        case 7:
        case 8:
            alert('Tomus');
            break;
        case 9:
        case 10:
        case 11:
            alert('Guyz');
            break;
        default:
            alert('Beyle ay yok');
            break;
    }
}

// case3();


function case6(){
    let a = Number(prompt(`Uzynlygy girizin`));
    let m = Number(prompt(`Olceg birligi`))
    switch(m){
        case 1:
            alert(a/10);
            break;
        case 2:
            alert(a*1000);
            break;
        case 3:
            alert(a);
            break;
        case 4:
            alert(a/1000);
            break;
        case 5:
            alert(a/100);
            break;
    }
}

// case6();

function case7(){
    let kg = Number(prompt(`Agramy girizin`));
    let N = Number(prompt(`Olceg birligi`))
    switch(N){
        case 1:
            alert(kg);
            break;
        case 2:
            alert(kg/1000000);
            break;
        case 3:
            alert(kg/1000);
            break;
        case 4:
            alert(kg*1000);
            break;
        case 5:
            alert(kg*100);
            break;
    }
}
// case7()


function case8(){
    let G = Number(prompt('Guni girizin'));
    let A = Number(prompt('Ayy girizin'));

    switch(G){
        case 1:
            switch(A-1){
                case 0:
                    console.log('Gun=31, Ay=12');
                    break;
                case 1:
                 case 3:
                 case 5:
                 case 7:
                 case 8:
                case 10:
                console.log(`Gun=31, ${A-1}`);
                break;
                case 2:
                 console.log(`Gun=28,${A-1}`);
                break;
                case 4:
                case 6:
                case 9:
                case 11:
                    console.log(`Gun=30,${A-1}`);
                    break;
            }
            break;
        default:
            console.log(`Gun=${G-1} Ay=${A}`);
            break;
    }
}

function case19(){
    let n = 2000;
    switch((n+8)%12){
        case 0:
            alert('Sycan');
            break;
        case 1:
            alert('Sygyr');
            break;
        case 2:
            alert('Bars');
            break;
        case 3:
            alert('Towshan');
            break;
        case 4:
            alert('Luw');
            break;
    }
}

// case19();

function loop1(){
    let n=5,k=3;
    for(let i=1;i<=k;i++){
        console.log(n);
    }
}

function loop2(){
    let a=3,b=9,k=0;
    for(let i=a;i<=b;i++){
        console.log(i);
        k++; 
    }
    console.log(k);
}

// loop2();

function loop10(){
    let n=4,k=0;
    for(let i=1;i<=n;i++){
        console.log(1/i);
        k+=1/i;
    }
    console.log(k);
}

// loop10();

function loop13(){
    let n=1.5,k=0;
    for(let i=1.1;i<=n+0.1;i+=0.1){
        k=i+(k*-1);
        
    }
    console.log(k);
}

// loop13();

function loop36(){
    let n=5,k=2,sum=0,d=1;
    for(let i=1;i<=n;i++){
        console.log(`Main loop ${i}`);
        for(let j=1;j<=k;j++){
            d*=i;
            console.log(`Nested loop ${i} / ${j}`);
        }
        sum+=d;
        d=1;
    }
    // console.log(sum);
}

// loop36();

// function while1(){
//     let a=10,b=4;
//     while(a>=b){
//         a-=b;
//     }
//     console.log(a);
// }

// while1();

function doWhile(){
    let isRun=true,n=1;
    while(isRun){
        console.log(n);
        n++;
    }
}

function while4(){
    let n=27,k=1,result=false;
    while(k<n){
        k*=3;
        // result = k==n;
        if(k==n){
            result=true;
        }
    }
    console.log(result);
}

// while4();

function while6(){
    let n=7,until=1,k=0,j=0,l=1;
    if(n%2==0) until=2; // 2
    do {
        j=n-k;// 8  6  4  2
        k+=2;
        l*=j;
    } while(j>until);
    console.log(l);
    // 8!!=(8-0)*(8-2)*(8-4)*(8-6);
    // 7!!=(7)*5*3*1;
}

// while6();

// sayHello()
let language="en";

let person = {
    name: 'Jhon',
    surname: 'Surname',
    age: 22,
    country_tm: 'ABS',
    country_en: 'USA',
    car: [
        {
            name: "BMW",
            year: 2018,
            model: "X6"
        },
        {
            name: "BMW",
            year: 2018,
            model: "X6"
        },
        {
            name: "BMW",
            year: 2018,
            model: "X6"
        }
    ]
};

sayHello(person);
function sayHello(person){
    console.log(person.car[0].year);
}


// es-module
const sayHi=(name)=>{
    console.log(`Hi ${name}`);
}

let count=10;
let timer=setInterval(showPopup,500);
function showPopup(){
    console.log(count);
    count--;
    if(count===0){
        clearInterval(timer);
    }
}


