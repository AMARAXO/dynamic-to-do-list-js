document.addEventListener('DOMContentLoaded', function (){
    loadTasks();
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
            removeButton.classList.add('remove-btn');

            removeButton.onclick = function() {
                li.remove();
                saveTasks();
            };
            li.appendChild(removeButton);
            taskList.appendChild(li);
            saveTasks();
            taskInput.value = '';
        }
    }

    // function saveTasks() {
    //     let taskList = document.getElementById('taskList');
    //     let tasks = [];
    //     taskList.querySelectorAll('li').forEach(function(li) {
    //         tasks.push(li.firstChild.textContent);
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
        
    // }

    function addTask(taskText, save = true) {
        // Task creation logic remains the same
    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // function loadTasks() {
    //     let tasks = JSON.parse(localStorage.getItem('tasks'));
    //     if (tasks) {
    //         tasks.forEach(function(taskText) {
    //             let li = document.createElement('li');
    //             li.textContent = taskText;

    //             let removeButton = document.createElement('button');
    //             removeButton.textContent = 'Remove';
    //             removeButton.classList.add('remove-btn');

    //             removeButton.onclick = function() {
    //                 li.remove();
    //                 saveTasks();
    //             };

    //             li.appendChild(removeButton);
    //             document.getElementById('taskList').appendChild(li);
    //         });
    //     }
    // }

    loadTasks();

    addButton.addEventListener('click', addTask);
//implements the enter key to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    addTask();
});