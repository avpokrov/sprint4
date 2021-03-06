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
const formAddCard = popupAddCard.querySelector('.popup__form');
const formAddCardInfo = document.querySelector('.popup__input_info-card');
const formAddCardSrc = document.querySelector('.popup__input_src-card');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
let popupOpen;

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
    popups = Array.from(document.querySelectorAll('.popup'));
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
  validateForm(popupElement.querySelector('.popup__form'));
  openPopup(popupElement);
}

const submitProfileForm = popupElement => {
  profileTitle.textContent = formProfileName.value;
  profileSubtitle.textContent = formProfileInfo.value;
  closePopup(popupElement);
}

const submitAddCardForm = () => {
   addCard(formAddCardInfo.value, formAddCardSrc.value);
   formAddCard.reset();
   closePopup(popupAddCard);
}

const addCard = (name,url) => {
  const newCard = cardTemlate.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__img').src = url;
  newCard.querySelector('.card__title').textContent = name;
  subscriptionEvent(newCard);
  cards.insertAdjacentElement('afterbegin', newCard);

}

const getButton = event => {
  return event.target;
}

const addLike = likeButton => {
  likeButton.classList.toggle('buttton-like_active');
}

const delCard = button => {
  const card = button.closest('.card');
  card.remove();
}

const openPopupImg = event => {
    const card = getButton(event).closest('.card');
    const src = card.querySelector('.card__img').src;
    const name = card.querySelector('.card__title').textContent;
    popupCardImage.querySelector('.popup__img').src = src;
    popupCardImage.querySelector('.popup__title_img').textContent = name;
    openPopup(popupCardImage);
}

const subscriptionEvent = card => {
  card.querySelector('.button-like').addEventListener('click', event => {
    addLike(getButton(event));     
  });

  card.querySelector('.card__button-del').addEventListener('click', event =>{
    delCard(getButton(event));
  });

  card.querySelector('.card__img').addEventListener('click', event => {
    openPopupImg(event);
  });

}

const cardTemlate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');


initialCards.forEach((item) => {
   addCard(item.name, item.link);

});

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


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


