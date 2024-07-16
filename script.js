document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskList = document.getElementById('task-list')
//creates function to add a task
    function addTask (){
        let taskText = taskInput.value.trim()
        if (taskText === ''){
            alert('Please enter a task')
        }else{
            let li = document.createElement('li')
            li.textContent = taskText
            
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.onclick = function() {
                li.remove();
            };
            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
    addButton.addEventListener('click', addTask);
//implements the enter key to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    addTask();
});