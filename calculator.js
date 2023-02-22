let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let display = document.getElementById("display");

add.addEventListener('click', () => {
    display.value ++;
})
subtract.addEventListener('click', () => {
    display.value --;
})