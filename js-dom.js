// const grandparent = document.getElementById('grandparent-id')
// const grandparent = document.querySelectorAll('.parent');
// const parents = Array.from(document.getElementsByClassName('parent'));
// console.log(Array.from(grandparent)[0].outerHTML);
// new Array(40).fill(0).forEach((item,i)=>{
//     const h2 = document.createElement('h2');

//     h2.innerHTML="Hello";

//     grandparent.appendChild(h2);
// })

// grandparent.removeChild(parents[0])
// const h2 = document.createElement('h2');
// h2.innerHTML="Replaced";
// grandparent.replaceChild(h2,parents[0]);
// console.log(parents[0].parentElement);

// parents.forEach(changeColor);

// function changeColor(element){
//     element.style.backgroundColor = 'black';
// }

// function load(){
//     alert('Loading...');
// }
// function upperCase(){
//     console.log('upperCase');
// }
// function enter(element){
//     element.style.backgroundColor = 'white';
// }
// function leave(element){
//     element.style.backgroundColor = 'blue';
// }


const grandparent = document.getElementById('grandparent-id');
const parents = Array.from(document.getElementsByClassName('parent'));
new Array(40).fill(0).forEach((item,i)=>{
    let div = document.createElement('div');
    div.style.display = 'flex';

    let h2 = document.createElement('h2');
    h2.style.display = 'inline-block';
    h2.innerHTML = `${i+1}`;
    div.appendChild(h2);

    let button = document.createElement('button');
    button.innerHTML = 'Remove';

    const click = ()=>{
        grandparent.removeChild(div);
    }

    button.addEventListener('click',click)

    button.removeEventListener('click',click);

    // button.onclick = () => {
    //     grandparent.removeChild(div);
    // };

    div.appendChild(button);

    grandparent.appendChild(div);
});

function enter(element,number){
    // alert(number);
    element.style.backgroundColor = 'white';
}


function leave(element){
    element.style.backgroundColor = 'blue';
}

function focused(element){
    element.style.backgroundColor = 'yellow';
}

// grandparent.removeChild(parents[0]);



// console.log(parents[0].getElementsByTagName('div')[0].style.backgroundColor='black');
// parents[1].style.backgroundColor = 'orange';
// parents.forEach((item,i)=>{
//     item.style.backgroundColor = 'orange';
// });
// grandparent.append('Hello World');
// let h2 = document.createElement('h2');
// h2.innerHTML = 'Hello World';
// grandparent.appendChild(h2);
// grandparent.innerHTML="<h2>Grandparent</h2>";

function load(){
    alert('Loading...');
}