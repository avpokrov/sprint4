import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import { config,
         cardContainer,
         openButtonEditProfile,
         openButtonAddCard,
         popupAddCard,
         popupProfile,
         popupEditAvatarClass,
         popupSubmitClass,
         buttonAvatarEditClass,
         configApi,
         avatarUser} from '../utils/constants.js';

const buttonAvatarEdit = document.querySelector(buttonAvatarEditClass);
const api = new Api(configApi);


const popupEditAvatar =  new PopupWithForm({
  popupSelector: popupEditAvatarClass,
  submitForm: (data) => {
    api.setUserAvatar(data)
      .then((res) => {
        avatarUser.src = data.link;
      })
  } 
 });
 popupEditAvatar.setEventListeners();

const setProfileInfo = () => {
  api.getUserInfo()
    .then((userInfo) => {
      avatarUser.src = userInfo.avatar;
      writeInfo.setUserInfo(userInfo);
  })
};


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
    api.setUserInfo(data)
      .then((res) => {
        writeInfo.setUserInfo({
          name: res['name'], 
          about: res['about']});
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
    api.addCard(data)
      .then(res => {
        const addCard = new Section ({
          item: res,
          renderer: (element) => {
            return getCard(element);
          }
        }
        ) 
        addCard.renderItems();
      })
   } 
  })
  popupCardAdd.setEventListeners();
  openButtonAddCard.addEventListener('click', () => {
    formCardValid.resetValidate();
    popupCardAdd.open();
  })

  api.getAllCard()
  .then((cards) => {
    cards.reverse().forEach(card => {
      const addCard = new Section({
        item: card, 
        renderer: (element) => {
          return getCard(element);
          }
        }, 
        cardContainer);  
      addCard.renderItems();
    });
    })

buttonAvatarEdit.addEventListener('click', () => {
  popupEditAvatar.open();
})

setProfileInfo();

const formProfileValid = new FormValidator(config, popupProfile);
const formCardValid = new FormValidator(config, popupAddCard);
const formAvatarValid = new FormValidator(config, popupEditAvatarClass);
formProfileValid.enableValidation();
formCardValid.enableValidation();
formAvatarValid.enableValidation();