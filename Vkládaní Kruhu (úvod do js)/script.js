console.log("Hello");
let i = 10;
let numbers = [];
while (i <= 20) {
  numbers.push(i);
  i += 2;
}
console.log(numbers);

/* button */
let click_count = 0;
const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.onclick = () => {
  click_count++;
  btn.innerText = click_count;
  let circle = document.createElement("div");
  circle.classList.add("circle");
  container.appendChild(circle);
};