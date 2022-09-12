import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';

const cardContainer = '.cards';
const popupEditProfile = document.querySelector('.popup_profile_edit');
const openButtonEditProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupEditProfile.querySelector('.popup__close');

const popupAddCard = document.querySelector('.popup_card_add');
const openButtonAddCard = document.querySelector('.profile__add-button');
const closeButtonAddCard = popupAddCard.querySelector('.popup__close');

const popupCardImage = document.querySelector('.popup_card-img');
const closeButtonPopupCardImg = popupCardImage.querySelector('.popup__close');

const formProfileName = document.querySelector('.popup__input_name');
const formProfileInfo = document.querySelector('.popup__input_info');
const formAddCard = document.querySelector('.popup__form-cardAdd');
const formAddCardInfo = document.querySelector('.popup__input_info-card');
const formAddCardSrc = document.querySelector('.popup__input_src-card');
const formProfile = document.querySelector('.popup__form-profile');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const openPopup = popupElement => {
  popupElement.classList.add('popup__open');
  popupOpen = popupElement;  
  setClosePopupOnPresskey(popupElement);
}

const setClosePopupOnPresskey = () => {
  document.addEventListener('keypress', pressEsc);
  }

const delClosePopupOnPresskey = () => {
    document.removeEventListener('keypress', pressEsc);
    }

const pressEsc = (evt) => {
  if(evt.key == '1'){
    closePopup(popupOpen);
  } 
}

const setClosePopupOnClick = () => {  
   const popups = Array.from(document.querySelectorAll('.popup'));
    popups.forEach((popupElement) => {
      popupElement.addEventListener('click',(evt) => {
        if(evt.target.classList.contains('popup')){
          closePopup(popupElement);
        }
      });
    });
  }

const closePopup = popupElement => {
  popupElement.classList.remove('popup__open');

}

const openEditProfilePopup = popupElement => {
  formProfileName.value = profileTitle.textContent;
  formProfileInfo.value = profileSubtitle.textContent;
  openPopup(popupElement);
}

const submitProfileForm = popupElement => {
  profileTitle.textContent = formProfileName.value;
  profileSubtitle.textContent = formProfileInfo.value;
  closePopup(popupElement);
}

const submitAddCardForm = () => {
   addCard(formAddCardInfo.value, formAddCardSrc.value, config, openPopupImg);
   formAddCard.reset();
   closePopup(popupAddCard);
}

const getButton = event => {
  return event.target;
}

const openPopupImg = event => {
    const card = getButton(event).closest('.card');
    const src = card.querySelector('.card__img').src;
    const name = card.querySelector('.card__title').textContent;
    popupCardImage.querySelector('.popup__img').src = src;
    popupCardImage.querySelector('.popup__title_img').textContent = name;
    openPopup(popupCardImage);
}

openButtonEditProfile.addEventListener('click', () => {
  openEditProfilePopup(popupEditProfile);
});

closeButtonProfile.addEventListener('click', event =>{
    event.stopPropagation;
    closePopup(popupEditProfile);
    
});

closeButtonPopupCardImg.addEventListener('click', event=> {
  event.stopPropagation;
  closePopup(popupCardImage);
});

popupEditProfile.addEventListener('submit', event => {
    event.preventDefault();
    submitProfileForm(popupEditProfile);
});

openButtonAddCard.addEventListener('click', (evt) => {    
    openPopup(popupAddCard);
});

closeButtonAddCard.addEventListener('click', event => {
  event.stopPropagation;
  closePopup(popupAddCard);
});

formAddCard.addEventListener('submit', event =>{
  event.preventDefault();
  disabledButton(formAddCard.querySelector('.popup__button-submit'));
  submitAddCardForm();
});

setClosePopupOnClick();

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  cardTemlate: '#card',
  cardImg: '.card__img',
  cardTitle: '.card__title',
  cardButtonLike: '.button-like',
  cardButtonDel: '.card__button-del',
  cardLikeActive: 'buttton-like_active',

}

const addCards = new Section({
    items: initialCards, 
    renderer: (element) => {
      const card = new Card(element.name, element.link, config, openPopupImg);
      addCards.addItem(card.render());
      }
    }, 
    cardContainer);

addCards.renderItems();


const formProfileValid = new FormValidator(config, formProfile);
const formCardValid = new FormValidator(config, formAddCard);
formProfileValid.enableValidation();
formCardValid.enableValidation();

