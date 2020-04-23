import { clearDisplay } from './helper-functions';

const display = document.getElementById('display-area');

const renderTask = task => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('box');

  const titleP = document.createElement('p');
  const dueP = document.createElement('p');
  const completeP = document.createElement('p');
  const completeSpan = document.createElement('span');

  titleP.innerText = `Title: ${task.title}`;
  dueP.innerText = `Due date: ${task.dueDate}`;

  if (task.priority === '1') {
    taskDiv.style.borderColor = 'red';
  } else if (task.priority === '2') {
    taskDiv.style.borderColor = 'orange';
  } else {
    taskDiv.style.borderColor = 'green';
  }

  completeP.innerText = 'Completed: ';
  completeP.appendChild(completeSpan);
  if (task.complete) {
    completeSpan.innerText = 'Yes';
    completeSpan.style.color = 'green';
  } else {
    completeSpan.innerText = 'No';
    completeSpan.style.color = 'red';
  }

  taskDiv.append(titleP, dueP, completeP);

  return taskDiv;
};

const renderTasks = project => {
  clearDisplay();
  project.tasks.forEach(task => {
    const renderedTask = renderTask(task);
    display.appendChild(renderedTask);
  });
};

export { renderTasks };
