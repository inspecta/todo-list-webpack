import displayNotification from "./displayNotification";

const removeTask = (id) => {
  let totalTasks = JSON.parse(localStorage.getItem('todo'));

  const btn = document.getElementById(`btn-${id}`);

  totalTasks = totalTasks.filter((task) => task.index !== id);
  /* Re allocated indices */
  totalTasks.forEach((i, j) => {
    i.index = j;
  });

  totalTasks = localStorage.setItem('todo', JSON.stringify(totalTasks));
  btn.parentElement.parentElement.remove();

  displayNotification('Task removed successfully.');
};

export default removeTask;