class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    popupOpen() {
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this.setEventListeners();
        this._popup.classList.add('popup__open');        
    }

    popupClose() {
      document.removeEventListener('keydown', this._handleEscClose);  
      this._popup.classList.remove('popup__open');
    }

    setEventListeners() {
        const buttonClose = this._popup.querySelector('.popup__close');
        buttonClose.addEventListener('click', (evt) => {
            evt.stopPropagation;
            this.popupClose();
        })
        this._popup.addEventListener('click', (evt) =>{
                if(evt.target.classList.contains('popup')){
                  this.popupClose();
                }
        })
    }

    _handleEscClose(evt) {        
        if(evt.key === 'Escape'){
            this.popupClose();
        }
    }
}

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    popupOpen(src,text){
        this._popup.querySelector('.popup__img').src = src;
        this._popup.querySelector('.popup__title_img').textContent = text;
        super.popupOpen();
    }

}

class PopupWithForm extends Popup {
    constructor(popupSelector,submitForm){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = submitForm;
    }

    _getInputValues(){
        this._inputValues = {};
        this._formFilds = this._popup.querySelectorAll('.popup__input');
        this._formFilds.array.forEach(input => {
            this._inputValues[input.name] = input.value; 
        });
        return this._inputValues;
    }

    setEventListeners(){
        this._form.addEventListener('submit', this._submitForm);
        super.setEventListeners();
    }

    popupClose(){
        this._form.reset();
        super.popupClose();
    }


}

export { Popup, PopupWithImage, PopupWithForm};
