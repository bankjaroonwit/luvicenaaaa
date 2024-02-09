const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "รักเหมือนกันๆๆๆๆ เย้ๆๆๆๆ";
  gif.src ="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJ2anMzeWJkbnFkejFoNWw1eDhvcWhwZGcxdHd4NTljeGpjZWRmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KztT2c4u8mYYUiMKdJ/giphy.gif";
});



noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
