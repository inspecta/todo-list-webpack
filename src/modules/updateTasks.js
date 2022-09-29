import retrieveFromStorage from './retrieveFromStorage.js';
import displayTasks from './displayTasks.js';

const tasksListDisplay = document.querySelector('.display');

const updateTasks = (totalTasks) => {
  const kebabButtons = document.querySelectorAll('.fa-ellipsis-vertical');
  kebabButtons.forEach((kebabButton) => {
    kebabButton.addEventListener('click', () => {
      const editTaskId = Number(kebabButton.getAttribute('data-id'));
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

    /* kebabBtn.addEventListener('mouseout', () => {
      tasksListDisplay.innerHTML = '';
      displayTasks(totalTasks);
    }); */
  });
};
export default updateTasks;