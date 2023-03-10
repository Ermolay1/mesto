import Card from './Card.js'; // незнаю почему если убираю в названии .js не поключается
import FormValidator from './FormValidate.js';
import {initialCards} from './cards.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  
};

const Esc = "Escape";


const popupProfile = document.querySelector('.popup_type_profile');
const popupElement = document.querySelector('.popup_type_element');
const popupImage = document.querySelector('.popup_type_image');

const buttonClose = document.querySelectorAll('.popup__close');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonElement = document.querySelector('.profile__addbutton ');

const elements = document.querySelector('.elements');

const imageName = popupImage.querySelector('.popup__image-name');
const imageUrl = popupImage.querySelector('.popup__image');

const profileForm = popupProfile.querySelector('.popup__form-profile');
const imageForm = document.forms.mestoForm;


const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const formName = popupProfile.querySelector('.popup__input_value_name');
const formSubtitle = popupProfile.querySelector('.popup__input_value_description');

const formImageTitle = imageForm.querySelector('.popup__input_type_value-name');
 const formImageUrl = imageForm.querySelector('.popup__input_type_value-link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);
};

 function openImagePopup(link, name) {
  imageUrl.src = link;
  imageUrl.alt = name;
  imageName.textContent = name;

  openPopup(popupImage);
 };
 
 function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOverlay);
 };

 function closePopupEsc(e) {
  if (e.key === Esc) {
    
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
 };

 function  closePopupOverlay(e) {
  if (e.target.classList.contains('popup_opened')) {
    closePopup(e.target);
  }
 };
 
 function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    '.element__cards',
    openImagePopup
  );
  return cardElement.generateCard();
 };

 function renderCards() {
  initialCards.forEach((item) => {
    const cardElement = createCard(item);
    elements.prepend(cardElement);
  });
 };

 function insertProfileForm() {
  formName.value = profileName.textContent;
  formSubtitle.value = profileSubtitle.textContent;
 }

 function handleProfileForm(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileSubtitle.textContent = formSubtitle.value;
  
  closePopup(popupProfile);
};

function handleElementForm(event) {
  event.preventDefault();

  const newCard = createCard({
    name: formImageTitle.value,
    link: formImageUrl.value,
  });

  elements.prepend(newCard);
  imageForm.reset();
  closePopup(popupElement);
};

const validateProfileForm = new FormValidator(config, profileForm);
const validateImageForm = new FormValidator(config, imageForm);

validateProfileForm.enableValidation();
validateImageForm.enableValidation();

buttonProfile.addEventListener('click', () => {
  validateProfileForm.resetValidationMessage();
  openPopup(popupProfile);
  insertProfileForm();
});

buttonElement.addEventListener('click', () => {
  imageForm.reset();
  validateImageForm.resetValidationMessage();
  openPopup(popupElement);
});

profileForm.addEventListener('submit', handleProfileForm);
imageForm.addEventListener('submit', handleElementForm);

buttonClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

renderCards(initialCards);



  


   
   
  
      

  

 
