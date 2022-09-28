const displayTasks = (tasksArray) => {
  const display = document.querySelector('.display');

  const tasksLists = document.createElement('ul');
  tasksLists.classList.add('tasks-list');
  display.appendChild(tasksLists);

  tasksArray.forEach((task) => {
    const taskDetails = document.createElement('li');
    tasksLists.appendChild(taskDetails);
    taskDetails.innerHTML = `
    <hr/>
    <div class='task'>
      <input type='checkbox' class='checkbox' value=''/>
      <p>${task.description}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can"></i>
    </div>
  `;
  });
};

export const footer = () => {
  const todoListContainer = document.querySelector('.todo-list');

  const lowDiv = document.createElement('div');
  lowDiv.classList.add('footer');
  todoListContainer.appendChild(lowDiv);
  lowDiv.innerHTML = `
      <hr/>
      <p>Clear all completed.</p>
    `;
};

export default displayTasks;