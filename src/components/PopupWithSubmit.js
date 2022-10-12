import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor({popupSelector}){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    setActionSubmit(action) {
        this._submitForm = action;

    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm();
            super.close();
        });
    }

}

export default PopupWithSubmit;