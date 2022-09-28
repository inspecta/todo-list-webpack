import './style.css';

const todoListContainer = document.querySelector('.todo-list');

const tasks = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to market',
    completed: true,
    index: 3,
  },
];

const input = document.createElement('div');
input.classList.add('add-task');
todoListContainer.appendChild(input);
input.innerHTML = '<input type=\'text\' placeholder=\'Add to your list...\' class=\'input-task\'/>';

const tasksLists = document.createElement('ul');
tasksLists.classList.add('tasks-list');
todoListContainer.appendChild(tasksLists);

tasks.forEach((task) => {
  const taskDetails = document.createElement('li');
  tasksLists.appendChild(taskDetails);
  taskDetails.innerHTML = `
    <hr/>
    <div class='task'>
      <input type='checkbox' class='checkbox' value=''/>
      <p>${task.description}</p>
    </div>
  `;
});

const lowDiv = document.createElement('div');
lowDiv.classList.add('footer');
todoListContainer.appendChild(lowDiv);
lowDiv.innerHTML = `
  <hr/>
  <p>Clear all completed.</p>
`;
