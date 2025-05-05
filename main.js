let i = 0;
const arrowUp = document.getElementById("up-arrow");
const arrowDown = document.getElementById("down-arrow");
const cards = document.querySelectorAll(".project-card");
const carousel = document.querySelector(".carousel");
const cardHeight = 300;

arrowUp.addEventListener("click", () => {
  i = (i - 1 + cards.length) % cards.length;
  carousel.style.transform = `translateY(-${i * cardHeight}px)`;
  arrowUp.classList.add("stopped");

  if (i === 0) {
    arrowUp.style.visibility = "hidden";
  }
});

arrowDown.addEventListener("click", () => {
  i = (i + 1) % cards.length;
  carousel.style.transform = `translateY(-${i * cardHeight}px)`;
  arrowDown.classList.add("stopped");

  if (i > 0) {
    arrowUp.style.visibility = "visible";
  }
});

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    const icon = button.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.classList.toggle("rotated");
    }
  });
});
