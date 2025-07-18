const CorrectAnswer1 = document.getElementById("CorrectAnswer1");
const CorrectAnswer2 = document.getElementById("CorrectAnswer2");
const CorrectAnswer3 = document.getElementById("CorrectAnswer3");
const CorrectAnswer4 = document.getElementById("CorrectAnswer4");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
let count = 0;

checkButton.onclick = function(){

    if(CorrectAnswer1.checked){
        count++;
    }
    else{
        count+=0;
    }


    if(CorrectAnswer2.checked){
        count++;
    }
    else{
        count+=0;
    }


    if(CorrectAnswer3.checked){
        count++;
    }
    else{
        count+=0;
    }


    if(CorrectAnswer4.checked){
        count++;
    }
    else{
        count+=0;
    }


    if(count === 1){
        result.textContent="Získal jsi 1/4 bodů a tvá úspěšnost je 25%!"
    }
    else if(count === 2){
        result.textContent="Získal jsi 2/4 bodů a tvá úspěšnost je 50%!"
    }
    else if(count === 3){
        result.textContent="Získal jsi 3/4 bodů a tvá úspěšnost je 75%!"
    }
    else if(count === 4){
        result.textContent="Získal jsi 4/4 bodů a tvá úspěšnost je 100%!"
    }
    else{
        result.textContent="Získal jsi 0/4 bodů a tvá úspěšnost je 0%!"
    }

}
