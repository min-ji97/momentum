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
    const input = document.createElement("input");


    input.setAttribute("type","checkbox");
    input.setAttribute("onchange","changeChecked(this)");
    input.setAttribute("class",value.id);

    input.checked = value.checked;
    span.innerText = value.text;
    
    // button.innerText = '❌';

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener('click',deleteList);
    span.addEventListener('click',pointText);
    li.setAttribute('id', value.id);

    if(input.checked === true){
        span.classList.add('checked');
    }else{
        span.classList.remove('checked');
    }
    
}


function isChecked(id, bool){
    function change(lists){
        if( lists.id === id){
            return lists.checked = bool;
        }
    }
    Lists.map(change);

    localStorage.setItem(TODOLIST,JSON.stringify(Lists));
}

function changeChecked(value) {

    const id = Number(value.className);
    let bool = null;
    const nextSpanTag = value.nextElementSibling;

    if(value.checked === true) {
        bool = true;
        isChecked(id,bool);
        nextSpanTag.classList.add('checked');
        if(nextSpanTag.classList.contains('strongText')){
            nextSpanTag.classList.remove('strongText');
        }

    }else{
        bool = false;
        isChecked(id,bool);
        nextSpanTag.classList.remove('checked');
    }
}

 
function pointText(e) {
    const tag = e.target;
    if(!tag.classList.contains('checked') ){
        if(tag.classList.contains('strongText')){
            tag.classList.remove('strongText');
        }else{
            tag.classList.add('strongText');
        }
    }

}


function deleteList(e){

    const targetNode = e.target.parentNode;
    targetNode.remove();
    Lists = Lists.filter(v => v.id !== Number(e.target.parentNode.id));
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
        id : Date.now(),
        checked : false
    }

    Lists.push(todoObj);
    localStorage.setItem(TODOLIST,JSON.stringify(Lists));
    // 배열 저장이 먼저 -> List 로컬스토리지에 저장

    
    
    //JSON.stringify(Lists);
    saveList(todoObj);
 
    

}


todoForm.addEventListener('submit', InputSubmit);


// console.log( JSON.stringify(Lists));


const getStorage = localStorage.getItem(TODOLIST);
if(getStorage){ // 배열에 저장 -> 다 꺼내주기?
    
    Lists = JSON.parse(getStorage);
    console.log('로컬스토리지에있는 리스트 꺼냄 ', Lists);
    // 이 리스트들을 하나씩꺼내 li태그에 넣어줌

    Lists.forEach(saveList);



}else{ // 없으면 

}