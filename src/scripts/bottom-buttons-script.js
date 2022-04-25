// Codes By Mahdi Tasha
// Variables
const all_btn = document.getElementById("all-btn");
const active_btn = document.getElementById("active-btn");
const completed_btn = document.getElementById("completed-btn");
const clear_all_btn = document.getElementById('clear-all-btn');
const left_side_menu_all = document.getElementById('left-side-menu-all');
const left_side_menu_active = document.getElementById('left-side-menu-active');
const left_side_menu_completed = document.getElementById('left-side-menu-completed');

// A Function That Clones List Of Given Todos And Append Them To Their List
function clone_append_item(todo_list, menu) {
    // Looping Through Each Item
    todo_list.forEach(todo => {
        // Getting Clone Of Each Item
        const clone_of_todos = todo.cloneNode(true);
        // Removing id Of Element
        clone_of_todos.removeAttribute('id');
        // Removing Delete Button Of It
        clone_of_todos.lastElementChild.remove();
        // Appending To Its Menu
        menu.appendChild(clone_of_todos);
    })
    // Showing Its Menu
    show_menu(menu);
}

// Adding Event Listener On Each Bottom Button That Listens To Click And Calls 'clone_append_item' On It Parameters
all_btn.addEventListener('click', () => {clone_append_item(all_todos, left_side_menu_all);})
active_btn.addEventListener('click', () => {clone_append_item(all_todos.filter(item => !completed_todos.includes(item)), left_side_menu_active);})
completed_btn.addEventListener('click', () => {clone_append_item(completed_todos, left_side_menu_completed);})

// Adding Event Listener On Clear All Button That Removes Every To Do Item And Sets Number Of Todos;
clear_all_btn.addEventListener('click', () => {
    document.querySelectorAll('.todo-holder--todo--list > li').forEach(item => item.remove());
    all_todos.splice(0, all_todos.length);
    completed_todos.splice(0, completed_todos.length);
    set_todos_count();
})