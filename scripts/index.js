 const profilepopup = document.querySelector('.popup');
 const profilebuttun = document.querySelector('.profile__edit-button');
 
 const profileClosePopup = profilepopup.querySelector('.popup__close-popup');
 

 profilebuttun.addEventListener('click', () =>{

    profilepopup.classList.add('popup_opened');

 } );

 profileClosePopup.addEventListener('click',() =>{
    
    profilepopup.classList.remove('popup_opened');
});

const buttonSave  = document.querySelector('.popup__button-save');
const popupFieldName = document.querySelector('.popup__field-name');
const profileTitle = document.querySelector('.profile__title');
const fieldDescription = document.querySelector('.popup__field-description');
const profileSubtitle = document.querySelector('.profile__subtitle');

function save(evt) {
   evt.preventDefault();
   profilepopup.classList.remove('popup_opened');
   profileTitle.textContent = popupFieldName.value;
   profileSubtitle.textContent = fieldDescription.value;
};
buttonSave.addEventListener('click', save);
