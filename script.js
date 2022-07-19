document.addEventListener("DOMContentLoaded", ()=>{
  const toDoList = document.getElementById("todo-list");
  const api = 'http://localhost:3000/';
  let listTask = document.getElementsByClassName("list-item");
  /*GET request*/
  fetch(api, {
          method: "GET",
          headers: {"Content-Type": "application/json"},
      })
      .then ((response) => {
        return response.json()
      })
      .then((data) => {
        let myList = data;
        myList.map(function(task){
          let li = document.createElement('li');
          listTask=li;
          listTask.className= "list-item";
          let taskDescription = document.createElement('p');
          let taskDone = false;

          taskDescription.innerHTML = `${task.description}`;
          taskDone.innerHTML = `${task.done}`;

          listTask.appendChild(taskDescription);
          toDoList.appendChild(listTask);

          let span = document.createElement("SPAN");
          span.className = "delete";
          let deleteBtn = document.createElement("img");
          deleteBtn.className= "bin"
          deleteBtn.src = "trash-can.png";
          deleteBtn.setAttribute("style", "height: 20px", "width: 20px");
          deleteBtn.setAttribute("id", "deleteButton");
          span.appendChild(deleteBtn);
          listTask.appendChild(span);
          deleteBtn.addEventListener("click", () => {
            toDoList.removeChild(listTask);
            
            //below the DELETE request. Test with POST request.
            fetch(api, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: null
            }); 
          })
        });
      });


      /* Prullenbak toevoegen, daarna removeChild-eventlistener aan prullenbak toevoegen, daarna POST-request toevoegen*/
submitButton.addEventListener("click", () => {
  let taskInput = document.getElementById("myInput").value;
  if (taskInput == '') {
    alert("Please insert Task!");
  } 
  else {
    
    let li = document.createElement("li");
    listTask=li;
    listTask.className= "list-item";
    let taskDescription = document.createElement('p');
    let taskDone = false;
    taskDescription.innerHTML = taskInput;

    listTask.appendChild(taskDescription);
    toDoList.appendChild(listTask);
    document.getElementById("myInput").value = "";
    let span = document.createElement("SPAN");
    
    const data = {description: taskInput, taskDone: false};
    fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"}
      });

    span.className = "delete";
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "trash-can.png";
    deleteBtn.setAttribute("style", "height: 20px", "width: 20px");
    span.appendChild(deleteBtn);
    listTask.appendChild(span);

    deleteBtn.addEventListener("click", () => {
      toDoList.removeChild(listTask);
      fetch(api, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: null
            });
    })

    };
  });
})
      
      /*postTask(taskInput);*/
     /* document.getElementById("todo-list").appendChild(li);
      
      
      deleteBtn.addEventListener("click", () => {
        console.log("Deleted");
      });  
      };
/*
    const data = {description: taskInput, taskDone: false};
    try{ 
    const response = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"}
      })
    return await response.json();
  }
    catch (error) {
      console.log(error);
    } */
  //});

        /*POST request Variable*/


/*function appendToList(){
    let taskInput = document.getElementById("myInput").value;
    let text = document.createTextNode(taskInput);
    if (taskInput === '') {
      alert("Please insert Task!");
    } 
    else {
      const li = document.createElement("li");
      li.appendChild(text);
      document.getElementById("todo-list").appendChild(li);
      document.getElementById("myInput").value = "";
      postTask(taskInput);
      let span = document.createElement("SPAN");
      span.className = "delete";
      let deleteBtn = document.createElement("img");
      deleteBtn.src = "trash-can.png";
      deleteBtn.setAttribute("style", "height: 20px", "width: 20px");
      span.appendChild(deleteBtn);
      li.appendChild(span); 
      };
    deleteBtn.addEventListener("click", () => {
      console.log("Deleted");
    })  
  }; */

 /* fetchArray(); */



    


  /*create DELETE request */

  /*Link DELETE request to bin next to item*/

  

//})