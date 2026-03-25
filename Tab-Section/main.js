const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if(id){
    btns.forEach((btn) => {
        btn.classList.remove("live");
    })
    event.target.classList.add("live");
    articles.forEach((artical) => {
        artical.classList.remove("live");
    });
    const elemnet = document.getElementById(id);
    elemnet.classList.add("live");
  }
});

