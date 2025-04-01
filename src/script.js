import "./style.css";

let count = 0;
let clickValue = 1;
let basePrice = 50;
let currentPrice = basePrice;

const crinklesImg = document.getElementById("crnikles");
const countDislpay = document.getElementById("counter");
const resetBtn = document.getElementById("reset");
const upgrade1Btn = document.getElementById("upgrade1");
const priceText = document.getElementById("price");

crinkles.addEventListener("click", () => {
  count += clickValue;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  clickValue = 1;
  updateCounter();
});

function updateCounter() {
  countDislpay.textContent = Math.round(count);
}

upgrade1Btn.addEventListener("click", () => {
  if (count >= currentPrice) {
    clickValue += 0.5;
    count -= currentPrice;
    updatePrice();
    updateCounter();
  } else {
    console.log(currentPrice);
  }
});

function updatePrice() {
  currentPrice = basePrice *= 1.5;
  priceText.textContent = Math.ceil(currentPrice);
}
