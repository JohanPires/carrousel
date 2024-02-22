let clickCount = 0;

one.style.top = 0;

const displayElementRight = () => {
  if (clickCount === 0) {
    two.style.top = 0;
    two.classList.add("effect");
    one.style.top = "120%";
    setTimeout(() => {
      two.classList.remove("effect");
    }, 2000);
  }

  if (clickCount === 1) {
    three.style.top = 0;
    three.classList.add("effect");
    two.style.top = "120%";
    setTimeout(() => {
      three.classList.remove("effect");
    }, 2000);
  }
  if (clickCount === 2) {
    one.style.top = 0;
    one.classList.add("effect");
    three.style.top = "120%";
    setTimeout(() => {
      one.classList.remove("effect");
    }, 2000);
  }
  if (clickCount < 2) {
    clickCount++;
  } else {
    clickCount = 0;
  }
};
console.log(clickCount);
const displayElementLeft = () => {
  if (clickCount === 1) {
    one.style.top = 0;
    one.classList.add("effect");
    two.style.top = "120%";
    setTimeout(() => {
      one.classList.remove("effect");
    }, 2000);
    clickCount = 0;
  } else if (clickCount === 2) {
    two.style.top = 0;
    two.classList.add("effect");
    three.style.top = "120%";
    clickCount = 1;
    setTimeout(() => {
      two.classList.remove("effect");
    }, 2000);
  } else if (clickCount === 0) {
    three.style.top = 0;
    three.classList.add("effect");
    one.style.top = "120%";
    setTimeout(() => {
      three.classList.remove("effect");
    }, 2000);
    clickCount = 2;
  }
};

buttonOne.addEventListener("click", () => {
  one.style.top = 0;
  two.style.top = "120%";
  three.style.top = "120%";
  one.classList.add("effect");
  clickCount = 0;
  setTimeout(() => {
    one.classList.remove("effect");
  }, 1500);
});
buttonTwo.addEventListener("click", () => {
  one.style.top = "120%";
  two.style.top = 0;
  three.style.top = "120%";
  two.classList.add("effect");
  clickCount = 1;
  setTimeout(() => {
    two.classList.remove("effect");
  }, 1500);
});
buttonThree.addEventListener("click", () => {
  one.style.top = "120%";
  two.style.top = "120%";
  three.style.top = 0;
  three.classList.add("effect");
  clickCount = 2;
  setTimeout(() => {
    three.classList.remove("effect");
  }, 1500);
});

right.addEventListener("click", displayElementRight);

left.addEventListener("click", displayElementLeft);

setInterval(displayElementRight, 4000);
