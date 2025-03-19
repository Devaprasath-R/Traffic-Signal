var stoplight = document.getElementById("stoplight");
var readylight = document.getElementById("readylight");
var golight = document.getElementById("golight");

function btn1(){
    stoplight.style.backgroundColor = "red";  
    readylight.style.backgroundColor = "rgb(150,150,150)";
    golight.style.backgroundColor = "rgb(150,150,150)";
}

function btn2(){
    readylight.style.backgroundColor = "yellow"; 
    stoplight.style.backgroundColor ="rgb(150,150,150)";
    golight.style.backgroundColor = "rgb(150,150,150)";
}

function btn3(){
    golight.style.backgroundColor = "green";  
    stoplight.style.backgroundColor ="rgb(150,150,150)"; 
    readylight.style.backgroundColor ="rgb(150,150,150)";
}