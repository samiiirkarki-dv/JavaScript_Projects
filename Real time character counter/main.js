const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}