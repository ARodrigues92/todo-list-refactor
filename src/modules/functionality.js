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

const createTask = (projectId, data) => {
  const title = data[0].value;
  const description = data[1].value || 'No description provided';
  const dueDate = data[2].value || 'Due date not set';
  const priority = data[3].value || 3;
  const notes = data[4].value;

  const creationDate = getCurrentDate();

  const newTask = {
    title,
    description,
    dueDate,
    creationDate,
    priority,
    notes,
  };

  const project = JSON.parse(localStorage.getItem(projectId));
  project.tasks.push(newTask);
  localStorage.setItem(projectId, JSON.stringify(project));
};

const createProject = data => {
  const title = data[0].value;
  const description = data[1].value || 'No description provided';
  const dueDate = data[2].value || 'Due date not set';

  const creationDate = getCurrentDate();
  const tasks = [];

  const newProject = { title, description, dueDate, creationDate, tasks };
  saveObject(newProject);
};

export { createTask, createProject };
