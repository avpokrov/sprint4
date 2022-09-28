import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import {initialCards,
         config,
         cardContainer,
         openButtonEditProfile,
         openButtonAddCard,
         popupAddCard,
         popupProfile} from '../utils/constants.js';



const writeInfo = new UserInfo({
  userInfo: '.profile__title',
  info: '.profile__subtitle'
});

 const openImgPopup = (name,url) => {
  popupImg.open(name,url);
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
    formProfileValid.resetValidate();
    formProfile.open();
 });

 const popupCardAdd = new PopupWithForm({
   popupSelector: '.popup_card_add',
   submitForm: (data) => {
     addCards.addItem(getCard(data));
   } 
  })
  popupCardAdd.setEventListeners();
  openButtonAddCard.addEventListener('click', () => {
    formCardValid.resetValidate();
    popupCardAdd.open();
  })

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