var menuBtn = document.querySelector(".menu-btn");
var button = document.querySelector(".button");
var sideBar = document.querySelector(".side-bar");

var arr = [menuBtn, button];
for (var y = 0; y < arr.length; y++) {
  arr[y].addEventListener("click", function () {
    sideBar.classList.toggle("position");
  });
}

