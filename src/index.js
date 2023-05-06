const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const button = document.querySelector("img");
const h1 = document.querySelector("h1");
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");

function changeIcon() {
  if (li[0].style.left == "-100%") {
    button.src = "./icons/menu.png";
  } else {
    button.src = "./icons/cruz.png";
  }
}

function imgBlur() {
  if (li[0].style.left == "-100%") {
    imgApi.style.filter = "blur(0)";
  } else {
    imgApi.style.filter = "blur(10px)";
  }
}

button.addEventListener("click", () => {
  if (
    li[0].style.left == "-100%" &&
    li[1].style.left == "-100%" &&
    li[2].style.left == "-100%" &&
    li[3].style.left == "-100%" &&
    li[4].style.left == "-100%" &&
    li[5].style.left == "-100%"
  ) {
    li[0].style.left = "0";
    li[1].style.left = "0";
    li[2].style.left = "0";
    li[3].style.left = "0";
    li[4].style.left = "0";
    li[5].style.left = "0";
    changeIcon();
    imgBlur();
  } else {
    li[0].style.left = "-100%";
    li[1].style.left = "-100%";
    li[2].style.left = "-100%";
    li[3].style.left = "-100%";
    li[4].style.left = "-100%";
    li[5].style.left = "-100%";
    changeIcon();
    imgBlur();
  }
});

searchIcon.addEventListener("click", () => {
  if (
    searchInput.style.opacity == "0" &&
    searchInput.style.width == "0px" &&
    h1.style.opacity == "1"
  ) {
    searchInput.style.opacity = "1";
    searchInput.style.width = "170px";
    h1.style.opacity = "0";
  } else {
    searchInput.style.opacity = "0";
    searchInput.style.width = "0px";
    h1.style.opacity = "1";
  }
});

getImgApi();
