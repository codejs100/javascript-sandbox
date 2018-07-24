const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListener() {
    console.log('This id from the loadEventListener');
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    console.log('This is from the AddTask');
    if(taskInput.value == '') {
        alert('Enter the task List');
        return;
    }
    let liElement = document.createElement('li');
    liElement.className = 'collection-item';
    liElement.appendChild(document.createTextNode(taskInput.value));
    let link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"><i>';
    liElement.appendChild(lnk);
    taskList.appendChild(liElement);
    e.preventDefault();
}
