const imageContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
    imageNum = 10;
    newImages();
})

function newImages(){
    for(index = 0; index < imageNum; index++){
        const imageEls = document.createElement("img");
        imageContainer.appendChild(imageEls);
        imageEls.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    }
}