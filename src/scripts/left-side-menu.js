// Codes By Mahdi Tasha
// Variables
const left_side_menu_holder = document.getElementById('left-side-menu-holder');

// A Function That Shows The Left Side Menu.
function show_menu(menu) {
    left_side_menu_holder.setAttribute('data-showing', true);
    menu.setAttribute('data-showing', true);
}

// A Function That Closes The Left Side Menu.
function close_menu(menu) {
    left_side_menu_holder.setAttribute('data-showing', false);
    menu.setAttribute('data-showing', false);
}

// Adding Event Listener On A Menu That Has Attribute data-showing="true" That Listens To CLick And Calls 'close_menu' Function Om It.
left_side_menu_holder.addEventListener('click', () => close_menu(document.querySelector('.left-side-menu[data-showing="true"]')));