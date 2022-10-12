class Card {
    constructor({dataElement, template, clickOnCard, clickOnDel, myId}) {
        this._data = dataElement;
        this._name = dataElement['name'];
        this._url = dataElement['link'];
        this._likes = dataElement['likes']
        this._cardTemplate = template;
        this._clickOnCard = clickOnCard;
        this._clickOnDel = clickOnDel;
        this._myId = myId;
    }

    _getTemplate() {
        return document.querySelector(this._cardTemplate)
            .content
            .children[0]
            .cloneNode(true);
    }

    _addEvent(){
        this._card.querySelector('.button-like').addEventListener('click', (evt) => {
             this._addLike(evt);  
          });
        this._card.querySelector('.card__button-del').addEventListener('click', (evt) =>{
            this._delCard();
        });
        
        this._card.querySelector('.card__img').addEventListener('click', evt => {
            this._clickOnCard(this._name, this._url);
           });

    }

    _addLike(evt){
        evt.target.classList.toggle('buttton-like_active');
    }

    _delCard(){
        this._clickOnDel(this);
    }

    _checkDelCard() {
        if (this._getQwnerId() == this._myId){
            return false;
        } else {
            return true;
        }
    }

    _getQwnerId(){
        return this._data.owner._id;
    }

    getId(){
        return this._data._id;
    }

    remove(){
        this._card.remove();
    }

    render() {
        this._card = this._getTemplate();
        this._card.querySelector('.card__img').src = this._url;
        this._card.querySelector('.card__title').textContent = this._name;
        this._card.querySelector('.card__likes').textContent = this._likes.length;
        if(this._checkDelCard()){
             this._card.querySelector('.card__button-del').style.display = 'none';  
        }
        this._addEvent();
        return this._card;
    }
}

export default Card;