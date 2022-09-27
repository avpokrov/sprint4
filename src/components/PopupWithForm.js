import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({popupSelector,submitForm}){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.popup__input');
        this._submitForm = submitForm;
    }

    _getInputValues(){
        this._inputValues = {};
        this._inputs.forEach(input => {
            this._inputValues[input.name] = input.value; 
        });
        return this._inputValues;
    }

    setInputValues({name, info}) {
        this._inputs[0].value = name;
        this._inputs[1].value = info;
    }

    setEventListeners(){
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

   

    close(){
        this._form.reset();
        super.close();
    }


}

export default PopupWithForm;