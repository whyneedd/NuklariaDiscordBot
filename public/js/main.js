const header_js = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (this.scrollY > 0) {
        header_js.classList.add("active");
    } else {
        header_js.classList.remove("active");
    }
})