const display = document.getElementById('display-area');
const buttonsContainer = document.getElementById('buttons-container');
const formContainer = document.getElementById('form-container');

const clearDisplay = () => {
  display.innerHTML = '';
};

const clearButtonsContainer = () => {
  buttonsContainer.innerHTML = '';
};

const clearformContainer = () => {
  formContainer.innerHTML = '';
};

const setAttributes = (element, attributes) => {
  const keys = Object.keys(attributes);

  keys.forEach(key => {
    element.setAttribute(key, attributes[key]);
  });
};

const createInputBlock = (type, title, text, extraAttributes) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('input-block');
  const label = document.createElement('label');
  label.setAttribute('for', title);
  label.innerText = text;
  const input = document.createElement('input');
  setAttributes(input, { type, id: title, name: title });

  if (extraAttributes) {
    if ('required' in extraAttributes) {
      input.required = true;
    }
    setAttributes(input, extraAttributes);
  }

  newDiv.append(label, input);
  return newDiv;
};

export {
  clearDisplay,
  clearButtonsContainer,
  clearformContainer,
  setAttributes,
  createInputBlock,
};
