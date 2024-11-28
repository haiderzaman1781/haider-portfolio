window.addEventListener("scroll", () => {
    const main = document.querySelectorAll(".main-navbar");

    var scroll = window.scrollY;
    main.forEach((m) => {
        if (scroll < 10) {
            m.classList.remove("nav"); 
            m.style.width = "100%";
            m.style.marginTop = "0px"

        } else {
            m.classList.add("nav");
            m.style.width = "80%"
            m.style.transition = "width 1s"
            m.style.marginTop ="10px"
        }
    });
});