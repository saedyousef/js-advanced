// Start with first post
let counter = 1;
const quantity = 20;

// When DOM load, render the first 20 posts.
document.addEventListener("DOMContentLoaded", load);

// If scrolled to bottom, load the next 20 posts.
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        load();
}

document.addEventListener('click', event => {
    const element = event.target;
    if(element.className === 'hide')
    {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
        });
    }
});

// Load next set of posts
function load() {
    // Set start and end post
    const start = counter;
    const end = start + quantity -1;
    counter = end +1;

    // Open new request to get new posts.
    const request = new XMLHttpRequest();
    request.open('POST', '/posts');
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        data.forEach(add_post);
    }

    // Add start and end points to request data.
    const data = new FormData();
    data.append('start', start);
    data.append('end', end);

    request.send(data);
}

const post_template = Handlebars.compile(document.querySelector('#post').innerHTML);
function add_post(contents) {
    // Create new post
    console.log(post_template);
    const post = post_template({'contents' : contents})
    
    // Add post to DOM.
    document.querySelector('#posts').innerHTML += post;
}