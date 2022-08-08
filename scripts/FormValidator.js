class FormValidator {
    constructor(config, validForm) {
        this._config = config;
        this._validForm = validForm;
    }

    enableValidation() {
        const inputList = Array.from(this._validForm.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._validForm.querySelector(this._config.submitButtonSelector);
        inputList.forEach(inputElement => {
          inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            // this._toggleButtonState(inputList, buttonElement);
          });
        });
    }

    _isValid (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
      };

     _showInputError (inputElement, errorMessage) {
        const errorElement = this._validForm.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        inputElement.classList.add('popup__input_type_error');
        };
        
    _hideInputError (inputElement) {
        const errorElement = this._validForm.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove('popup__input_type_error');
        };

    _toggleButtonState (inputList, buttonElement) {
        if(hasInvalidInput(inputList)) {
            disabledButton(buttonElement)
        } else {
            enableButton(buttonElement)
            }
        };
}

export default FormValidator;