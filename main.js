(()=>{"use strict";const e=class{constructor(e,t){this._config=e,this._validForm=document.querySelector(t),this._inputList=Array.from(this._validForm.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._validForm.querySelector(this._config.submitButtonSelector)}resetValidate(){this._inputList.forEach((e=>{this._hideInputError(e)})),this._toggleButtonState(this._inputList,this._buttonElement)}enableValidation(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._isValid(e),this._toggleButtonState(this._inputList,this._buttonElement)}))}))}_isValid(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_showInputError(e,t){this._validForm.querySelector(`.${e.id}-error`).textContent=t,e.classList.add("popup__input_type_error")}_hideInputError(e){this._validForm.querySelector(`.${e.id}-error`).textContent="",e.classList.remove("popup__input_type_error")}_toggleButtonState(e,t){this._hasInvalidInput(e)?this._disabledButton(t):this._enableButton(t)}_hasInvalidInput(e){return e.some((e=>!e.validity.valid))}_disabledButton(e){e.classList.add("popup__button-submit_disable"),e.setAttribute("disabled",!0)}_enableButton(e){e.classList.remove("popup__button-submit_disable"),e.removeAttribute("disabled")}},t=class{constructor(e){this._popup=document.querySelector(e)}open(){document.addEventListener("keydown",this._handleEscClose.bind(this)),this._popup.classList.add("popup__open")}close(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup__open")}setEventListeners(){this._popup.querySelector(".popup__close").addEventListener("click",(e=>{e.stopPropagation,this.close()})),this._popup.addEventListener("click",(e=>{e.target.classList.contains("popup")&&this.close()}))}_handleEscClose(e){"Escape"===e.key&&this.close()}},s=class extends t{constructor({popupSelector:e,submitForm:t}){super(e),this._form=this._popup.querySelector(".popup__form"),this._inputs=this._popup.querySelectorAll(".popup__input"),this._submitForm=t}_getInputValues(){return this._inputValues={},this._inputs.forEach((e=>{this._inputValues[e.name]=e.value})),this._inputValues}setInputValues({name:e,info:t}){this._inputs[0].value=e,this._inputs[1].value=t}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this._submitForm(this._getInputValues()),this.close()})),super.setEventListeners()}close(){this._form.reset(),super.close()}},r=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),n={popupEditProfile:".popup_profile_edit",popupImageCard:".popup_card-img",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},o=new class{constructor({userInfo:e,info:t}){this._htmlUserInfo=document.querySelector(e),this._htmlInfo=document.querySelector(t)}getUserInfo(){return{name:this._htmlUserInfo.textContent,info:this._htmlInfo.textContent}}setUserInfo({name:e,info:t}){this._htmlUserInfo.textContent=e,this._htmlInfo.textContent=t}}({userInfo:".profile__title",info:".profile__subtitle"}),p=(e,t)=>{u.open(e,t)};function a(e){return new class{constructor({dataElement:e,template:t,clickOnCard:s}){this._name=e.name,this._url=e.link,this._cardTemplate=t,this._clickOnCard=s}_getTemplate(){return document.querySelector(this._cardTemplate).content.children[0].cloneNode(!0)}_addEvent(){this._card.querySelector(".button-like").addEventListener("click",(e=>{this._addLike(e)})),this._card.querySelector(".card__button-del").addEventListener("click",(e=>{this._delCard()})),this._card.querySelector(".card__img").addEventListener("click",(e=>{this._clickOnCard(this._name,this._url)}))}_addLike(e){e.target.classList.toggle("buttton-like_active")}_delCard(){this._card.remove()}render(){return this._card=this._getTemplate(),this._card.querySelector(".card__img").src=this._url,this._card.querySelector(".card__title").textContent=this._name,this._addEvent(),this._card}}({dataElement:e,template:"#card",clickOnCard:p}).render()}const l=new s({popupSelector:".popup_profile_edit",submitForm:e=>{o.setUserInfo({name:e.nameProfile,info:e.infoProfile})}});l.setEventListeners();const u=new class extends t{constructor(e){super(e)}popupOpen(e,t){this._popup.querySelector(".popup__img").src=t,this._popup.querySelector(".popup__title_img").textContent=e,super.open()}}(".popup_card-img");u.setEventListeners(),r.addEventListener("click",(()=>{l.setInputValues(o.getUserInfo()),c.resetValidate(),l.open()}));const d=new s({popupSelector:".popup_card_add",submitForm:e=>{_.addItem(a(e))}});d.setEventListeners(),i.addEventListener("click",(()=>{h.resetValidate(),d.open()}));const _=new class{constructor({items:e,renderer:t},s){this._initialArray=e,this._renderer=t,this._container=document.querySelector(s)}addItem(e){this._container.prepend(e)}renderItems(){this._initialArray.forEach((e=>{const t=this._renderer(e);this.addItem(t)}))}}({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:e=>a(e)},".cards");_.renderItems();const c=new e(n,".popup_profile_edit"),h=new e(n,".popup_card_add");c.enableValidation(),h.enableValidation()})();