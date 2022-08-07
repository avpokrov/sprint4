class Card {
    constructor(name,url, config, openPopupImg) {
        this._name = name;
        this._url = url;
        this._config = config;
        this._openPopupImg = openPopupImg;
    }

    _getTemplate() {
        return document.querySelector(this._config.cardTemlate)
            .content
            .children[0]
            .cloneNode(true);

    }

    _addEvent(){
        this._card.querySelector(this._config.cardButtonLike).addEventListener('click', (evt) => {
             this._addLike(evt);  
          });
        this._card.querySelector(this._config.cardButtonDel).addEventListener('click', (evt) =>{
            this._delCard();
        });
        
        this._card.querySelector(this._config.cardImg).addEventListener('click', evt => {
            this._openPopupImg(evt);
           });

    }

    _addLike(evt){
        evt.target.classList.toggle(this._config.cardLikeActive);
    }

    _delCard(){
        this._card.remove();
    }

    render() {
        this._card = this._getTemplate();
        this._card.querySelector(this._config.cardImg).src = this._url;
        this._card.querySelector(this._config.cardTitle).textContent = this._name;
        this._addEvent();
        return this._card;
    }
}

export default Card;