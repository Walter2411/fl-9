const rootNode = document.getElementById('root');
const addPage = document.getElementById('add_page');
const myStorage = window.localStorage;
const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let title = document.createElement('h1');
title.innerHTML = 'Simple TODO Aplication'
let add_btn = document.getElementById('add_btn');
add_btn.onclick= function add() { 
    window.location.hash ='/add'; 
    window.addEventListener('hashchange' ,function(e){
    if(location.href==='http://127.0.0.1:5500/homework/index.html#/add'){
    rootNode.style.display='none';
    addPage.style.display='block'
}else if(location.href==='http://127.0.0.1:5500/homework/index.html'){
    rootNode.style.display='block'
    addPage.style.display='none'
        }
    });
}
let save_btn = document.getElementById('save_btn');
save_btn.onclick = function save(){
    let checkBtn = document.createElement('img');
    checkBtn.src = 'assets/img/todo-s.png'
    checkBtn.id = 'check_btn';
    let itemListItem = document.createElement('li');
    itemListItem.id='items'
    let deleteBtn = document.createElement('img');
    deleteBtn.src = 'assets/img/remove-s.jpg'
let input_field = document.getElementById('input_field')
    itemListItem.innerHTML = input_field.value;
    itemListItem.prepend(checkBtn);
    itemListItem.append(deleteBtn);
let list_item = document.getElementById('list_item')
    list_item.appendChild(itemListItem);
    
    checkBtn.onclick = function (){ 
    checkBtn.src ='assets/img/done-s.png';
    list_item.append(this.parentNode);
    }
    window.history.back();
    
    deleteBtn.onclick = function () {
        this.parentNode.remove();
    }
    todoItems.push({
        isDone: false, id: 12345, description: input_field.value
    })
    let sTodoItems = JSON.stringify(todoItems);
    localStorage.setItem('myKey', sTodoItems);
       
}
localStorage.myKey;
let rTodoItems = JSON.parse(localStorage['myKey']);
let cancel_btn = document.getElementById('cancel_btn');
cancel_btn.onclick = function(){
    window.history.back();
}


