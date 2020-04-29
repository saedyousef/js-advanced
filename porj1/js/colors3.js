document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#color-change').onchange = function() {
        document.querySelector("#hello").style.color = this.value;
    }
});