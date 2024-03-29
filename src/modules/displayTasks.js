import removeTask from './removeTask.js';
import retrieveFromStorage from './retrieveFromStorage.js';
import checkCompleted from './checkCompleted.js';

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
        <input type='checkbox' class='checkbox' id='${tasksObj.index}'/>
        <input
          type='text'
          value='${tasksObj.description}'
          id='input-display-${tasksObj.index}'
          data-id='${tasksObj.index}'
          class='input-display'
        />
      </div>
      <i
        class="fa-solid fa-trash-can"
        data-id="${tasksObj.index}"
        id="btn-${tasksObj.index}"
      />
    `;

  const taskStatus = document.getElementById(tasksObj.index);
  const inputDisplay = document.getElementById(`input-display-${tasksObj.index}`);

  if (tasksObj.completed) {
    taskStatus.checked = true;
    inputDisplay.style.textDecoration = 'line-through';
  } else {
    taskStatus.checked = false;
    inputDisplay.style.textDecoration = 'none';
  }

  /* Completed tasks */
  const checkbox = document.getElementById(`${tasksObj.index}`);
  checkbox.addEventListener('change', () => {
    checkCompleted(tasksObj.index);
    if (taskStatus.checked) {
      inputDisplay.style.textDecoration = 'line-through';
      inputDisplay.style.color = 'hsl(180, 98%, 51%, 1)';
    } else {
      inputDisplay.style.textDecoration = 'none';
      inputDisplay.style.color = 'hsl(180, 98%, 51%, 0.7)';
    }
  });

  /* Remove tasks */
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

  const clearBtn = document.createElement('button');
  lowDiv.appendChild(clearBtn);
  clearBtn.id = 'clear-tasks';
  clearBtn.appendChild(document.createTextNode('Clear all completed'));

  const clearTasks = document.getElementById('clear-tasks');
  // console.log(completedTasks);
  clearTasks.addEventListener('click', () => {
    let totalTasks = JSON.parse(retrieveFromStorage('todo'));
    totalTasks = totalTasks.filter((task) => task.completed !== true);
    localStorage.setItem('todo', JSON.stringify(totalTasks));
    display.innerHTML = '';
    JSON.parse(retrieveFromStorage('todo'));
    totalTasks.forEach((i) => {
      displayTasks(i);
    });
  });
};

export default displayTasks;