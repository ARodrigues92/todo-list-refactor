import { createButtons } from './elements-creation';

const display = document.getElementById('display-area');

const renderProject = (key, project) => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('data-proj', key);
  projectDiv.classList.add('project');
  projectDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');

  titleP.innerText = `Title: ${project.title}`;
  descriptionP.innerText = `Description: ${
    project.description || 'No description'
  }`;
  creationP.innerText = `Creation date: ${project.creationDate}`;
  dueP.innerText = `Due date: ${project.dueDate || 'No due date'}`;

  projectDiv.append(titleP, descriptionP, creationP, dueP);
  return projectDiv;
};

const renderProjects = () => {
  for (let key = 0; key < localStorage.length; key += 1) {
    const project = JSON.parse(localStorage.getItem(key));
    const renderedProject = renderProject(key, project);
    const outerDiv = document.createElement('div');
    const deleteButton = createButtons('delete-button', 'Delete');
    deleteButton.setAttribute('data-proj', key);
    const editButton = createButtons('edit-button', 'Edit');
    editButton.setAttribute('data-proj', key);
    outerDiv.append(renderedProject, deleteButton, editButton);
    display.appendChild(outerDiv);
  }
};

export default renderProjects;
