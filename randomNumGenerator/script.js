const myButton = document.getElementById("myButton");
const myLabel = document.getElementsByClassName("myLabel");

min = 1;
max = 6;
myButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * max) + min;
  const randomNum2 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum;
  label2.textContent = randomNum2;
});
