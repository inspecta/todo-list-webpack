import Tasks from './Tasks.js';
import retrieveFromStorage from './retrieveFromStorage.js';
import displayTasks from './displayTasks.js';

const insertTask = new Tasks();
const tasksListDisplay = document.querySelector('.display');

let totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];

const addTask = () => {
  const taskDescription = document.querySelector('.input-task');
  const inputTask = document.querySelector('.fa-arrow-left');
  inputTask.addEventListener('click', () => {
    insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));
    tasksListDisplay.innerHTML = '';
    totalTasks = JSON.parse(retrieveFromStorage('todo'));
    totalTasks.forEach((i) => {
      displayTasks(i);
    });
    taskDescription.value = '';
  });

  taskDescription.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));
      tasksListDisplay.innerHTML = '';
      totalTasks = JSON.parse(retrieveFromStorage('todo'));
      totalTasks.forEach((j) => {
        displayTasks(j);
      });
      taskDescription.value = '';
    }
  });
};

export default addTask;