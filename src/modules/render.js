const display = document.getElementById('display-area');

const renderProject = (key, project) => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('data-proj', key);
  projectDiv.classList.add('box');

  const titleP = document.createElement('p');
  const descriptionP = document.createElement('p');
  const creationP = document.createElement('p');
  const dueP = document.createElement('p');

  titleP.innerText = `Title: ${project.title}`;
  descriptionP.innerText = `Description: ${project.description}`;
  creationP.innerText = `Creation date: ${project.creationDate}`;
  dueP.innerText = `Due date: ${project.dueDate}`;

  projectDiv.append(titleP, descriptionP, creationP, dueP);
  return projectDiv;
};

const renderProjects = () => {
  display.innerHTML = '';
  for (let key = 0; key < localStorage.length; key += 1) {
    const object = JSON.parse(localStorage.getItem(key));
    const renderedProject = renderProject(key, object);
    display.appendChild(renderedProject);
  }
};

export { renderProjects };
