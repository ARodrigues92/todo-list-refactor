const getCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Matches format of form by adding 0 before single digits
  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const saveObject = object => {
  const id = localStorage.length;
  localStorage.setItem(id, JSON.stringify(object));
};

const createTask = (project, projectId, data) => {
  const title = data[0].value;
  const description = data[1].value;
  const dueDate = data[2].value;
  const priority = data[3].value || 3;
  const notes = data[4].value;

  const creationDate = getCurrentDate();
  const complete = false;

  const newTask = {
    title,
    description,
    dueDate,
    creationDate,
    priority,
    notes,
    complete,
  };

  project.tasks.push(newTask);
  localStorage.setItem(projectId, JSON.stringify(project));
};

const createProject = data => {
  const title = data[0].value;
  const description = data[1].value;
  const dueDate = data[2].value;

  const creationDate = getCurrentDate();
  const tasks = [];

  const newProject = { title, description, dueDate, creationDate, tasks };
  saveObject(newProject);
};

const deleteTask = (projectId, taskIndex) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  project.tasks.splice(taskIndex, 1);
  localStorage.setItem(projectId, JSON.stringify(project));
};

const toggleComplete = (projectId, taskIndex) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  const task = project.tasks[taskIndex];
  if (task.complete) {
    task.complete = false;
  } else {
    task.complete = true;
  }
  project.tasks[taskIndex] = task;
  localStorage.setItem(projectId, JSON.stringify(project));
};

const editTask = (projectId, taskIndex, data) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  const task = project.tasks[taskIndex];
  task.title = data[0].value;
  task.description = data[1].value;
  task.dueDate = data[2].value;
  task.priority = data[3].value;
  task.notes = data[4].value;
  project.tasks[taskIndex] = task;
  localStorage.setItem(projectId, JSON.stringify(project));
};

const editProject = (projectId, data) => {
  const project = JSON.parse(localStorage.getItem(projectId));
  project.title = data[0].value;
  project.description = data[1].value;
  project.dueDate = data[2].value;
  localStorage.setItem(projectId, JSON.stringify(project));
};

const deleteProject = projectId => {
  localStorage.removeItem(projectId);
};

export {
  createTask,
  createProject,
  deleteTask,
  toggleComplete,
  editTask,
  editProject,
  deleteProject,
};
