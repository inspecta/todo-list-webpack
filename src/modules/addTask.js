import Tasks from './Tasks.js';
import retrieveFromStorage from './retrieveFromStorage.js';
import displayTasks from './displayTasks.js';
import displayNotification from './displayNotification.js';

const insertTask = new Tasks();
const tasksListDisplay = document.querySelector('.display');
const taskDescription = document.querySelector('.input-task');

let totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];

const createTask = () => {
  insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));
  tasksListDisplay.innerHTML = '';
  totalTasks = JSON.parse(retrieveFromStorage('todo'));
  totalTasks.forEach((i) => {
    displayTasks(i);
  });
  taskDescription.value = '';
  displayNotification('Task added successfully.');
};

const addTask = () => {
  const inputTask = document.querySelector('.fa-arrow-left');
  inputTask.addEventListener('click', () => {
    createTask();
  });

  taskDescription.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      createTask();
    }
  });
};

export default addTask;