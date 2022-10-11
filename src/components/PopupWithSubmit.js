import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor({popupSelector,submitForm}){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = submitForm;
    }

    setEventListeners(){
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
            super.close();
        });
        super.setEventListeners();
    }

}

export default PopupWithSubmit;