class FormValidator {
    constructor(config, validForm) {
        this._config = config;
        this._validForm = document.querySelector(validForm);
        this._inputList = Array.from(this._validForm.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._validForm.querySelector(this._config.submitButtonSelector);
    }

    resetValidate() {
      this._inputList.forEach(inputElemet => {
        this._hideInputError(inputElemet);
      } );
      this._toggleButtonState(this._inputList, this._buttonElement)
      
    }

    enableValidation() {
        this._inputList.forEach(inputElement => {
          inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            this._toggleButtonState(this._inputList, this._buttonElement);
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
        if(this._hasInvalidInput(inputList)) {
            this._disabledButton(buttonElement)
        } else {
            this._enableButton(buttonElement)
            }
        };
    _hasInvalidInput (inputList) {
          return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          })
        };
    _disabledButton (button) {
          button.classList.add('popup__button-submit_disable');
          button.setAttribute('disabled', true);
        }
        
    _enableButton (button) {
          button.classList.remove('popup__button-submit_disable');
          button.removeAttribute('disabled');
        }
}

export default FormValidator;