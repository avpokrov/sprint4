class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this._popup.classList.add('popup__open');        
    }

    close() {
      document.removeEventListener('keydown', this._handleEscClose);  
      this._popup.classList.remove('popup__open');
    }

    setEventListeners() {
        const buttonClose = this._popup.querySelector('.popup__close');
        buttonClose.addEventListener('click', (evt) => {
            evt.stopPropagation;
            this.close();
        })
        this._popup.addEventListener('click', (evt) =>{
                if(evt.target.classList.contains('popup')){
                  this.close();
                }
        })
    }

    _handleEscClose(evt) {        
        if(evt.key === 'Escape'){
            this.close();
        }
    }
}

export default Popup;
