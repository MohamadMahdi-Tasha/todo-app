// Codes By Mahdi Tasha
// Variables
const theme_switch_btn = document.getElementById('theme_switch_btn');
const moon_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>';
const sun_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>';
const top_side_img = document.getElementById('top-side-img');
let clicks_of_them_switch = 0;

// Adding Event Listener On Theme Switcher Btn That Listens To Click And Switches Theme To Light And Dark Mode
// And Changes Icon Of Theme Btn And Changes The Image Of Top Side.
theme_switch_btn.addEventListener('click', () => {
    clicks_of_them_switch ++;
    if (clicks_of_them_switch % 2 !== 0) {
        document.body.setAttribute('data-theme', 'light');
        theme_switch_btn.innerHTML = moon_svg;
        top_side_img.src = 'src/img/bg-desktop-light.jpg';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        theme_switch_btn.innerHTML = sun_svg;
        top_side_img.src = 'src/img/bg-top-side.jpg';
    }
})