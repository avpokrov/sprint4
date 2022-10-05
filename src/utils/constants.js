export const cardContainer = '.cards';
export const openButtonEditProfile = document.querySelector('.profile__edit-button');
export const openButtonAddCard = document.querySelector('.profile__add-button');
export const popupAddCard = '.popup_card_add';
export const popupProfile = '.popup_profile_edit';
export const apiUrl = 'https://mesto.nomoreparties.co/v1/cohort-51/cards';

export const config = {
    popupEditProfile: '.popup_profile_edit',
    popupImageCard: '.popup_card-img',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: '6e94b493-b513-4271-a5ab-96db09cdfced',
    'Content-Type': 'application/json'
  }
}
