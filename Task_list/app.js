const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', removeAllTasks);
    filterInput.addEventListener('keyup', filterTask);
    document.addEventListener('DOMContentLoaded',displayTasks);
}

function addTask(e) {
    if(taskInput.value == '') {
        alert('Enter the task List');
    } else {
        let liElement = document.createElement('li');
        liElement.className = 'collection-item';
        liElement.appendChild(document.createTextNode(taskInput.value));
        let link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"><i>';
        liElement.appendChild(link);
        taskList.appendChild(liElement);
        setValuesToLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Do you want to remove this task?')) {
            removeValueFromLocalStorage(e.target.parentElement.parentElement.textContent);
            e.target.parentElement.parentElement.remove();
        }
    }
}

function removeAllTasks() {
    // let elements = document.querySelectorAll('.collection-item');
    // if(elements.length != 0 && confirm('Do you want to remove this task?')) {
    //     elements.forEach(function(ele){
    //         ele.remove();
    //     });
    // }
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearValuesFromLocalStorage()
}

function filterTask(e) {
    let elements = document.querySelectorAll('.collection-item');
    let filter = e.target.value.toLowerCase();

    elements.forEach(function(ele) {
        const eleText = ele.firstChild.textContent.toLowerCase();
        if(eleText.indexOf(filter) != -1) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    });

}

function getValuesFromLocalStorage() {
    let tasks = [];
    if(localStorage.getItem('tasks') != null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

function setValuesToLocalStorage(value) {
    let tasks = getValuesFromLocalStorage();
    tasks.push(value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeValueFromLocalStorage(value) {
    let tasks = getValuesFromLocalStorage();
    tasks.forEach(function(task,index){
        if(task == value) {
            tasks.slice(index,1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearValuesFromLocalStorage() {
    localStorage.removeItem('tasks');
}

function displayTasks() {;
    let tasks = getValuesFromLocalStorage();
    tasks.forEach(function(task){
        let liElement = document.createElement('li');
        liElement.className = 'collection-item';
        liElement.appendChild(document.createTextNode(task));
        let link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"><i>';
        liElement.appendChild(link);
        taskList.appendChild(liElement);
    });
}