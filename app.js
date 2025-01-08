const btn1 = document.body.querySelector("#btn1");
const btn2 = document.body.querySelector("#btn2");
const copyCode = document.body.querySelector(".copyCode");

let color1 = "051937";
let color2 = "008793";

const getRandomColor = () => {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color = color + characters[randomIndex];
  }

  return color;
};

const handleButton1 = () => {
  color1 = getRandomColor();
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  btn1.textContent = color1;
  copyCode.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

const handleButton2 = () => {
  color2 = getRandomColor();
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  btn2.textContent = color2;
  copyCode.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

const copyText = () => {
  navigator.clipboard.writeText(copyCode.textContent);
  alert("Text copied to clipboard.");
};

const main = () => {
  btn1.addEventListener("click", handleButton1);
  btn2.addEventListener("click", handleButton2);
  copyCode.addEventListener("click", copyText);
};

main();
