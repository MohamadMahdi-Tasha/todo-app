// Codes By Mahdi Tasha
// Variables
const toasters = document.getElementById('toasters');

// A Function That Creates New Toast Notification.
function add_toast(name = 'red', details = 'blue') {
    // Creating Elements
    const toaster = document.createElement('div');
    const toaster_top = document.createElement('div');
    const toaster_content = document.createElement('div');
    const toaster_slider_holder = document.createElement('div');
    const toaster_slider = document.createElement('div');
    const toaster_name = document.createElement('h3');
    const toaster_details = document.createElement('p');

    // Doing Some Settings
    toaster.className = 'toaster alert';
    toaster.addEventListener('click', () => close_toast(toaster))
    toaster.appendChild(toaster_top);
    toaster.appendChild(toaster_content);
    toaster.appendChild(toaster_slider_holder);
    toaster_top.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="white" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
    toaster_top.className = 'toaster--top-side-holder';
    toaster_content.className = 'toaster--content';
    toaster_name.className = 'toaster--content--name';
    toaster_details.className = 'toaster--content--details';
    toaster_slider_holder.className = 'toaster--bottom-slider';
    toaster_slider.className = 'toaster--bottom-slider--inner';
    toaster_content.appendChild(toaster_name);
    toaster_content.appendChild(toaster_details);
    toaster_slider_holder.appendChild(toaster_slider);
    toaster_name.textContent = name;
    toaster_details.textContent = details;
    setInterval(() => close_toast(toaster), 2000)

    // Appending Toaster To It Holders.
    toasters.appendChild(toaster);
}

// A Function That Closes Toast
function close_toast(toaster) {
    toaster.style.opacity = '0';
    toaster.style.pointerEvents = 'none';
    clearInterval()
}
