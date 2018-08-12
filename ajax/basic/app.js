function loadData(e) {
    let display = document.querySelector('#output');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);


    // 1. method
    /*
    xhr.onload = function() {
        if(this.status == 200) {
            display.innerHTML = this.responseText;
        }
    }
    */
   // 2. Second Method
   xhr.onreadystatechange = function() {
       if(this.readyState == 4 && this.status == 200) {
           display.innerHTML = `This is from 2nd method ${this.responseText}`;
       }
   }

   /*
   readystate values
   0 - not initialized
   1 - server connection established
   2 - request recieved
   3 - processing request
   4 - request finished and reponse ready

   onload() -> triggers when readystate value is 4
   onProgress() -> triggers when progress, ready state is 3
   onerror() -> triggers when error happens
   */

    xhr.send();
    e.preventDefault();
}

// Add Event Listener
document.querySelector('#button').addEventListener('click', loadData);