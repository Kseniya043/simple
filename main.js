document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('show-burger')
    let elementNavigationHeader = document.querySelector('.header_cap-mobile');
    let elementMobileMenu = document.querySelector('.header_menu');
    burger.onclick = function () {
        if (elementNavigationHeader.classList.contains("aditional-header_cap-bottom")) {
            elementNavigationHeader.classList.remove("aditional-header_cap-bottom");
        } else {
            elementNavigationHeader.classList.add("aditional-header_cap-bottom")
        }

        if (elementMobileMenu.classList.contains("aditional-header_cap-menu")) {
            elementMobileMenu.classList.remove("aditional-header_cap-menu");
        } else {
            elementMobileMenu.classList.add("aditional-header_cap-menu")
        }

        if (burger.classList.contains("active")) {
            burger.classList.remove("active");
        } else {
            burger.classList.add("active")
        }
    }
    let myModal = document.getElementById('entrance');
    let elementWithClassModal = document.querySelector('.modal-off');
    myModal.onclick = function () {
        if (elementWithClassModal.classList.contains("modal")) {
            elementWithClassModal.classList.remove("modal");
        } else {
            elementWithClassModal.classList.add("modal")
        }
    }
})
	