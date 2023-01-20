let wordList = words.split('\n');

const wordContainer = document.getElementById('words');
// let html = '';
// wordList.forEach((word,i)=>{
//     let tm = word.split('-')[0];
//     let ru = word.split('-')[1];
//     html+=getElement(tm,ru);
// })

// wordContainer.innerHTML=html;

// function getElement(tm,ru){
//     return `
//         <h2 style='color:green'>${tm}</h2>
//         <h5 style='color:gray'>${ru}</h5>
//     `;
// }

function load(){
    checkWord();
}

function showAll(){
    wordList.forEach((word,index)=>{
        let tm = word.split('-')[0];
        let ru = word.split('-')[1];
        addElement(tm,ru);
    })
}

let loading = document.createElement('h4');
loading.innerHTML='Loading...';

function checkWord(){
    let searchText = document.getElementById('search').value;
    if(searchText.trim().length <= 0){
        showAll();
    } else {
        wordContainer.innerHTML="";
        wordContainer.appendChild(loading);
        setTimeout(()=>{
            findWord(searchText);
        },2000);
    }
}

function findWord(query){
     wordList.forEach((word,index)=>{
        let tm = word.split('-')[0];
        let ru = word.split('-')[1];
        try{
        if(tm.toUpperCase().includes(query.toUpperCase())
            || ru.toUpperCase().includes(query.toUpperCase())){
                addElement(tm,ru);
            }
        } catch (err){

        }
    })
    wordContainer.removeChild(loading);
}


function addElement(tm,ru){
    let tmElement = document.createElement('h2');
    tmElement.style.color = 'green';
    tmElement.innerHTML=tm;

    let ruElement = document.createElement('h2');
    ruElement.style.color = 'gray';
    ruElement.innerHTML=ru;
    wordContainer.appendChild(tmElement)
    wordContainer.appendChild(ruElement)
}