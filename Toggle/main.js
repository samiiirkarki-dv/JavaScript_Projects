let toggle = document.getElementById("img");

toggle.onclick = () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        toggle.src = "./sun.png";
    } else{
        toggle.src = "./moon.png";
    }
}