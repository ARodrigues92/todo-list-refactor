import './styles/reset.css';
import './styles/main.css';
import { createButton, createForm } from './modules/elements-creation';
import { createTask, createProject } from './modules/functionality';
import { renderProjects } from './modules/render-projects';
import { clearAll } from './modules/helper-functions';
import { renderTasks, expandTask } from './modules/render-tasks';

const displayExpandedTaskPage = (project, task) => {
  clearAll();
  expandTask(task);
};

const displayTasksPage = projectId => {
  const project = JSON.parse(localStorage.getItem(projectId));
  clearAll();
  const addTaskButton = createButton('add-button', 'Add Task');
  addTaskButton.addEventListener('click', () => {
    const form = createForm('task');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createTask(project, projectId, e.target.elements);
      displayTasksPage(projectId);
    });
  });
  renderTasks(project);

  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach(taskDiv => {
    taskDiv.addEventListener('click', () => {
      const taskIndex = taskDiv.getAttribute('data-task');
      const task = JSON.parse(localStorage.getItem(projectId)).tasks[taskIndex];
      displayExpandedTaskPage(project, task);
    });
  });
};

const displayProjectsPage = () => {
  clearAll();
  const addProjectButton = createButton('add-button', 'Add Project');
  addProjectButton.addEventListener('click', () => {
    const form = createForm('project');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createProject(e.target.elements);
      displayProjectsPage();
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
