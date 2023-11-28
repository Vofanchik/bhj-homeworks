const tasksList = document.getElementById('tasks__list')
const button = document.getElementById('tasks__form')
let area = document.getElementById('task__input')

function addToDo(textDo){
    let divel = document.createElement('div')
    divel.classList.add('task')
    let divtitle = document.createElement('div')
    divtitle.classList.add('task__title')
    divtitle.innerText = textDo
    let ael = document.createElement('a')
    ael.setAttribute('href','#')
    ael.classList.add('task__remove')
    ael.innerHTML = '&times;'
    divel.appendChild(divtitle)
    divel.appendChild(ael)
    tasksList.appendChild(divel)
    ael.addEventListener('click', ()=>ael.parentElement.remove())
}
button.onsubmit = (e)=>{
    e.preventDefault()

    let textDo = area.value.trim()
    if (textDo==''){}
    else {
        addToDo(textDo)
    } 
    area.value=''
}


