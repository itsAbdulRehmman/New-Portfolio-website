var hamburger = document.querySelector(".hamb");
var nav-list = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function (){
  this.classList.toggle("click");
  nav-list.classList.toggle("open");
});
