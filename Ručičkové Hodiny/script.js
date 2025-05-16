const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHAnd = document.querySelector(".secondHand");
const time = document.querySelector(".time");
const clock = document.querySelector(".clock");

function setDate() {
    const today = new Date();

    const second = today.getSeconds();
    const minute = today.getMinutes();
    const hour = today.getHours();

    const secondDeg = ((second / 60) * 360) + 360;
    const minuteDeg = ((minute / 60) * 360);
    const hourDeg = ((hour / 12) * 360);

    secondHAnd.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    time.innerHTML = `<span><strong>${hour}</strong> : ${minute} : <small>${second}</small></span>`;
}

setInterval(setDate, 1000);