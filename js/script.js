// defining variables
let navTrigger = document.getElementById('nav-trigger');
let navigationMenu = document.getElementById('navbar-menu');
let navigationItems = navigationMenu.children
let navigationMenuIsOpen = false;

function manageDropdownMenu() {
    let dropdownTitles = document.querySelectorAll(".dropdown__title")
    dropdownTitles.forEach(dropdownTitle => {
        let dropdownList = dropdownTitle.nextElementSibling
        let dropdownArrow = dropdownTitle.firstElementChild
        if (navigationMenuIsOpen) {
            dropdownTitle.addEventListener("click", toggleDropdownMenu)
        }
        else {
            for (let i = 0; i < dropdownTitles.length; i++) {
                dropdownTitles[i].nextElementSibling.classList.remove("dropdown__list--active")
            }
            dropdownTitle.removeEventListener("click", toggleDropdownMenu)
        }
        function toggleDropdownMenu() {
            if (dropdownList.classList.contains("dropdown__list--active")) {
                dropdownList.classList.remove("dropdown__list--active")
                dropdownArrow.classList.remove("dropdown__arrow--active")
            }
            else {
                for (let i = 0; i < dropdownTitles.length; i++) {
                    dropdownTitles[i].nextElementSibling.classList.remove("dropdown__list--active")
                    dropdownTitles[i].firstElementChild.classList.remove("dropdown__arrow--active")
                }
                dropdownList.classList.add("dropdown__list--active");
                dropdownArrow.classList.add("dropdown__arrow--active")

            }
        }
    });
}
// function which closes the mobile navigation menu if the close icon has been clicked
function closeNavigationMenu() {
    navigationMenu.style.transform = "scale(1,0)";
    navTrigger.removeEventListener('click', closeNavigationMenu);
    navTrigger.classList.remove("button--close")
    navTrigger.classList.add("button--open")
    navTrigger.addEventListener('click', openNavigationMenu);
    for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.remove(`${navigationItems[i].classList[0]}` + "--active");
    }
    navigationMenuIsOpen = false;
    manageDropdownMenu();
}
// function which opens the mobile navigation menu if the hamburger icon has been clicked
function openNavigationMenu() {
    navTrigger.removeEventListener('click', openNavigationMenu);
    navTrigger.classList.remove("button--open")
    navTrigger.classList.add("button--close")
    navTrigger.addEventListener('click', closeNavigationMenu);
    navigationMenu.style.transform = "scale(1,1)";
    for (let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.add(`${navigationItems[i].classList[0]}` + "--active")
    }
    navigationMenuIsOpen = true;
    manageDropdownMenu();
}
// checking if the user has clicked the hamburger icon
navTrigger.addEventListener('click', openNavigationMenu);