const premsButt = document.getElementsByClassName("bouton1");
const secondButt = document.getElementById("close-modal");
const newWind = document.getElementById("modal");


premsButt[0].addEventListener("click", () => {
  premsButt[0].style.display = "none";
  newWind.style.display = "inline-flex";
})

secondButt.addEventListener("click", () => {
  newWind.style.display = "none";
  premsButt[0].style.display = "inline"
})
