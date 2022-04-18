// Codes By Mahdi Tasha
// Variables
const draggable = document.querySelectorAll('[draggable="true"]');

// Select Each draggable Element
draggable.forEach(draggable_item => {
    // Adding event Listener On Each Draggable Item That Listens To dragstart Event And Adds 'dragstart' Class
    // To Dragged Item And Sets Its Id To 'dragstart';
    draggable_item.addEventListener('dragstart', () => {
        draggable_item.classList.add('dragstart');
        draggable_item.setAttribute('id', 'dragstart');
    })

    // Adding event Listener On Each Draggable Item That Listens To dragenter Event And Sets
    // Data-value Attribute To The Value Of Each Items Input And Sets The Value Of Them To The
    // Data-value Attribute ;)
    draggable_item.addEventListener('dragenter', () => {
        const start_element = document.getElementById('dragstart');
        const end_element = draggable_item;

        start_element.setAttribute('data-value', start_element.firstElementChild.lastElementChild.value);
        end_element.setAttribute('data-value', end_element.firstElementChild.lastElementChild.value);

        start_element.firstElementChild.lastElementChild.value = end_element.getAttribute('data-value');
        end_element.firstElementChild.lastElementChild.value = start_element.getAttribute('data-value');
    })

    // Adding event Listener On Each Draggable Item That Listens To dragend Event And Removes 'dragstart' Class
    // From Dragged Item And Removes Its Id
    draggable_item.addEventListener('dragend', () => {
        draggable_item.classList.remove('dragstart');
        draggable_item.removeAttribute('id');
    })
})