const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

// const li = document.createElement("li");
const TODOLIST = 'TODOLIST';

let Lists = [];

function saveList(value){

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = value.text;
    button.innerText = '❌';
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener('click',deleteList);
    li.setAttribute('id', value.id);
    // li.setAttribute();
    
}


// <li>
// <span><button>
//</li><>
//


function deleteList(e){

    console.log('삭제버튼을 클릭해씀',e.target.parentNode);
    // console.log(Lists[0].id);
    const targetNode = e.target.parentNode;
    targetNode.remove();
    Lists = Lists.filter(v => v.id !== Number(e.target.parentNode.id));
    console.log(Lists);
    localStorage.setItem(TODOLIST,JSON.stringify(Lists));
    //obj 삭제하기                         

}


let todoInputValue;

function InputSubmit(e){
    e.preventDefault();    
    
    todoInputValue = todoInput.value;
    todoInput.value=""; 
    // Lists.push(todoInputValue);
    const todoObj = {
        text: todoInputValue,
        id : Date.now()
    }

    Lists.push(todoObj);
    localStorage.setItem(TODOLIST,JSON.stringify(Lists));
    // 배열 저장이 먼저 -> List 로컬스토리지에 저장

    
    
    //JSON.stringify(Lists);
    saveList(todoObj);
 
    

}


todoForm.addEventListener('submit', InputSubmit);



console.log(localStorage.getItem(TODOLIST));
// console.log( JSON.stringify(Lists));


const getStorage = localStorage.getItem(TODOLIST);
if(getStorage){ // 배열에 저장 -> 다 꺼내주기?
    
    Lists = JSON.parse(getStorage);
    console.log('로컬스토리지에있는 리스트 꺼냄 ', Lists);
    // 이 리스트들을 하나씩꺼내 li태그에 넣어줌

    Lists.forEach(saveList);



}else{ // 없으면 

}