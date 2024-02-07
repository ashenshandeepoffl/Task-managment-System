// Task Management System

// Sample data
let tasks = [
    { id: 1, text: 'Default Example Tasks ⚙️', completed: false},
    { id: 2, text: 'Complete assignment', completed: false },
    { id: 3, text: 'Read a book', completed: true },
    { id: 4, text: 'Go for a run', completed: false },
  ];
  
  // Function to render tasks
  const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleTaskCompletion(task.id));
  
      li.textContent = task.text;
      li.style.textDecoration = task.completed ? 'line-through' : 'none';
  
      li.appendChild(checkbox);
      taskList.appendChild(li);
    });
  };
  
  // Function to add a new task
  const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value.trim();
  
    if (newTaskText) {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
  
      tasks.push(newTask);
      renderTasks();
      taskInput.value = '';
    }
  };
  
  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    tasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  
    renderTasks();
  };
  
  // Function to clear all tasks
  const clearAllTasks = () => {
    tasks = [];
    renderTasks();
  };
  
  // Function to update live calendar
  const updateLiveCalendar = () => {
    const calendarElement = document.getElementById('calendar');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    calendarElement.textContent = formattedDate;
  };
  
  // Function to update current time
  const updateCurrentTime = () => {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date().toLocaleTimeString('en-US');
    currentTimeElement.textContent = currentTime;
  };
  
  // Initial rendering and updates
  renderTasks();
  updateLiveCalendar();
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); // Update current time every second
  