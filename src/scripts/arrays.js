// Codes By Mahdi Tasha
// Variables
let completed_todos = [];
let all_todos = [
    document.getElementById('auto-todo-item-1').firstElementChild,
    document.getElementById('auto-todo-item-2').firstElementChild,
    document.getElementById('auto-todo-item-3').firstElementChild,
    document.getElementById('auto-todo-item-4').firstElementChild,
    document.getElementById('auto-todo-item-5').firstElementChild,
    document.getElementById('auto-todo-item-6').firstElementChild,
];

// A Function That Deletes Selected Todo And Removes It From All Todos List.
function delete_todo(button) {
    const list_item = button.parentElement.parentElement;
    const index_of_btn_parent = all_todos.indexOf(button.parentElement);

    all_todos.splice(index_of_btn_parent, 1)
    if (button.previousElementSibling.firstElementChild.checked) {completed_todos.splice(index_of_btn_parent, 1)}

    list_item.remove();
    set_todos_count();
}

// Adding Event Listener On Each Close Button Of Todo Element That Listens To Click And Calls 'delete_todo' Function On Button
document.querySelectorAll('.todo-holder--todo--list--item > button').forEach(button => {button.addEventListener('click', () => delete_todo(button));})
