class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    popupOpen() {
        this._popup.classList.add('popup__open');        
    }

    popupClose() {
      this._popup.classList.remove('popup__open');
    }

}

export default Popup;