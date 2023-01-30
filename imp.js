let requiredSkills=[
    'MUI',
    'Ubuntu',
    'Typescript',
    'Nginx',
    'PostgreSQL',
    'Firebase'
];

let mySkills=[
    'MUI',
    'Ubuntu',
    'Typescript',
    'Nginx',
    'PostgreSQL',
    'Firebase'
];

function isHas(arr,skill){
    let result=false;
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        if(item===skill){
            result=true;
            break;
        }
    }
    return result;
}

function updateArray(arr,index,item){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(index===i){
            newArray.push(item);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function check(){
    let result=true;
    for(let i=0;i<requiredSkills.length;i++){
        if(!isHas(mySkills,requiredSkills[i])){
            result=false;
            break;
        }
    }
    console.log(result);
}

check()


