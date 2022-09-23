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

const formProfile = new PopupWithForm({
  popupSelector: '.popup_profile_edit', 
  submitForm: (data) => {
    writeInfo.setUserInfo({
      name: data['nameProfile'], 
      info: data['infoProfile']});
  }  
  });

 formProfile.setEventListeners();

const openPopupImg = event => {
    const card = getButton(event).closest('.card');
    const src = card.querySelector('.card__img').src;
    const name = card.querySelector('.card__title').textContent;
    popupCardImage.querySelector('.popup__img').src = src;
    popupCardImage.querySelector('.popup__title_img').textContent = name;
    openPopup(popupCardImage);
}

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


const formProfileValid = new FormValidator(config, popupProfile);
const formCardValid = new FormValidator(config, popupAddCard);
formProfileValid.enableValidation();
formCardValid.enableValidation();


