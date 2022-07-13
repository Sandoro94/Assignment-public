document.addEventListener("DOMContentLoaded", ()=>{

  const api = 'http://localhost:3000/';
  let toDoList = document.getElementById("todo-list");
  const list = document.createDocumentFragment();

  /*function fetchArray () { */
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
        let description = document.createElement('h2');
        let taskDone = document.createElement('h3')

        description.innerHTML = `${task.description}`;
        taskDone.innerHTML = `${task.done}`;

        li.appendChild(description);
        li.appendChild(taskDone);
        list.appendChild(li);
      });
    })
    
  /* .then (data => callbackData(data))*/ 
    .then (data => console.log(data))
 /* }; */

 /* function callbackData (data) {
    for (const task of data) {
      const listTask = document.createElement("li");
      const listContent = document.createElement("p");
      const listText = document.createTextNode(data);
      toDoList.appendChild(listTask);
      listTask.appendChild(listContent);
      listContent.appendChild(listText);
    }
  }
  */

fetchArray();
  
/*variables for creating list elements*/


/*GET request variable*/
/*
async function getList() {
    try {
    const response = await fetch(api, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response.json()
    .then(data => console.log(data));
  } catch (error) {
    console.log(error);
  }
};
getList();
function appendList() {
  try {
    getList();
    getList.forEach(data => {
      const listTask = document.createElement("li");
      const listContent = document.createElement("p");
      const listText = document.createTextNode(data);
      listTask;
      listContent;
      listText;
      toDoList.appendChild(listTask);
      listTask.appendChild(listContent);
      listContent.appendChild(listText);
    }
  )}
  catch (error) {console.log(error)}
}
appendList;
*/
/*POST request Variable*/
async function postList(input) {
  const data = {description: input, done: false};
  try{ 
  const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"},
    })
  return await response.json();
}
  catch (error) {
    console.log(error);
  }
};

/*  response.forEach(data => {
    const listTask = document.createElement("li");
    const listContent = document.createElement("p");
    const listText = document.createTextNode(data);
    listTask;
    listContent;
    listText;
  }); */


  
/*Function to create new list item*/
/*first finish the function, then put function inside of an event listener that listens to clicking the enter-list button and inputs the value in the myInput into the li*/
  
const addTask = function(value){
    const listTask = document.createElement("li");
    const listContent = document.createElement("p");
    let taskInput = document.getElementById("myInput").value;
    const listText = document.createTextNode(taskInput);
      if (taskInput.value === ""){
        alert("please type in a task")
        console.log("no task put in")
      }
      else{
          listTask;
          listContent;
          listText;
          toDoList.appendChild(listTask);
          listTask.appendChild(listContent);
          listContent.appendChild(listText);
          console.log("input was given")
      };
};

submitButton.addEventListener("click", addTask);
/*link function to button via addEventListener*/

/*link POST request to button*/


/*create DELETE request */

/*Link DELETE request to bin next to item*/

})