const api = 'http://localhost:3000';


//DELETE request

const deleteRequest = data => {
    fetch(`${api}/${data}`, {
        method: 'DELETE',
    });
    window.location.reload();
}
//GET request
const getList = () => { 
    fetch(api, {
        method: "GET",
        headers: {'Content-type': 'application/json'},
    })
    .then((response) => {
        return response.json()
    })
    .then (data => {
        for (let i=0; i<data.length; i++) {
            const todoList = document.getElementById("todo-list");
            const li = document.createElement('li');
            const task = document.createElement('label');
            const deleteBtn = document.createElement("img");

            todoList.appendChild(li);
            li.appendChild(task);

            li.setAttribute('id', data[i]._id);
            task.setAttribute('class', 'tasks');
            task.innerHTML = data[i].description;
            deleteBtn.className = 'far fa-bin-alt'
            
            deleteBtn.src = "trash-can.png";
            li.appendChild(deleteBtn);
            deleteBtn.setAttribute("style", "height: 20px", "width: 20px");
            deleteBtn.addEventListener('click', () => {
                deleteRequest(data[i]._id);
            })
        };
    })
    .catch(error => {
        console.log(error);
    });
};

//POST request

const postList = async data => {
    const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    });
     return await response.json();
};
const addTask = () => {
    let input = document.getElementById('myInput').value;
    if (input == '') {
        alert("Please insert Task!");}
    else{
        let input = document.getElementById('myInput').value;
        postList({description: input, done: false});
        document.getElementById('myInput').value = '';

        window.location.reload();
    };
    
};

getList();

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addTask)

