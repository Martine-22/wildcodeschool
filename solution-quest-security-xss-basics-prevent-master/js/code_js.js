const input = document.getElementById("token-question");
const log = document.getElementById("token-answer");

input.addEventListener("input", updateValue);

function updateValue(e) {
    //log.innerHTML = e.target.value;
    log.textContent = e.target.value + "javascript inline desactive ! ";
}