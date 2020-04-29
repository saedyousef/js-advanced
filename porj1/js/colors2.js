document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.color-change').forEach(button => {
        button.onclick = () => {
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    });
});