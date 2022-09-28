import retrieveFromStorage from './retrieveFromStorage.js';

const totalTasks = JSON.parse(retrieveFromStorage('todo')) || [];

class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask = (formDesc, formCompleted, formIndex) => {
    const newTask = new Tasks(formDesc, formCompleted, formIndex);
    totalTasks.push(newTask);
    localStorage.setItem('todo', JSON.stringify(totalTasks));
  }
}

export default Tasks;