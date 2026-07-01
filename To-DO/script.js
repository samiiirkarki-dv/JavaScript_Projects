const input = document.getElementById("input");
const pushButton = document.getElementById("push");
const tasks = document.getElementById("tasks");

pushButton.onclick = function () {
  if (input.value.length == "") {
    alert("Please Enter a Task");
  } else {
    tasks.innerHTML += `
      <div class="task">
        <span id="taskname">
            ${input.value}
        </span>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
     
        
        `;

    const current_Task = document.querySelectorAll(".delete");
    for (let i = 0; i < current_Task.length; i++) {
      current_Task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    const task = document.querySelectorAll('.task');
    for(let i = 0; i < task.length; i++){
        task[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    input.value = '';
  }
};
