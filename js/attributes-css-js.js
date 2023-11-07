(() => {
    const headerRow = document.querySelector("header.container .row");
    // console.log(headerRow.innerHTML);
    // console.log(headerRow.innerText);

    const heroH1 = document.querySelector(".container.hero h1");
    // GETTING ATTRIBUTES
    // const heroH1Id = heroH1.getAttribute("id");
    // console.log(`Hero H1 ID => ${heroH1Id}`);
    // SETTING ATTRIBUTES
    // heroH1.setAttribute("id", "Cat-poop-coffee");
    // VALIDATING ATTRIBUTES
    const hasId = heroH1.hasAttribute("id"); // true or false

    // CLASS MANIPULATION
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
})();