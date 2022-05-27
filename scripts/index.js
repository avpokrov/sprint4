let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let formPopup = document.querySelector('.popup__form');
let nameProfile = document.querySelector('.profile__title');
let infoProfile = document.querySelector('.profile__subtitle');
let toFormNameProfile = popup.querySelector('.popup__input_name');
let toFormInfoProfile = popup.querySelector('.popup__input_info');

toFormNameProfile.value = nameProfile.textContent;
toFormInfoProfile.value = infoProfile.textContent;

editButton.addEventListener('click', openClosePopup);
closePopupButton.addEventListener('click', openClosePopup);
formPopup.addEventListener('submit', savePopupForm);

function openClosePopup() {
    popup.classList.toggle('popup__open');    
}

function savePopupForm() {
    console.log('click');
}

