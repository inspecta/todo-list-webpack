import './style.css';
import retrieveFromStorage from './modules/retrieveFromStorage.js';
import displayTasks, { footer } from './modules/displayTasks.js';
import addTask from './modules/addTask.js';

const totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];
const tasksListDisplay = document.querySelector('.display');

if (totalTasks.length === 0) {
  const noTasks = document.createElement('p');
  tasksListDisplay.appendChild(noTasks);
  noTasks.appendChild(document.createTextNode('No tasks available!'));
  noTasks.classList.add('no-tasks');
}

/* Add a new task */
addTask();

window.addEventListener('DOMContentLoaded', () => {
  totalTasks.forEach((i) => {
    displayTasks(i);
  });
  footer();
});
