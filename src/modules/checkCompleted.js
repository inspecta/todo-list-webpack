import retrieveFromStorage from './retrieveFromStorage.js';

const checkCompleted = (id) => {
  const totalTasks = JSON.parse(retrieveFromStorage('todo'));

  totalTasks.forEach((task) => {
    if (task.index === id) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem('todo', JSON.stringify(totalTasks));
  return JSON.parse(retrieveFromStorage('todo'));
};

export default checkCompleted;
