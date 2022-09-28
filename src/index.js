import './style.css';

import Tasks from './modules/Tasks.js';
import retrieveFromStorage from './modules/retrieveFromStorage.js';
import displayTasks, { footer } from './modules/displayTasks.js';

const insertTask = new Tasks();

let totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];

displayTasks(totalTasks);
footer();

const tasksListDisplay = document.querySelector('.display');

if (totalTasks.length === 0) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
}

const taskDescription = document.querySelector('.input-task');
const inputTask = document.querySelector('.fa-arrow-left');
inputTask.addEventListener('click', () => {
  insertTask.addTask(taskDescription.value, false, 1);
  tasksListDisplay.innerHTML = '';
  totalTasks = JSON.parse(retrieveFromStorage('todo'));
  displayTasks(totalTasks);
  taskDescription.value = '';
});

taskDescription.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    insertTask.addTask(taskDescription.value, false, 1);
    tasksListDisplay.innerHTML = '';
    totalTasks = JSON.parse(retrieveFromStorage('todo'));
    displayTasks(totalTasks);
    taskDescription.value = '';
  }
});