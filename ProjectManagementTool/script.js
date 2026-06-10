document.getElementById("addBtn").addEventListener("click",function(){
    let task =
    document.getElementById("taskInput").value;
    let date = document.getElementById("dueDate").value;
    let priority =
      document.getElementById("priority").value;
      let assignedTo =
      document.getElementById("assignedTo").value;
    if(task.trim() === ""){
        alert(" Please Enter a task");
        return;
    }
        let div =
        document.createElement("div");
        div.className ="task";
        div.innerHTML = 
         "<h3>"+task + "</h3>"+
         "<p><b>Assigned To:</b>"+ assignedTo +"</p>"+
         "<p><b>Due Date :</b>"+ date +"</p>"+
            "<p><b>Priority :</b>"+ priority +"</p>"+
            "<p class='Status'>Status : Pending</p>"+
            "<p><b>Assigned To:</b>"+ assignedTo +"</p>"+
        "<button onclick='completeTask(this)'>Complete</button>"+
        "<button onclick='deleteTask(this)'>Delete</button>";
        "<input type='text' placeholder='Add Comment'>" +
        "<button>Add Comment</button>";
        document.getElementById("taskList").appendChild(div);

        document.getElementById("taskInput").value = "";
        document.getElementById("dueDate").value = "";
    });
    function completeTask(btn){
        let taskDiv = btn.parentElement;
        taskDiv.style.backgroundColor = "lightgreen";
        taskDiv.querySelection(".status").innerHTML
        =
        "Status:Completed";
        btn.innerHTML = "Completed";
}
function deleteTask(btn){
    btn.parentElement.remove();
}