import { createButtons } from './elements-creation';

const display = document.getElementById('display-area');

const expandTask = task => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');
  const priorityP = document.createElement('p');
  const notesP = document.createElement('p');

  titleP.innerText = `Title: ${task.title}`;
  descriptionP.innerText = `Description: ${task.description}`;
  creationP.innerText = `Creation Date: ${task.creationDate}`;
  dueP.innerText = `Due date: ${task.dueDate}`;
  priorityP.innerText = `Priority: ${task.priority}`;
  notesP.innerText = `Notes: ${task.notes}`;

  newDiv.append(titleP, descriptionP, creationP, dueP, priorityP, notesP);
  display.append(newDiv);
};

const renderTask = (task, index) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('box', 'task');
  taskDiv.setAttribute('data-task', index);

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
  project.tasks.forEach((task, index) => {
    const outerDiv = document.createElement('div');
    const renderedTask = renderTask(task, index);
    const deleteButton = createButtons('delete-button', 'Delete');
    deleteButton.setAttribute('data-task', index);
    outerDiv.append(renderedTask, deleteButton);
    display.appendChild(outerDiv);
  });
};

export { renderTasks, expandTask };
