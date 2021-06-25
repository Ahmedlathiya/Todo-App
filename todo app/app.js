let ul = document.getElementById('list'); 

function addTodo (){
    let add = document.getElementById('todo_app');
    
    
/// create li tag 

    let li  = document.createElement('li');
    let liText  = document.createTextNode(add.value);
    li.appendChild(liText)
    
    
/// create delete button    
    
    add.value = " "
    let delet = document.createElement('button');
    let deleTex = document.createTextNode("Delete")
    delet.appendChild(deleTex)
    delet.setAttribute('class','btn')
    delet.setAttribute('onclick','deleteItem(this)')
    li.appendChild(delet)
    
    
    /// create Edit button
    
    let edit = document.createElement('button');
    let editText = document.createTextNode('Edit')
    edit.appendChild(editText)
    edit.setAttribute('class','btn')
    edit.setAttribute('onclick','editBtn(this)')
    
    
    li.appendChild(edit)
    ul.appendChild(li)
}
function deleteItem(e){
e.parentElement.remove()
}

function deleteAll(){
    list.innerHTML = ""

}
function editBtn(e){
let editValue = prompt("Enter Edit Value")
e.parentElement.firstChild.nodeValue = editValue
}


















