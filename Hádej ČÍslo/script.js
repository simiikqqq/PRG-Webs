const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Hádej číslo od ${minNum} do ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Zadej prosím číslo");
    }
    else if(guess > maxNum || guess < minNum){
        window.alert(`Zadej prosím číslo od ${minNum} do ${maxNum}`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Zadej prosím výšší číslo");
        }
        else if(guess > answer){
            window.alert("Zadej prosím nižší číslo");
        }
        else{
            window.alert(`Správně! Správné číslo bylo ${answer} a uhodl jsi to za ${attempts} pokusu!`);
            running = false;
        }
    }
}