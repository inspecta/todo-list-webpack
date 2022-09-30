const removeTask = (id) => {
  const tasksListDisplay = document.querySelector('.display');

  let totalTasks = JSON.parse(localStorage.getItem('todo'));

  const btn = document.getElementById(`btn-${id}`);

  totalTasks = totalTasks.filter((task) => task.index !== id);
  /* Re allocated indices */
  totalTasks.forEach((i, j) => {
    i.index = j;
  });

  totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));
  btn.parentElement.parentElement.remove();

  if (totalTasks.length === 0) {
    tasksListDisplay.innerHTML = '<hr/><p>No tasks available now!</p>';
  }
};

export default removeTask;