import './styles/reset.css';
import { createButton, createForm } from './modules/elements-creation';

const buttonsContainer = document.getElementById('buttons-container');

const addProject = createButton('add-button', 'Add Project');
addProject.addEventListener('click', () => {
  createForm('project');
});
buttonsContainer.appendChild(addProject);
