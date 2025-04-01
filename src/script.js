import "./style.css";

let count = 0;

const upgrades = {
  clickMultiplier: { price: 20, growth: 10, effect: () => (clickValue *= 2) },
  autoCrinkle: { price: 100, growth: 1.5, effect: () => startAutoClick() },
};

let clickValue = 1;

const elements = {
  crinklesImg: document.getElementById("crinkles"),
  countDisplay: document.getElementById("counter"),
  resetBtn: document.getElementById("reset"),
  upgrade1Btn: document.getElementById("upgrade1"),
  upgrade2Btn: document.getElementById("upgrade2"),
  priceText1: document.getElementById("price1"),
  priceText2: document.getElementById("price2"),
};

elements.crinklesImg.addEventListener("click", () => {
  count += clickValue;
  updateCounter();
});

elements.resetBtn.addEventListener("click", () => {
  count = 0;
  clickValue = 1;
  updateCounter();
});

elements.upgrade1Btn.addEventListener("click", () =>
  buyUpgrade("clickMultiplier"),
);

elements.upgrade2Btn.addEventListener("click", () => buyUpgrade("autoCrinkle"));

function buyUpgrade(type) {
  const upgrade = upgrades[type];

  if (count >= upgrade.price) {
    count -= upgrade.price;
    upgrade.effect();
    upgrade.price = Math.ceil(upgrade.price * upgrade.growth);
    updateCounter();
    if (type === "clickMultiplier") {
      updatePrice1();
    } else if (type === "autoCrinkle") {
      updatePrice2();
    }
  } else {
    alert("Not enough crinkles!");
  }
}

function updateCounter() {
  elements.countDisplay.textContent = Math.round(count);
}

function updatePrice1() {
  elements.priceText1.textContent = upgrades.clickMultiplier.price;
}

function updatePrice2() {
  elements.priceText2.textContent = upgrades.autoCrinkle.price;
}

function startAutoClick() {
  setInterval(() => {
    count++;
    updateCounter();
  }, 1000);
}
