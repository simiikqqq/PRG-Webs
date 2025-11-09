document.getElementById("checkButton").addEventListener("click", function() {
    const numberInput = document.getElementById("numberInput").value;
    const result = document.getElementById("result");
    const result2 = document.getElementById("result2");
    const number = Number(numberInput);

    if (numberInput === ""){
        result.textContent = "Zadejte číslo.";
    }
    else if(number === 0){
        result.textContent = "Číslo je nula.";
    }
    else if(number%2 === 0){
        result.textContent = "Číslo je sudé.";
    }
    else{
        result.textContent = "Číslo je liché.";
    }
});