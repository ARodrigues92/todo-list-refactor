import { setAttributes, createInputBlock } from './helper-functions';

const buttonsContainer = document.getElementById('buttons-container');
const formContainer = document.getElementById('form-container');

const createButton = (id, text) => {
  const button = document.createElement('button');
  button.innerText = text;
  setAttributes(button, { id, class: 'buttons' });
  buttonsContainer.appendChild(button);
  return button;
};

const createButtons = (butonClass, text) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add(butonClass);
  return button;
};

const createForm = type => {
  const formDiv = document.getElementById('form-container');
  formDiv.innerHTML = '';
  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  form.appendChild(
    createInputBlock('text', 'title', '*Title:', { required: true })
  );
  form.appendChild(createInputBlock('text', 'description', 'Description:'));
  form.appendChild(createInputBlock('date', 'due-date', 'Due date:'));

  if (type === 'task') {
    form.append(
      createInputBlock('number', 'priority', 'Priority:', {
        min: 1,
        max: 3,
      })
    );
    const newDiv = document.createElement('div');
    newDiv.classList.add('form-block');
    const label = document.createElement('label');
    label.setAttribute('for', 'notes');
    label.innerText = 'Notes: ';
    const textarea = document.createElement('textarea');
    setAttributes(textarea, { id: 'notes', name: 'notes' });
    newDiv.append(label, textarea);
    form.appendChild(newDiv);
  }

  const submit = document.createElement('input');
  setAttributes(submit, { type: 'submit', id: 'submit', value: 'Submit' });
  form.appendChild(submit);
  formContainer.appendChild(form);
  return form;
};

const fillForm = (type, data) => {
  const form = document.getElementById('form');
  form.elements[0].value = data.title;
  form.elements[1].value = data.description;
  form.elements[2].value = data.dueDate;

  if (type === 'task') {
    form.elements[3].value = data.priority;
    form.elements[4].value = data.notes;
  }
};

export { createButton, createButtons, createForm, fillForm };
