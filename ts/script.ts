//
const hamburgerIcon: HTMLElement = document.querySelector(".menu-trigger")!
const navigationMenu: HTMLElement = document.querySelector(".menu")!
const menuDropdowns: NodeListOf<Element> = document.querySelectorAll(".menu__dropdown")!

function toggleHamburgerMenu() {
    let hamburgerMenuOpen: boolean = hamburgerIcon.classList.contains("menu-trigger--active");
    if (hamburgerMenuOpen) {
        menuDropdowns.forEach(menuDropdown => {
            menuDropdown.classList.remove('menu__dropdown--show')
        });
        hamburgerIcon.classList.remove("menu-trigger--active")
        hamburgerIcon.setAttribute('aria-label', 'Click to open the navigation menu')
        navigationMenu.classList.remove("menu--is-open")
        navigationMenu.classList.add("menu--is-closed")
    }
    else {
        hamburgerIcon.classList.add("menu-trigger--active")
        hamburgerIcon.setAttribute('aria-label', 'Click to close the navigation menu')
        navigationMenu.classList.remove("menu--is-closed")
        navigationMenu.classList.add("menu--is-open")
        menuDropdowns.forEach(menuDropdown => {
            const dropdownTitle = menuDropdown.firstElementChild!;
            dropdownTitle.addEventListener('click', openDropDown);
        });
    }
}

function openDropDown(e: any) {
    const targetedDropdown = e.target.parentNode;
    let dropdownListIsShown: boolean = targetedDropdown.classList.contains("menu__dropdown--show");
    if (dropdownListIsShown) {
        targetedDropdown.classList.remove('menu__dropdown--show')
    }
    else {
        menuDropdowns.forEach(menuDropdown => {
            menuDropdown.classList.remove('menu__dropdown--show')
        });
        targetedDropdown.classList.add('menu__dropdown--show')
    }
}

function checkScreenSize() {
    let screenSize: number = window.innerWidth / 16;
    if (screenSize >= 46) {
        menuDropdowns.forEach(menuDropdown => {
            menuDropdown.classList.remove('menu__dropdown--show')
        });
        hamburgerIcon.classList.remove("menu-trigger--active")
        hamburgerIcon.setAttribute('aria-label', 'Click to open the navigation menu')
        hamburgerIcon.classList.add("menu-trigger--hidden")
        navigationMenu.classList.remove("menu--is-open")
    }
    else {
        hamburgerIcon.classList.remove("menu-trigger--hidden")
        navigationMenu.classList.add("menu--is-closed")
    }
}

window.addEventListener("load", checkScreenSize)
window.addEventListener("resize", checkScreenSize)
hamburgerIcon.addEventListener('click', toggleHamburgerMenu);