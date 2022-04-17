// Codes By Mahdi Tasha
// Variables
const all_btn = document.getElementById("all-btn");
const active_btn = document.getElementById("active-btn");
const completed_btn = document.getElementById("completed-btn");

// A Function That Activates Clicked Button And Deactivates Other Buttons
function activate_btn(btn, btn2, btn3) {
    btn.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
}