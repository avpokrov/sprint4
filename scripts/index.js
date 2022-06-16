const popupEditProfile = document.querySelector('.popup-edit-profile');
const openButtonEditProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupEditProfile.querySelector('.popup__close');

const popupAddCard = document.querySelector('.popup-cardadd');
const openButtonAddCard = document.querySelector('.profile__add-button');
const closeButtonAddCard = popupAddCard.querySelector('.popup__close button');

const openPopup = popupElement => {
  popupElement.classList.add('popup__open');    
}

const closePopup = popupElement => {
  popupElement.classList.remove('popup__open');    
}


const formPopup = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__title');
const infoProfile = document.querySelector('.profile__subtitle');
const toFormNameProfile = popupEditProfile.querySelector('.popup__input_name');
const toFormInfoProfile = popupEditProfile.querySelector('.popup__input_info');

const cardTemlate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const addCard = (name,url) => {
    const newCard = cardTemlate.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__img').src = url;
    newCard.querySelector('.card__title').textContent = name;
    cards.insertAdjacentElement('afterbegin', newCard);

}

initialCards.forEach((item) =>{
   addCard(item.name, item.link);

});

openButtonEditProfile.addEventListener('click', () => {
    
    // toFormNameProfile.value = nameProfile.textContent;
    // toFormInfoProfile.value = infoProfile.textContent;
    openPopup(popupEditProfile);
});

closeButtonProfile.addEventListener('click', function(event){
    event.stopPropagation;
    closePopup(popupEditProfile);
    
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(popup);
    }
})

formPopup.addEventListener('submit', function(event){
    event.preventDefault();
    nameProfile.textContent = toFormNameProfile.value;
    infoProfile.textContent = toFormInfoProfile.value;
    closePopup(popup);
});



