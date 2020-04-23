import './styles/reset.css';
import './styles/main.css';
import { createButton, createForm } from './modules/elements-creation';
import { createTask, createProject } from './modules/functionality';
import { renderProjects } from './modules/render-projects';
import {
  clearButtonsContainer,
  clearDisplay,
} from './modules/helper-functions';
import { renderTasks } from './modules/render-tasks';

const displayTasksPage = projectId => {
  const project = JSON.parse(localStorage.getItem(projectId));
  clearButtonsContainer();
  clearDisplay();
  const addTaskButton = createButton('add-button', 'Add Task');
  addTaskButton.addEventListener('click', () => {
    const form = createForm('task');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createTask(project, projectId, e.target.elements);
      renderTasks(project);
    });
  });
  renderTasks(project);
};

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

  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach(projectDiv => {
    projectDiv.addEventListener('click', () => {
      const projectId = projectDiv.getAttribute('data-proj');
      displayTasksPage(projectId);
    });
  });
};

displayProjectsPage();
