const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm;
    
    if(h >= 12){
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    h = h % 12 || 12;

    hourEl.innerText = String(h).padStart(2, "0");
    minuteEl.innerText = String(m).padStart(2, "0");
    secondsEl.innerText = String(s).padStart(2, "0");

setTimeout(updateClock, 1000);

}

updateClock();