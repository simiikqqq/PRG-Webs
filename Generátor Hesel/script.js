const generateButton = document.getElementById("generateButton");

generateButton.onclick = function(){

    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("includeLowercase");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const result = document.getElementById("result");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allowedChars = "";
    let password = "";

    if(includeLowercase.checked){
        allowedChars += lowercaseChars;
    }
    if(includeUppercase.checked){
        allowedChars += uppercaseChars;
    }
    if(includeNumbers.checked){
        allowedChars += numberChars;
    }    
    if(includeSymbols.checked){
        allowedChars += symbolChars;
    }

    if(passwordLength <= 0){
        result.textContent = "(Počet znaků musí mít minimálně 1 znak!)";
        return;
    }
    if(allowedChars.length === 0){
        result.textContent = "(Musí být vybrán minimálně jeden typ znaku!)";
        return;
    }
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.textContent = password;
}

    