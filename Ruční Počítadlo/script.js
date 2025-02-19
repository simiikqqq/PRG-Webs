const snizitBtn = document.getElementById('snizitBtn');
const resetBtn = document.getElementById('resetBtn');
const zvysitBtn = document.getElementById('zvysitBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

zvysitBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

snizitBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}