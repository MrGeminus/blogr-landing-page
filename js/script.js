// defining variables
let hamburgerMenu = document.getElementById('hamburger-menu');
let closeIcon = document.getElementById('close-icon');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileDropdownMenus = document.querySelectorAll('.mobile-dropdown-menu');
// function which closes the mobile navigation menu if the close icon has been clicked
function closeMobileMenu() {
    for (let i = 0; i < mobileDropdownMenus.length; i++) {
        let mobileDropdownList = mobileDropdownMenus[i].querySelector('.mobile-dropdown-list');
        let mobileArrow = mobileDropdownMenus[i].querySelector('.mobile-arrow');
        let mobileDropdownTitle = mobileDropdownMenus[i].querySelector('.mobile-dropdown-title');
        if (mobileDropdownMenus[i].classList.contains('active')) {
            mobileDropdownMenus[i].classList.remove('active');
            mobileDropdownList.style.maxHeight = "0";
            mobileArrow.classList.remove('active');
            mobileDropdownTitle.classList.remove('active');
        }
    }
    mobileMenu.style.display = "none";
    closeIcon.removeEventListener('click', closeMobileMenu);
    closeIcon.style.display = "none";
    hamburgerMenu.style.display = "block";
    hamburgerMenu.addEventListener('click', openMobileMenu);
}
// function which opens the mobile navigation menu if the hamburger icon has been clicked
function openMobileMenu() {
    hamburgerMenu.removeEventListener('click', openMobileMenu);
    hamburgerMenu.style.display = "none";
    closeIcon.style.display = "block";
    closeIcon.addEventListener('click', closeMobileMenu);
    mobileMenu.style.display = "flex";
    // going trough all 
    mobileDropdownMenus.forEach(mobileDropdownMenu => {
        function openDropdownMenu() {
            let mobileDropdownList = mobileDropdownMenu.querySelector('.mobile-dropdown-list');
            let mobileArrow = mobileDropdownMenu.querySelector('.mobile-arrow');
            let mobileDropdownTitle = mobileDropdownMenu.querySelector('.mobile-dropdown-title');
            if (mobileDropdownMenu.classList.contains('active')) {
                mobileDropdownMenu.classList.remove('active');
                mobileDropdownList.style.maxHeight = "0";
                mobileArrow.classList.remove('active');
                mobileDropdownTitle.classList.remove('active');
            }
            else {
                for (let i = 0; i < mobileDropdownMenus.length; i++) {
                    let mobileDropdownList = mobileDropdownMenus[i].querySelector('.mobile-dropdown-list');
                    let mobileArrow = mobileDropdownMenus[i].querySelector('.mobile-arrow');
                    let mobileDropdownTitle = mobileDropdownMenus[i].querySelector('.mobile-dropdown-title');
                    if (mobileDropdownMenus[i].classList.contains('active')) {
                        mobileDropdownMenus[i].classList.remove('active');
                        mobileDropdownList.style.maxHeight = "0";
                        mobileArrow.classList.remove('active');
                        mobileDropdownTitle.classList.remove('active');
                    }
                }
                mobileDropdownMenu.classList.add('active');
                mobileDropdownList.style.maxHeight = "50rem";
                mobileArrow.classList.add('active');
                mobileDropdownTitle.classList.add('active');
            }
        }
        function removemobileDropdownMenuEventListener() {
            mobileDropdownMenu.removeEventListener("click", openDropdownMenu);
            closeIcon.removeEventListener('click', removemobileDropdownMenuEventListener);
            closeMobileMenu();
        }
        mobileDropdownMenu.addEventListener("click", openDropdownMenu);
        closeIcon.addEventListener('click', removemobileDropdownMenuEventListener);
    });
}
// checking if the user has clicked the hamburger icon
hamburgerMenu.addEventListener('click', openMobileMenu);