import './styles/reset.css';
import { createButton, createForm } from './modules/elements-creation';
import { createProject } from './modules/functionality';

const formContainer = document.getElementById('form-container');
const buttonsContainer = document.getElementById('buttons-container');

const addProject = createButton('add-button', 'Add Project');
addProject.addEventListener('click', () => {
  const form = createForm('project');
  formContainer.appendChild(form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    createProject(e.target.elements);
  });
});
buttonsContainer.appendChild(addProject);
