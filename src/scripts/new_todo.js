// Codes By Mahdi Tasha
// Variables
const add_todo_input = document.getElementById('add-todo-input');
const add_todo_checkbox = document.getElementById('add-todo-checkbox');
const todo_list = document.getElementById('todo-list');

// A Function That Creates Todo Item
function add_todo(name) {
    // Creating Element
    const list_element = document.createElement('li');
    const todo_div = document.createElement('div');
    const todo_div_inner_div = document.createElement('div');
    const delete_btn = document.createElement('button');
    const checkbox = document.createElement('input');
    const input = document.createElement('input');

    // Setting Some Attributes.
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    input.type = 'text';
    input.className = 'todo-input';
    todo_div.className = 'todo-holder--todo--list--item';
    input.value = name;

    // If New To Do Checkbox Is Checked Then Create Checked Checkbox.
    if (add_todo_checkbox.checked) {checkbox.setAttribute('checked', 'true');}

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
}

// Adding event Listener To Top Side Input That Listens To keydown
// Event And Checks If Clicked Key Is Enter And If Its Is , It Calls 'add_todo' Function
add_todo_input.addEventListener('keydown', (key) => {
    if (key.key === 'Enter') {add_todo(add_todo_input.value);}
})