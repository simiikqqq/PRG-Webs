document.getElementById("searchCity").addEventListener("keyup", function() {
    let input = this.value.toLowerCase();
    let rows = document.querySelectorAll("#tableBody tr");
    rows.forEach(row => {
       let city = row.cells[1].textContent.toLowerCase();
       if (city.includes(input)) {
        row.style.display = "";
       }
       else{
        row.style.display = "none";
       }
    });
});

function filterSelect() {
    let inputCity = document.getElementById("filterCity").value.toLowerCase();
    let options = document.getElementById("selectCity").options;
    for(let i = 0; i < options.length; i++){
        let option = options[i];
        if(option.text.toLowerCase().includes(inputCity)) {
            option.style.display = "";
        }
        else{
            option.style.display = "none";
        }
    }
}

function submit() {
    window.alert("Formulář byl odeslán");
}