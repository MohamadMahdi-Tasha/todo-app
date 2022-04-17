// Codes By Mahdi Tasha
// Variables
const add_todo_input = document.getElementById('add-todo-input');
const add_todo_checkbox = document.getElementById('add-todo-checkbox');
const todo_list = document.getElementById('todo-list');
const todos_count_span = document.getElementById('todo-remaining-num');

const auto_todo_close_btn_1 = document.getElementById('auto-todo-close-btn-1');
const auto_todo_close_btn_2 = document.getElementById('auto-todo-close-btn-2');
const auto_todo_close_btn_3 = document.getElementById('auto-todo-close-btn-3');
const auto_todo_close_btn_4 = document.getElementById('auto-todo-close-btn-4');
const auto_todo_close_btn_5 = document.getElementById('auto-todo-close-btn-5');
const auto_todo_close_btn_6 = document.getElementById('auto-todo-close-btn-6');

const auto_todo_item_1 = document.getElementById('auto-todo-item-1');
const auto_todo_item_2 = document.getElementById('auto-todo-item-2');
const auto_todo_item_3 = document.getElementById('auto-todo-item-3');
const auto_todo_item_4 = document.getElementById('auto-todo-item-4');
const auto_todo_item_5 = document.getElementById('auto-todo-item-5');
const auto_todo_item_6 = document.getElementById('auto-todo-item-6');

// A Function That Sets Number Of Todos Count Number To Remaining Children Counts Of Todos List.
const set_todos_count = (value = 0) => todos_count_span.textContent = todo_list.childElementCount - value;

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
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.addEventListener('click', () => {
            clicks_of_checkbox ++;
            if (clicks_of_checkbox % 2 !== 0) {todo_div.setAttribute('data-checked', true);}
            else {todo_div.setAttribute('data-checked', false);}
        })

        input.type = 'text';
        input.className = 'todo-input';
        todo_div.className = 'todo-holder--todo--list--item';
        input.value = name;
        delete_btn.addEventListener('click', () => {
            list_element.remove();
            set_todos_count();
        })

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
}

// Adding event Listener To Top Side Input That Listens To keydown
// Event And Checks If Clicked Key Is Enter And If Its Is , It Calls 'add_todo' Function
add_todo_input.addEventListener('keydown', (key) => {
    if (key.key === 'Enter') {
        if (add_todo_input.value === '') {add_toast('Alert','alert', 'Please Fill The Todo Name')}
        else {
            auto_todo_item_1.remove();
            auto_todo_item_2.remove();
            auto_todo_item_3.remove();
            auto_todo_item_4.remove();
            auto_todo_item_5.remove();
            auto_todo_item_6.remove();
            add_todo(add_todo_input.value);
            set_todos_count()
        }
    }
})

// Adding event Listener On Auto Generated Todos , Close Buttons That Listens To Click And Removes That Todo.
auto_todo_close_btn_1.addEventListener('click', () => {auto_todo_close_btn_1.parentElement.parentElement.remove();set_todos_count()});
auto_todo_close_btn_2.addEventListener('click', () => {auto_todo_close_btn_2.parentElement.parentElement.remove();set_todos_count()});
auto_todo_close_btn_3.addEventListener('click', () => {auto_todo_close_btn_3.parentElement.parentElement.remove();set_todos_count()});
auto_todo_close_btn_4.addEventListener('click', () => {auto_todo_close_btn_4.parentElement.parentElement.remove();set_todos_count()});
auto_todo_close_btn_5.addEventListener('click', () => {auto_todo_close_btn_5.parentElement.parentElement.remove();set_todos_count()});
auto_todo_close_btn_6.addEventListener('click', () => {auto_todo_close_btn_6.parentElement.parentElement.remove();set_todos_count()});

// Calling 'set_todos_count' Function To Set Number Of Count At First
set_todos_count();