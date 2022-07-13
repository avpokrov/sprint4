const enableValidation = (config) => {
    console.log(config);
}

const showInputError = (element) => {
    element.classList.add('popup__input_type_error');
  };
  
  const hideInputError = (element) => {
    element.classList.remove('popup__input_type_error');
  };

  