const posts = [
    { title: 'Post -1', body: 'This is the body -1.' },
    { title: 'Post -2', body: 'This is the body -2.' },
    { title: 'Post -3', body: 'This is the body -3.' },
];

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let err = false;
            if(err) {
                reject('Some error occurred!');
            } else {
                posts.push(post);
                resolve(); 
            }
        }, 2000);
    })
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title} - ${post.body}</li>`
        });
        document.querySelector('#display').innerHTML = output;
    },1000);
}

createPost({
    title: 'Post  -4',
    body: 'This is body 4'
}).then(getPosts)
.catch(function(err) {
    console.log(err);
});
