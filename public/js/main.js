const header_js = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (this.scrollY > 0) {
        header_js.classList.add("active");
    } else {
        header_js.classList.remove("active");
    }
})

const h_menu = document.querySelector(".header__header-list");
const btn_menu = document.querySelector(".header__header-humbger");

btn_menu.addEventListener("click", () => {
    btn_menu.classList.toggle("active");
    h_menu.classList.toggle("active");
})