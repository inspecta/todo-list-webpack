import './style.css';
import updateTasks from './modules/updateTasks.js';
import retrieveFromStorage from './modules/retrieveFromStorage.js';
import displayTasks, { footer } from './modules/displayTasks.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';

const totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];

displayTasks(totalTasks);
footer();

const tasksListDisplay = document.querySelector('.display');

if (totalTasks.length === 0) {
  tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
}

/* Add a new task */
addTask();

/* Remove a task */
removeTask(totalTasks);

/* Edit a task */
updateTasks(totalTasks);
