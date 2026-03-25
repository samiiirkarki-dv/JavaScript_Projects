const imageContainer = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
let currentImage = 1;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
    currentImage++;
    updateImages();
})

prevBtn.addEventListener("click", () => {
    currentImage--;
    updateImages();
})

updateImages();
function updateImages(){
    if(currentImage > imgsEl.length){
        currentImage = 1;
    } else if(currentImage < 1){
     currentImage = imgsEl.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImage - 1) * 500}px)`

    setTimeout(() => {
        currentImage++;
        updateImages();
    }, 3000);
}