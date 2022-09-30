import removeTask from './removeTask.js';
import retrieveFromStorage from './retrieveFromStorage.js';

const display = document.querySelector('.display');

const displayTasks = (tasksObj) => {
  const tasksLists = document.createElement('ul');
  tasksLists.classList.add('tasks-list');
  display.appendChild(tasksLists);
  const taskDetails = document.createElement('li');
  taskDetails.classList.add('task-list-items');
  tasksLists.appendChild(taskDetails);
  taskDetails.innerHTML = `
    <div class='task'>
      <input type='checkbox' class='checkbox' value=''/>
      <input type='text' value='${tasksObj.description}' id='input-display-${tasksObj.index}' data-id='${tasksObj.index}' class='input-display'/>
    </div>
    <i class="fa-solid fa-trash-can" data-id="${tasksObj.index}" id="btn-${tasksObj.index}"></i>
  `;

  const removeBtn = document.getElementById(`btn-${tasksObj.index}`);
  removeBtn.addEventListener('click', () => {
    removeTask(tasksObj.index);
  });
  /* Update tasks */
  const editTasks = document.getElementById(`input-display-${tasksObj.index}`);
  editTasks.addEventListener('change', () => {
    const task = document.getElementById(`input-display-${tasksObj.index}`);
    let totalTasks = JSON.parse(retrieveFromStorage('todo'));
    totalTasks.forEach((item) => {
      if (item.index === tasksObj.index) {
        item.description = task.value;
      }
    });
    totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));
    display.innerHTML = '';
    totalTasks = JSON.parse(retrieveFromStorage('todo'));
    totalTasks.forEach((i) => {
      displayTasks(i);
    });
  });
};

export const footer = () => {
  const todoListContainer = document.querySelector('.todo-list');

  const lowDiv = document.createElement('div');
  lowDiv.classList.add('footer');
  todoListContainer.appendChild(lowDiv);
  lowDiv.innerHTML = `
      <p>Clear all completed.</p>
    `;
};

export default displayTasks;