const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor =  "rgb(255, 0, 0)";
    event.target.textContent = "AUGHH! 🤕";
});

myBox.addEventListener("mousemove", event => {
    event.target.style.backgroundColor =  "rgb(255, 238, 0)";
    event.target.textContent = "Nedělej to 😲";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor =  "lightblue";
    event.target.textContent = "Klikni na mě 😀";
})