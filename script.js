let tasks = [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    tasks = savedTasks ? JSON.parse(savedTasks) : [];
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (!taskList) return;

    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item${task.completed ? ' completed' : ''}`;
        li.innerHTML = `
            <span onclick="toggleComplete(${task.id})">${task.text}</span>
            <div class="task-actions">
                <button type="button" onclick="toggleComplete(${task.id})" class="complete-btn">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button type="button" onclick="deleteTask(${task.id})" class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    saveTasks();
}

function addTask() {
    const input = document.getElementById('taskInput');
    if (!input) return;

    const taskText = input.value.trim();
    if (!taskText) {
        alert('Please enter a task.');
        return;
    }

    tasks.unshift({
        id: Date.now(),
        text: taskText,
        completed: false,
    });

    input.value = '';
    renderTasks();
}

function toggleComplete(id) {
    tasks = tasks.map(task => (
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const phoneRegex = /^[0-9+\s()-]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    alert('Thanks for reaching out. This form is a lightweight demo, so no message was sent.');
    e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();

    const taskInput = document.getElementById('taskInput');
    if (taskInput) {
        taskInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    }

});


