// Codes By Mahdi Tasha
// Variables
const all_btn = document.getElementById("all-btn");
const active_btn = document.getElementById("active-btn");
const completed_btn = document.getElementById("completed-btn");
const clear_all_btn = document.getElementById('clear-all-btn');

// A Function That Activates Clicked Button And Deactivates Other Buttons
function activate_btn(btn, btn2, btn3) {
    btn.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
}

all_btn.addEventListener('click', () => {
    activate_btn(all_btn, active_btn, completed_btn);
    console.log(all_todos)
    show_menu()
})

active_btn.addEventListener('click', () => {
    activate_btn(active_btn, all_btn, completed_btn);
    console.log(all_todos.filter(item => !completed_todos.includes(item)))
})

completed_btn.addEventListener('click', () => {
    activate_btn(completed_btn, active_btn, all_btn);
    console.log(completed_todos)
})

// Adding Event Listener On Clear All Button That Removes Every To Do Item And Sets Number Of Todos;
clear_all_btn.addEventListener('click', () => {
    document.querySelectorAll('.todo-holder--todo--list > li').forEach(item => item.remove());
    all_todos.splice(0, all_todos.length);
    completed_todos.splice(0, completed_todos.length);
    set_todos_count();
})