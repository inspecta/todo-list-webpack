const tasksListDisplay = document.querySelector('.display');

const removeTasks = (totalTasks) => {
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
};

export default removeTasks;