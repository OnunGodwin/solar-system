var toggler = document.getElementsByClassName("closable");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".content").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

var toggler = document.getElementsByClassName("second-closable");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".second-content").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

var toggler = document.getElementsByClassName("third-closable");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".third-content").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
};

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}