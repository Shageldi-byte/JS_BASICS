class Car{
    name
    year
    color

    constructor(name, year, color);

    usedYear(){
        return new Date().getFullYear()-this.year;
    }

    static sayHello(){
        alert("Hello")
    }

}

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

