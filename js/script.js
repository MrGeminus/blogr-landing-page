let hamburgerMenu = document.getElementById('hamburger-menu');
let closeIcon = document.getElementById('close-icon');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileDropdownMenus = document.querySelectorAll('.mobile-dropdown-menu');
function closeMobileMenu() {
    mobileMenu.style.display = "none";
    closeIcon.removeEventListener('click', closeMobileMenu);
    closeIcon.style.display = "none";
    hamburgerMenu.style.display = "block";
    hamburgerMenu.addEventListener('click', openMobileMenu);

}
function openMobileMenu() {
    hamburgerMenu.removeEventListener('click', openMobileMenu);
    hamburgerMenu.style.display = "none";
    closeIcon.style.display = "block";
    closeIcon.addEventListener('click', closeMobileMenu);
    mobileMenu.style.display = "flex";
    mobileDropdownMenus.forEach(mobileDropdownMenu => {
        mobileDropdownMenu.addEventListener("click", () => {
            let mobileDropdownList = mobileDropdownMenu.querySelector('.mobile-dropdown-list');
            let mobileArrow = mobileDropdownMenu.querySelector('.mobile-arrow');

            if (mobileDropdownMenu.classList.contains('active')) {
                mobileDropdownMenu.classList.remove('active');
                mobileDropdownList.style.maxHeight = "0";
                mobileArrow.classList.remove('active');
            }
            else {
                mobileDropdownMenu.classList.add('active');
                mobileDropdownList.style.maxHeight = "50rem";
                mobileArrow.classList.add('active')
            }
        })
    });
}
hamburgerMenu.addEventListener('click', openMobileMenu);