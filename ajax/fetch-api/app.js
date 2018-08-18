document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getAPI);


function getText(e) {
    fetch('data.txt')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.querySelector('#output').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();
}

function getJSON(e) {
    fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let output = '';
        data.forEach(element => {
           output += `<li>${element.title}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();    
}

function getAPI(e) {
    fetch('https://api.github.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let output = '';
        data.forEach(element => {
           output += `<li>${element.login}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();
}