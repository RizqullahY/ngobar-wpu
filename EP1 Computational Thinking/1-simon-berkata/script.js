const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

let rotateSum;
let rotateValue = container.style.transform;

btn.onclick = () => {
   rotateSum = rotateValue + "rotate(90deg)";
   container.style.transform = rotateSum;
   rotateValue = rotateSum;
};
