 const profilepopup = document.querySelector('.popup');
 const profilebuttun = document.querySelector('.profile__edit-button');
 
 const profileClosePopup = profilepopup.querySelector('.popup__close-popup');
 
const buttonSave  = document.querySelector('.popup__button-save');
const inputName = document.querySelector('.popup__input_value_name');
const profileTitle = document.querySelector('.profile__title');
const inputDescription = document.querySelector('.popup__input_value_description');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');

function openPopup(){
   profilepopup.classList.add('popup_opened')
   inputName.value = profileTitle.textContent;
   inputDescription.value = profileSubtitle.textContent;
};

function closePopup(){
   profilepopup.classList.remove('popup_opened')
};

   profilebuttun.addEventListener('click',openPopup);
   profileClosePopup.addEventListener('click', closePopup);
 


function save(evt) {
   evt.preventDefault();
  
   profileTitle.textContent = inputName.value;
   profileSubtitle.textContent = inputDescription.value;
   closePopup();
};

popupForm.addEventListener('submit', save);

