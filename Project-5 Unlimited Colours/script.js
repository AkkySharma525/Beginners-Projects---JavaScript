const start = document.getElementById('start');
const stop = document.getElementById('stop');

// Generate a Random Color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i=0; i<6; i++){
        let idx = Math.floor(Math.random()*16);
        color += hex[idx];
    }
    return color;
}
let intervalId;
const startChangingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);
