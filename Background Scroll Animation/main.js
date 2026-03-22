const bgImageEl = document.getElementById("bg-image");
window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage(){
    bgImageEl.style.opacity = 1 -  window.pageYOffset / 900;
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

const btn = document.getElementById("btn");

btn.onclick = () => {
    document.body.classList.toggle("active");
}

