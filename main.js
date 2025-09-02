// Burger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Selected button
const buttons = document.querySelectorAll(".product_btns button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("random"));
    btn.classList.add("random");
  });
});

// Plus and minus
document.querySelectorAll(".product_card").forEach((card) => {
  const minusBtn = card.querySelector(".minus");
  const plusBtn = card.querySelector(".plus");
  const display = card.querySelector(".qty-display");
  const addToCardBtn = card.querySelector(".add");
  let qty = 1;

  minusBtn.addEventListener("click", () => {
    if (qty > 1) qty--;
    display.textContent = qty;
  });

  plusBtn.addEventListener("click", () => {
    qty++;
    display.textContent = qty;
  });

  addToCardBtn.addEventListener("click", () => {
    qty = 1;
    display.textContent = qty;
  });
});
