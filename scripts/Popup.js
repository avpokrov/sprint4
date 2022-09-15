class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    popupOpen() {
        document.addEventListener('keypress', this._handleEscClose);
        this._popup.classList.add('popup__open');        
    }

    popupClose() {
      document.removeEventListener('keypress', this._handleEscClose);  
      this._popup.classList.remove('popup__open');
    }

    _handleEscClose(evt) {        
        if(evt.key == '1'){
            console.log(this); 
        }
    }

}

export default Popup;