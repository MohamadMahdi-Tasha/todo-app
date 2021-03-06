// Codes By Mahdi Tasha
// Variables
const add_todo_input = document.getElementById('add-todo-input');
const add_todo_checkbox = document.getElementById('add-todo-checkbox');
const todo_list = document.getElementById('todo-list');
const todos_count_span = document.getElementById('todo-remaining-num');

let enter_on_input = 0;
let number_id = 0;

// A Function That Sets Number Of Todos Count Number To Remaining Children Counts Of Todos List.
const set_todos_count = () => todos_count_span.textContent = all_todos.length;

// Adding Event Listener On Each Todo  Input That Listens To Change And Calls  'remove_element_by_empty_input' Function
document.querySelectorAll('.todo-input').forEach(input => {input.addEventListener('change', () => {remove_element_by_empty_input(input)})})

// A Function That Removes Todo Element If Its Value Is Empty.
function remove_element_by_empty_input(input) {
    if (input.value === '') {
        input.parentElement.parentElement.parentElement.remove();
        set_todos_count();
    }
}

// A Function That Creates Todo Item
function add_todo(name) {
    // If Name Of Todo Was Empty Show A Toast Otherwise Add Task.
    if (name === '') {add_toast('Alert','alert', 'Please Fill The Todo Name')}
    else {
        // Creating Element
        const list_element = document.createElement('li');
        const todo_div = document.createElement('div');
        const todo_div_inner_div = document.createElement('div');
        const delete_btn = document.createElement('button');
        const checkbox = document.createElement('input');
        const input = document.createElement('input');
        let clicks_of_checkbox = 0;

        // Setting Some Attributes.
        number_id ++;
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        todo_div.id = `todo-${number_id}`;
        input.type = 'text';
        input.className = 'todo-input';
        todo_div.className = 'todo-holder--todo--list--item';
        input.value = name;

        input.onchange = () => remove_element_by_empty_input(input);

        checkbox.addEventListener('click', () => {clicks_of_checkbox++;checkboxes(checkbox, clicks_of_checkbox)})
        delete_btn.addEventListener('click', () => delete_todo(delete_btn))

        // Appending Child To Their Parents
        list_element.appendChild(todo_div);
        todo_div.appendChild(todo_div_inner_div);
        todo_div.appendChild(delete_btn);
        todo_div_inner_div.appendChild(checkbox);
        todo_div_inner_div.appendChild(input);
        delete_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';

        // Appending Todo Item To Its List.
        todo_list.appendChild(list_element);

        // Removing Everything Inside Add Todo input.
        add_todo_input.value = '';

        // Pushing Element To 'all_todos' List;
        all_todos.push(todo_div)
    }
}

// Adding event Listener To Top Side Input That Listens To keydown
// Event And Checks If Clicked Key Is Enter And If Its Is , It Calls 'add_todo' Function
add_todo_input.addEventListener('keydown', (key) => {
    if (key.key === 'Enter') {
        if (add_todo_input.value === '') {add_toast('Alert','alert', 'Please Fill The Todo Name')}
        else {
            enter_on_input ++;

            if (enter_on_input === 1) {
                all_todos = [];
                completed_todos = [];
            }

            document.querySelectorAll('.auto-todo').forEach(item => item.remove())
            add_todo(add_todo_input.value);
            set_todos_count()
        }
    }
})

set_todos_count();