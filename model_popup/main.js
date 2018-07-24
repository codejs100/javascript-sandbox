var model = document.querySelector('#simpleModel');
var modelBtn = document.querySelector('#modelBtn');
var closeBtn = document.querySelector('.closeBtn');


modelBtn.addEventListener('click',openModel);
closeBtn.addEventListener('click',closeModel);
window.addEventListener('click',closeModelWindow);

function openModel() {
    model.style.display = 'block';
}

function closeModel() {
    model.style.display = 'none';
}

function closeModelWindow(event) {
    if(event.target == model) {
        model.style.display = 'none';
    }
}