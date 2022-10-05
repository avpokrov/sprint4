import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(name,src){
        this._popup.querySelector('.popup__img').src = src;
        this._popup.querySelector('.popup__title_img').textContent = name;
        super.open();
    }

}

export default PopupWithImage;