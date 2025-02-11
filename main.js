document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('show-burger')
    let elementButtonHeader = document.querySelector('.header_cap-mobile');
    let elementMobileMenu = document.querySelector('.header_menu');
    burger.onclick = function () {
        if (elementButtonHeader.classList.contains("aditional-header_cap-bottom")) {
            elementButtonHeader.classList.remove("aditional-header_cap-bottom");
        } else {
            elementButtonHeader.classList.add("aditional-header_cap-bottom")
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


})
	