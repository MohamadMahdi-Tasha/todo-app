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

// A Function That Takes checkbox And Clicks Variable Of It As Parameter And Checks If NNumber Of Clicks Of Checkbox
// is Odd Then It Pushes It To Completed Todos .Otherwise, It Removes It From Completed Items
function checkboxes(checkbox, clicks) {
    const todo_item = checkbox.parentElement.parentElement;
    if (clicks % 2 !== 0) {completed_todos.push(todo_item);}
    else {completed_todos.splice(completed_todos.indexOf(todo_item), 1);}
}

// Adding Event Listener On Each Close Button Of Todo Element That Listens To Click And Calls 'delete_todo' Function On Each Button
document.querySelectorAll('.todo-holder--todo--list--item > button').forEach(button => {button.addEventListener('click', () => delete_todo(button));})

// Adding Event Listener On Each Checkbox Input That Adds Event Listener To Them That Declares Clicks Variables
// And Listens To CLick On Them And Adds 1 To Clicks Variable And Calls 'checkboxes' Function On Them
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    let clicks = 0;
    checkbox.addEventListener('click', () => {
        clicks ++;
        checkboxes(checkbox, clicks);
    })
})