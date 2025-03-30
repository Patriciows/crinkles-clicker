import './style.css'

let count = 0;

const crinklesImg = document.getElementById("crnikles")
const countDislpay = document.getElementById("counter")
const resetBtn = document.getElementById("reset")

crinkles.addEventListener("click", () => {
    count++;
    updateCounter();
})

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
})

function updateCounter() {
    countDislpay.textContent = count;
}
