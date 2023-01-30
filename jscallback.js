// const names = ['Shageldi','Merdan','Mekan','Arslan'];

// names.forEach((name,i)=>console.log(name));

// const myForEach = (arr,cb) => {
//     for(let i=0; i<arr.length; i++){
//         const element = arr[i];
//         cb(element,i);
//     }
// }

// myForEach(names,(name,i)=>{
//     console.log(name);
// })

// console.log('1');

// setTimeout(()=>{
//     console.log('2');
// },2000);

// console.log('3');

// const getWeatherByCity = (city, onSuccess,onError) => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c33f1fa73169b9c1cf4186a69375fb9e&units=metric`)
//     .then(res=>res.json())
//     .then(data=>{
//         if(data.cod >= 200 && data.cod < 300){
//             onSuccess(data);
//         } else {
//             onError(data);
//         }
//     })
// }

// const onSuccess = (weather) => {
//     console.log('Successfully')
//     console.log(weather);
// }
// const onError = (error) => {
//     console.log('Something went wrong')
//     console.log(error);
// }

// getWeatherByCity('Ashgabat',onSuccess, onError);


// console.log('1');
// setTimeout(()=>{
//     console.log('2');
// },2000);
// console.log(3);

// const names = ['Shageldi','Merdan','Mekan','Arslan'];
// // JS callback functions
// // names.forEach((name,i)=>console.log(name));

// const myForEach=(arr,cb)=>{
//     for(let i=0;i<arr.length;i++){
//         let element = arr[i];
//         cb(element,i);
//     }
// }

// myForEach(names,(e,index)=>{
//     console.log(e);
// })

const getWeatherByCity = (city,onSuccess,onError)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c33f1fa73169b9c1cf4186a69375fb9e&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        if(data.cod >= 200 && data.cod < 300){
            onSuccess(data);
        } else {
            onError(data);
        }
    });
}

const onSuccessCB=(weather)=>{
    console.log('Success');
    console.log(weather);
}

const onErrorCB=(error)=>{
    console.log('Something went wrong');
    console.log(error);
}


getWeatherByCity('Ashgabat',onSuccessCB, onErrorCB);
getWeatherByCity('London',onSuccessCB, onErrorCB);
getWeatherByCity('Moscow',onSuccessCB, onErrorCB);


const myReduce = (arr,cb) => {
    let total = arr[0];
    for(let i = 1; i < arr.length; i++){
        total=cb(total, arr[i]);
    }
    return total;
}

const cb = (total, element) => total + element;

let sum = myReduce([1,2,3,4],cb);

console.log(sum);

