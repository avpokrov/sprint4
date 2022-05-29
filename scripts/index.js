const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close');
const formPopup = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__title');
const infoProfile = document.querySelector('.profile__subtitle');
const toFormNameProfile = popup.querySelector('.popup__input_name');
const toFormInfoProfile = popup.querySelector('.popup__input_info');


editButton.addEventListener('click', function() {
    
    toFormNameProfile.value = nameProfile.textContent;
    toFormInfoProfile.value = infoProfile.textContent;
    openPopup(popup);
});

closePopupButton.addEventListener('click', function(event){
    event.stopPropagation;
    closePopup(popup);
    
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

function openPopup(popupElement) {
    popupElement.classList.add('popup__open');    
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup__open');    
}
