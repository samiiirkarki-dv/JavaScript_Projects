let toastBox = document.getElementById("toast-box");

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');

    // Message
    toast.innerHTML = msg;

    // Progress line
    let progress = document.createElement('div');
    progress.classList.add('toast-progress');
    toast.appendChild(progress);

    toastBox.appendChild(toast);

    // Animate progress line
    setTimeout(() => {
        progress.style.width = '0%';
    }, 50); // small delay so CSS transition works

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}