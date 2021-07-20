let hamburgerMenu = document.getElementById("hamburger-menu");
let headerMenu = document.querySelector(".header-menu");
let dropdownTitles = document.querySelectorAll(".header__dropdown-title");
hamburgerMenu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu() {
    hamburgerMenu.classList.toggle("hamburger-menu--open");
    hamburgerMenu.classList.toggle("hamburger-menu--close");
    headerMenu.classList.toggle("header-menu--active");
    openDropDown()
}

function openDropDown() {
    dropdownTitles.forEach(dropdownTitle => {
        dropdownTitle.addEventListener("click", () => {
            let dropdownTitleArrow = dropdownTitle.firstElementChild;
            let dropdownMenuContainer = dropdownTitle.parentElement.nextElementSibling;
            let dropdownMenu = dropdownMenuContainer.firstElementChild;
            let dropdownLinks = dropdownMenu.querySelectorAll(".header__dropdown-list-link");
            dropdownTitleArrow.classList.toggle("header__dropdown-arrow--active");
            dropdownMenuContainer.classList.toggle("header__dropdown-item--active");
            dropdownMenu.classList.toggle("header__dropdown-list--active");
            dropdownLinks.forEach(dropdownLink => {
                dropdownLink.classList.toggle("header__dropdown-list-link--active");
            });
        });
    });
}