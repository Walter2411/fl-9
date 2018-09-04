const rootNode = document.getElementById('root');

let toDoCatList = document.createElement('div');
toDoCatList.className = 'toDoCatList';

let title=document.createElement('h1');
title.className='body_title';
title.innerHTML = 'TODO Cat List';

let inputForm = document.createElement('div');
inputForm.className='input_form';


let addNewAction = document.createElement('input');
addNewAction.className='body_input';
addNewAction.placeholder='Add  New Action'
addNewAction.type='text';
addNewAction.id='input_active'

let addBoxButton = document.createElement('button');
addBoxButton.className='material-icons';
addBoxButton.innerHTML='add_box';
addBoxButton.id='active_button';

let itemList = document.createElement('ul');
itemList.className='item_list';

let footerImage = document.createElement('img');
footerImage.src='assets/img/cat.png';

rootNode.appendChild(
    document.body.appendChild(toDoCatList),
    toDoCatList.append(title),
    toDoCatList.append(inputForm),
    toDoCatList.append(itemList),
    inputForm.append(addNewAction),
    inputForm.append(addBoxButton),  
    toDoCatList.append(footerImage)
   
);

function activeButton(){
    const lengthNumber = 0;
    let active_button = document.getElementById('active_button')
    active_button.disabled=this.value.trim().length===lengthNumber;
}
let input_active=document.getElementById('input_active');
input_active.addEventListener('input', activeButton,false);
activeButton.call(input_active);


let active_button = document.getElementById('active_button');
active_button.onclick =function addAction(){
    const inputValue=0;
    let getImputValue=document.getElementsByClassName('body_input')[inputValue].value;
    let itemListItem = document.createElement('li');
    let chekBox = document.createElement('button');
    let deleteIcon = document.createElement('button');
    deleteIcon.className='material-icons';
    deleteIcon.innerHTML='delete';
    deleteIcon.id='delete_icon'
    chekBox.className='material-icons';
    chekBox.innerHTML='check_box_outline_blank';
    chekBox.type='checkbox';
    chekBox.id='checkbox_icon';
    itemListItem.innerHTML = getImputValue;
    itemList.append(itemListItem);
    itemListItem.prepend(chekBox);
    itemListItem.append(deleteIcon)
}
let deleteIcon=document.getElementById('delete_icon');
let deleteItem = document.getElementsByTagName('li')
deleteIcon=deleteItem;

deleteIcon.onclick=function deleteButton(){
    let deleteItem = document.getElementsByTagName('li')
    document.body.removeChild(deleteItem);
}


