let http = new AjaxLib();

fnCallback = function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
}

// Get all Postes
// http.get("https://jsonplaceholder.typicode.com/posts", fnCallback);

// Get one Postes
//http.get("https://jsonplaceholder.typicode.com/posts/7", fnCallback);

// Post Data
// let data = {
//     title: "This is the new Title",
//     body: "This is the new body!!!."
// };
// http.post("https://jsonplaceholder.typicode.com/posts", data, fnCallback);

// Put Post
// const data = {
//     title: "Tnew Title",
//     body: "This is the new body"
// };
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, fnCallback);

// Delete one Postes
// http.delete("https://jsonplaceholder.typicode.com/posts/7", fnCallback);

