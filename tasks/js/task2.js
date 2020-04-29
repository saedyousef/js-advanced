document.addEventListener('DOMContentLoaded', () =>
{
    // Disable the submit button
    document.querySelector("#submit").disabled = true;
    
    document.querySelector("#task").onkeyup = () => 
    {   
        // Enable the submit button
        document.querySelector("#submit").disabled = false;
    }

    document.querySelector("#new-task").onsubmit = () =>
    {
        // Create new item for the list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector("#task").value;

        // Add the new item to the task list
        document.querySelector("#new-task").append(li);

        // Reset the input value
        document.querySelector("#task").value = '';
        
        // Disable the submit button again
        document.querySelector("#submit").disabled = true;

        // Prevent the from from submitting
        return false;
    };
});