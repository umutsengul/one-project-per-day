const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

myButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  myLabel.textContent = randomNum;
});
