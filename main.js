document.addEventListener('DOMContentLoaded', function () {
	let burger = document.getElementById('show-burger')
	let elementWithClassBurger = document.querySelector('.header_cap-mobile');
	let elementWithClassMenu = document.querySelector('.header_info');
	let elementWithClassCross = document.querySelector('.burger');
	burger.onclick = function () {
	if (elementWithClassBurger.classList.contains("aditional-header_cap-bottom")) {
		elementWithClassBurger.classList.remove("aditional-header_cap-bottom");
	} else {
		elementWithClassBurger.classList.add("aditional-header_cap-bottom")
	}

	if (elementWithClassMenu.classList.contains("aditional-header_cap-menu")) {
      	elementWithClassMenu.classList.remove("aditional-header_cap-menu");
        } else {
            elementWithClassMenu.classList.add("aditional-header_cap-menu")
        }

	if (elementWithClassCross.classList.contains("active")) {
      	elementWithClassCross.classList.remove("active");
        } else {
            elementWithClassCross.classList.add("active")
        }
	}
	
	

})
	