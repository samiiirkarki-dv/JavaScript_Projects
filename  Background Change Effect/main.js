const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");
const arrow = document.getElementById("line")

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e) => {
    let boxWidth = e.pageX - leftSpace;
    imgWrap.style.width  = boxWidth + "px";
    arrow.style.left = boxWidth + "px";
}
