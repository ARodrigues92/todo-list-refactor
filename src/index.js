import './styles/reset.css';
import './styles/main.css';
import {
  createButton,
  createForm,
  fillForm,
} from './modules/elements-creation';
import {
  createTask,
  createProject,
  deleteTask,
  toggleComplete,
  editTask,
  editProject,
  deleteProject,
} from './modules/functionality';
import renderProjects from './modules/render-projects';
import { clearAll } from './modules/helper-functions';
import { renderTasks, expandTask } from './modules/render-tasks';

const displayExpandedTaskPage = (projectId, task, taskIndex) => {
  clearAll();
  expandTask(task, taskIndex);

  const backButton = createButton('back-button', 'Back');
  backButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    displayTasksPage(projectId);
  });

  const editTaskButton = document.getElementById('edit-button');
  editTaskButton.addEventListener('click', () => {
    const form = createForm('task');
    fillForm('task', task);
    form.addEventListener('submit', e => {
      e.preventDefault();
      editTask(projectId, taskIndex, e.target.elements);
      displayExpandedTaskPage(projectId, task, taskIndex);
    });
  });
};

const displayTasksPage = projectId => {
  const project = JSON.parse(localStorage.getItem(projectId));
  clearAll();
  renderTasks(project);

  const backButton = createButton('back-button', 'Back');
  backButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    displayProjectsPage();
  });

  const addTaskButton = createButton('add-button', 'Add Task');
  addTaskButton.addEventListener('click', () => {
    const form = createForm('task');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createTask(project, projectId, e.target.elements);
      displayTasksPage(projectId);
    });
  });

  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach(taskDiv => {
    taskDiv.addEventListener('click', () => {
      const taskIndex = taskDiv.getAttribute('data-task');
      const task = JSON.parse(localStorage.getItem(projectId)).tasks[taskIndex];
      displayExpandedTaskPage(projectId, task, taskIndex);
    });
  });

  const deleteTaskButtons = document.querySelectorAll('.delete-button');
  deleteTaskButtons.forEach(deleteTaskButton => {
    deleteTaskButton.addEventListener('click', () => {
      const taskIndex = deleteTaskButton.getAttribute('data-task');
      deleteTask(projectId, taskIndex);
      displayTasksPage(projectId);
    });
  });

  const completeButtons = document.querySelectorAll('.complete-button');
  completeButtons.forEach(completeButton => {
    completeButton.addEventListener('click', () => {
      const taskIndex = completeButton.getAttribute('data-task');
      toggleComplete(projectId, taskIndex);
      displayTasksPage(projectId);
    });
  });
};

const displayProjectsPage = () => {
  clearAll();
  renderProjects();

  const addProjectButton = createButton('add-button', 'Add Project');
  addProjectButton.addEventListener('click', () => {
    const form = createForm('project');
    form.addEventListener('submit', e => {
      e.preventDefault();
      createProject(e.target.elements);
      displayProjectsPage();
    });
  });

  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach(projectDiv => {
    projectDiv.addEventListener('click', () => {
      const projectId = projectDiv.getAttribute('data-proj');
      displayTasksPage(projectId);
    });
  });

  const deleteProjectButtons = document.querySelectorAll('.delete-button');
  deleteProjectButtons.forEach(deleteProjectButton => {
    deleteProjectButton.addEventListener('click', () => {
      const projectId = deleteProjectButton.getAttribute('data-proj');
      deleteProject(projectId);
      displayProjectsPage();
    });
  });

  const editProjectButtons = document.querySelectorAll('.edit-button');
  editProjectButtons.forEach(editProjectButton => {
    editProjectButton.addEventListener('click', () => {
      const projectId = editProjectButton.getAttribute('data-proj');
      const project = JSON.parse(localStorage.getItem(projectId));
      const form = createForm('project');
      fillForm('project', project);
      form.addEventListener('submit', e => {
        e.preventDefault();
        editProject(projectId, e.target.elements);
        displayProjectsPage();
      });
    });
  });
};

displayProjectsPage();
