document.querySelector("#p").onclick = function (){
    if (document.querySelector('#taskInput').Value.length ==0){
        alert('please Enter a Task ')
    }else{
      document.querySelector('#task').innerHTML += `
      <div class="task" >
      <span id="taskname">
        ${document.querySelector('#taskInput').Value}
      </span>
       <button class = "delete">
        <i class="far fa-trash-alt>"></i>
       </button>
      </div> ` ;

      let current_tasks = document.querySelectorAll('.delete');
      for (let i = 0;i <current_tasks.length;i++){
        current_tasks[i].onclick = function() {
            this.parentNode.removeChild();
        }
      }
    }document.querySelector('taskInput').Value = '';
}