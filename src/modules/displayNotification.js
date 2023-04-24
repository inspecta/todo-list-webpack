const addTaskContainer = document.querySelector('.add-task');

const displayNotification = (message) => {
  const notificationContainer = document.createElement('div');
  notificationContainer.setAttribute('id', 'notification');
  addTaskContainer.appendChild(notificationContainer);
  notificationContainer.appendChild(document.createTextNode(message))
  notificationContainer.style.display = 'block';
  setTimeout(() => {
    notificationContainer.style.opacity = '0';
    setTimeout(() => {
      notificationContainer.style.display = 'none';
    }, 1000);
  }, 2000);
}

export default displayNotification;
