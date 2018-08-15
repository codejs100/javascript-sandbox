function getJokes(e) {
    const number = document.querySelector('#number').value || 1;

    const xhr = new XMLHttpRequest();

    xhr.open('GET' ,`http://api.icndb.com/jokes/random/${number}` ,true);
    xhr.onload = function() {
        if(this.status == 200) {
            let response = JSON.parse(this.responseText);
            if(response.type == "success") {
                let output = '';
                response.value.forEach(res => {
                    output += `<li>${res.joke}</li>`;
                });
                document.querySelector('.jokes').innerHTML = output;
            }
        }
    }
    xhr.send();
    e.preventDefault();
}

document.querySelector('.get-jokes').addEventListener('click', getJokes);