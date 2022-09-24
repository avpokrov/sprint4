import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import {Popup, PopupWithImage, PopupWithForm} from './Popup.js';
import UserInfo from './UserInfo.js';

const cardContainer = '.cards';
const openButtonEditProfile = document.querySelector('.profile__edit-button');

const openButtonAddCard = document.querySelector('.profile__add-button');

const popupAddCard = '.popup_card_add';
const popupProfile = '.popup_profile_edit';
const popupImgCard = '.popup_card-img';
const formProfileName = '.popup__input_name';
const formProfileInfo = '.popup__input_info';
const formAddCard = document.querySelector('.popup__form-cardAdd');
const formAddCardInfo = document.querySelector('.popup__input_info-card');
const formAddCardSrc = document.querySelector('.popup__input_src-card');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const writeInfo = new UserInfo({
  userInfo: '.profile__title',
  info: '.profile__subtitle'
});

 const openImgPopup = (name,url) => {
  popupImg.popupOpen(name,url);
}
function getCard(dataElement) {
  const card = new Card({
    dataElement,
    template: '#card',
    clickOnCard: openImgPopup
    } 
  )
  return card.render();
}

const formProfile = new PopupWithForm({
  popupSelector: '.popup_profile_edit', 
  submitForm: (data) => {
    writeInfo.setUserInfo({
      name: data['nameProfile'], 
      info: data['infoProfile']});
  }  
  });

 formProfile.setEventListeners();

const popupImg = new PopupWithImage('.popup_card-img');
popupImg.setEventListeners();

 openButtonEditProfile.addEventListener('click', () => {
    formProfile.setInputValues(writeInfo.getUserInfo());
    formProfile.popupOpen();
 });

const config = {
  popupEditProfile: '.popup_profile_edit',
  popupImageCard: '.popup_card-img',
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const addCards = new Section({
    items: initialCards, 
    renderer: (element) => {
      return getCard(element);
      }
    }, 
    cardContainer);

addCards.renderItems();



const formProfileValid = new FormValidator(config, popupProfile);
const formCardValid = new FormValidator(config, popupAddCard);
formProfileValid.enableValidation();
formCardValid.enableValidation();


