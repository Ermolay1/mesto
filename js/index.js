 const profilebuttun = document.querySelector('.profile__button');
 const profilepopup = document.querySelector('.profile__popup');
 const profileclosepopup = profilepopup.querySelector('.popup__close-popup');
 

 profilebuttun.addEventListener('click', () =>{

    profilepopup.classList.add('popup__active');

 } );

 profileclosepopup.addEventListener('click',() =>{
    
    profilepopup.classList.remove('popup__active');
});

const buttonSave  = document.querySelector('.popup__button-save');
const popupFieldName = document.querySelector('.popup__field-name');
const profileTitle = document.querySelector('.profile__title');
const fieldDescription = document.querySelector('.popup__field-description');
const profileSubtitle = document.querySelector('.profile__subtitle');

function save(evt) {
   evt.preventDefault();
   profilepopup.classList.remove('popup__active');
   profileTitle.textContent = popupFieldName.value;
   profileSubtitle.textContent = fieldDescription.value;
};
buttonSave.addEventListener('click', save,);
