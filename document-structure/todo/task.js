const tasksList = document.getElementById('tasks__list')
const button = document.getElementById('tasks__form')
let area = document.getElementById('task__input')

function addToDo(textDo){
    tasksList.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">${textDo}</div>
    <a href="#" class="task__remove">
    &times;</a></div>`)
    let ael = tasksList.lastElementChild.lastElementChild
    ael.addEventListener('click', ()=>ael.parentElement.remove())
}
button.onsubmit = (e)=>{
    e.preventDefault()

    let textDo = area.value.trim()
    if (textDo!=''){
        addToDo(textDo)}
     
    area.value=''
}


