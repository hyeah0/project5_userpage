const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDoArray = [];
const TODOARRAY_KEY = "toDoArray"


function handleInputSubmit(event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    const newToDoObject = {
        id: Date.now(),
        text : toDoInputValue,
    }
    toDoInput.value = "";
    toDoArray.push(newToDoObject);
    addTodo(newToDoObject);
    saveToDoArray();
}

function addTodo(toDoInputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = toDoInputValue.id;
    span.innerText = toDoInputValue.text;
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);   
    toDoList.appendChild(li);
    console.log(li);
    button.addEventListener("click",deleteToDo);
}

// object를 string 형식으로 변환
function saveToDoArray(){
    localStorage.setItem(TODOARRAY_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event){
    const deleteLi = event.target.parentElement;
    const deletedID = parseInt(deleteLi.id);
    deleteLi.remove();
    toDoArray = toDoArray.filter((toDo) => toDo.id !== deletedID);
    saveToDoArray();
}



toDoForm.addEventListener("submit",handleInputSubmit);

// 이미 저장된 todo 리스트 부르기
const savedToDo = localStorage.getItem(TODOARRAY_KEY);
// console.log(`saved ${savedToDo}`);
if(savedToDo !== null){
    const parsedToDoArray = JSON.parse(savedToDo);
    // console.log(parsedToDoArray);
    toDoArray = parsedToDoArray;
    parsedToDoArray.forEach(addTodo);
}


