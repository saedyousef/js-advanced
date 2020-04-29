document.addEventListener('DOMContentLoaded', () =>
{
    // Initilize the socket 
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    // When connected, configure buttons
    socket.on('connect', () => {

        // Each button should emit a 'submit vote' event
        document.querySelectorAll('button').forEach(button => {
            button.onclick = () => {
                const selection = button.dataset.vote;
                socket.emit('submit vote', {'selection':selection});
            };
        });
    });

    socket.on('votes total', function(data)
    {
        // Getting this error: Uncaught TypeError: Cannot set property 'innerHTML' of null
        document.querySelector("#yes").innerHTML = data.yes;
        document.querySelector("#no").innerHTML = data.no;
        document.querySelector("#maybe").innerHTML = data.maybe;
    });

    return false;
});