const enableValidation = (config) => {
    const allForms = Array.from(document.querySelectorAll(config.formSelector));
    allForms.forEach((formElement) => {
      setEventListeners(formElement, config);      
      });
}

const validateForm = (formElement) => {
  const inputs = Array.from(formElement.querySelectorAll('.popup__input'));
  const button = formElement.querySelector('.popup__button-submit');
  inputs.forEach((inputElemet) => {
    isValid(formElement, inputElemet);
  });
  toggleButtonState(inputs, button);
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });

}

const disabledButton = (button) =>{
  button.classList.add('popup__button-submit_disable');
  button.setAttribute('disabled', true);
}

const enableButton = (button) => {
  button.classList.remove('popup__button-submit_disable');
  button.removeAttribute('disabled');
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__input_type_error');
  };
  
  const hideInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove('popup__input_type_error');
  };

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement,inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement,inputElement, inputElement.validationMessage);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    disabledButton(buttonElement)
  } else {
    enableButton(buttonElement)
  }
}