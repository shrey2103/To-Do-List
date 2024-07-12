let listContainer=document.getElementById('list-container')
let input=document.getElementById('input-box')

function addTask(){
    if(input.value==='')
        alert("add your task")
    else{
        let task=document.createElement('li')
        task.textContent=input.value
        listContainer.appendChild(task)

        let span=document.createElement('span')
        span.textContent='\u00d7'
        task.appendChild(span)
    }
    input.value=''
    saveData()
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

//local storage

function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem('tasks')
}

showData()