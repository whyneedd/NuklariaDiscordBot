var _this = this;
var header_js = document.querySelector(".js-header");
window.addEventListener("scroll", function () {
  if (_this.scrollY > 0) {
    header_js.classList.add("active");
  } else {
    header_js.classList.remove("active");
  }
});
var h_menu = document.querySelector(".header__header-list");
var btn_menu = document.querySelector(".header__header-humbger");
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  h_menu.classList.toggle("active");
});

var cookiebloc = document.querySelector(".cookie");

setInterval(function() {
    let cookieaccpted = localStorage.getItem("cookieaccepted");
    if (cookieaccpted !== "yes") {
        cookiebloc.classList.add("active");
    } 
    else {
        cookiebloc.classList.remove("active");
    }
}, 3000);

var cookieblocbtn = document.querySelector(".cookie__cookie-btn");

cookieblocbtn.addEventListener("click", () => {
  cookiebloc.classList.remove("active");
  localStorage.setItem("cookieaccepted", "yes");
});
