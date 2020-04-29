document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#ajax-form").onsubmit = () => {
        const request = new XMLHttpRequest();
        const param = document.querySelector('#param').value;

        request.open('POST', '/ajax');
        request.onload = () => {

            const data = JSON.parse(request.responseText);
            console.log(data);
            if(data.success)
            {
                const contents = `The result is ${data.result} .`
                document.querySelector("#result").innerHTML = contents;
            }
            else
                document.querySelector("#result").innerHTML = "Something went wrong";
        }

        data = new FormData();
        data.append('param', param)
    
        request.send(data);
        return false;
    }
});