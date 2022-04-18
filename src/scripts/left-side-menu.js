// Codes By Mahdi Tasha
// Variables
const left_side_menu_holder = document.getElementById('left-side-menu-holder');
const left_side_menu = document.getElementById('left-side-menu');

// A Function That Shows The Left Side Menu.
function show_menu() {
    left_side_menu_holder.setAttribute('data-showing', true);
    left_side_menu.setAttribute('data-showing', true);
}

// A Function That Closes The Left Side Menu.
function close_menu() {
    left_side_menu_holder.setAttribute('data-showing', false);
    left_side_menu.setAttribute('data-showing', false);
}

// Adding Event Listener On 'left_side_menu_holder' That Listens To CLick And Calls 'close_menu' Function
left_side_menu_holder.addEventListener('click', close_menu);