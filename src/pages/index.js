import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

import { config,
         cardContainer,
         openButtonEditProfile,
         openButtonAddCard,
         popupAddCard,
         popupProfile,
         popupEditAvatarClass,
         popupSubmitClass,
         buttonAvatarEditClass,
         configApi
          } from '../utils/constants.js';

const buttonAvatarEdit = document.querySelector(buttonAvatarEditClass);
const api = new Api(configApi);
const section = new Section({   
  renderer: (element) => {
    return getCard(element);
    }}, 
  cardContainer);

const popupEditAvatar =  new PopupWithForm({
  popupSelector: popupEditAvatarClass,
  submitForm: (data) => {
    popupEditAvatar.saveMessage('Сохранение...');
    api.setUserAvatar(data)
      .then((res) => {
        writeInfo.setAvatar(data);
      })
      .finally((res) => {
        popupEditAvatar.saveMessage('Сохранить');
      })
  } 
 });
 popupEditAvatar.setEventListeners();

const popupSubmit = new PopupWithSubmit({
  popupSelector: popupSubmitClass
});

popupSubmit.setEventListeners();

const writeInfo = new UserInfo({
  userInfo: '.profile__title',
  info: '.profile__subtitle',
  avatarUserClass: '.profile__avatar-img'
});

 const openImgPopup = (name,url) => {
  popupImg.open(name,url);
}

const openSubmitPopup = (card) => {
  popupSubmit.setActionSubmit(() => {
    api.delCard(card.getId())
      .then((data) =>{
        card.remove();
      })


  })
  popupSubmit.open();
}

const clickOnLike = (card) => {
  if(card.checkLike()){
    api.removeCardLike(card.getId())
       .then((res) => {
         card.updateLikes(res);
         card.changeLike();
      });
    
  } else {
     api.setCardLike(card.getId())
       .then((res) => {
         card.updateLikes(res);
         card.changeLike();
      });
  }
}

function getCard(dataElement) {
  const card = new Card({
    dataElement,
    template: '#card',
    clickOnCard: openImgPopup,
    clickOnDel: openSubmitPopup,
    clickOnLike: clickOnLike,
    myId: writeInfo.getMyId()
    } 
  )
  return card.render();
}

const formProfile = new PopupWithForm({
  popupSelector: '.popup_profile_edit', 
  submitForm: (data) => {
    formProfile.saveMessage('Сохраненние...');
    api.setUserInfo(data)
      .then((res) => {
        writeInfo.setUserInfo(res);
      })
      .finally((res) => {
        formProfile.saveMessage('Сохранить');
      })
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
    popupCardAdd.saveMessage('Сохранение...')
    api.addCard(data)
      .then(res => {         
        const renderedCard = section.renderItems(res);
        section.addItem(renderedCard);
      }).finally((res) => {
        popupCardAdd.saveMessage('Сохранить');
      })
   } 
  })
  popupCardAdd.setEventListeners();
  openButtonAddCard.addEventListener('click', () => {
    formCardValid.resetValidate();
    popupCardAdd.open();
  })

buttonAvatarEdit.addEventListener('click', () => {
  popupEditAvatar.open();
})


Promise.all([api.getAllCard(), api.getUserInfo()])
  .then(([cards, userInfo]) => {
    writeInfo.setUserInfo(userInfo);
    section.addCards(cards.reverse());
});


const formProfileValid = new FormValidator(config, popupProfile);
const formCardValid = new FormValidator(config, popupAddCard);
const formAvatarValid = new FormValidator(config, popupEditAvatarClass);
formProfileValid.enableValidation();
formCardValid.enableValidation();
formAvatarValid.enableValidation();