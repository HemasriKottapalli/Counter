let counterLabel = document.getElementById("counterLabel");
let decrementBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let incrementBtn = document.getElementById("increaseBtn");

let count = 0;

decrementBtn.onclick = function(){
    count--;
    counterLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}

incrementBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
}