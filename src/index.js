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

/* Add a new task */
const addNewTask = () => {
  const taskDescription = document.querySelector('.input-task');
  const inputTask = document.querySelector('.fa-arrow-left');
  inputTask.addEventListener('click', () => {
    insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));
    tasksListDisplay.innerHTML = '';
    totalTasks = JSON.parse(retrieveFromStorage('todo'));
    displayTasks(totalTasks);
    taskDescription.value = '';
  });

  taskDescription.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      insertTask.addTask(taskDescription.value, false, (totalTasks.length + 1));
      tasksListDisplay.innerHTML = '';
      totalTasks = JSON.parse(retrieveFromStorage('todo'));
      displayTasks(totalTasks);
      taskDescription.value = '';
    }
  });
};

addNewTask();

/* Remove a task */
const removeTask = document.querySelectorAll('.fa-trash-can');
removeTask.forEach((remove) => {
  remove.addEventListener('click', () => {
    const getTaskId = Number(remove.getAttribute('data-id'));
    totalTasks = totalTasks.filter((task) => task.index !== getTaskId);
    totalTasks.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('todo', JSON.stringify(totalTasks));
    remove.parentElement.parentElement.remove();

    if (totalTasks.length === 0) {
      tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
    }
  });
});

/* Edit a task */
const kebabBtns = document.querySelectorAll('.fa-ellipsis-vertical');
kebabBtns.forEach((kebabBtn) => {
  kebabBtn.addEventListener('mousemove', () => {
    const editTaskId = Number(kebabBtn.getAttribute('data-id'));
    const editTaskDesc = document.querySelector(`.task-desc-${editTaskId}`);
    const updateTaskDesc = document.querySelector(`.edit-task-${editTaskId}`);
    updateTaskDesc.style.display = 'block';
    editTaskDesc.style.display = 'none';

    updateTaskDesc.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        totalTasks.forEach((task) => {
          if (task.index === editTaskId) {
            task.description = updateTaskDesc.value;
          }
        });
        totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));
        tasksListDisplay.innerHTML = '';
        totalTasks = JSON.parse(retrieveFromStorage('todo'));
        displayTasks(totalTasks);
      }
    });

    updateTaskDesc.addEventListener('change', () => {
      totalTasks.forEach((task) => {
        if (task.index === editTaskId) {
          task.description = updateTaskDesc.value;
        }
      });
      totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));
      tasksListDisplay.innerHTML = '';
      totalTasks = JSON.parse(retrieveFromStorage('todo'));
      displayTasks(totalTasks);
    });
  });
});
