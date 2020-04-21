import './styles/reset.css';
import './styles/main.css';
import { createButton, createForm } from './modules/elements-creation';
import { createProject } from './modules/functionality';
import { renderProjects } from './modules/render';

const displayProjectsPage = () => {
  const addProjectButton = createButton('add-button', 'Add Project');
  addProjectButton.addEventListener('click', () => {
    const form = createForm('project');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createProject(e.target.elements);
      renderProjects();
    });
  });
  renderProjects();
};

displayProjectsPage();
