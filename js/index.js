 const profilebuttun = document.querySelector('.profile__button');
 const profilepopup = document.querySelector('.profile__popup');
 const profileclosepopup = profilepopup.querySelector('.popup__close-popup');
 const popupName = profilepopup.querySelector('.popup__field-name');
 const popupDescription = profilepopup.querySelector('popup__field-description');
 const popupSaveProfile = document.querySelector('popup__button-save');
 const profile = document.querySelector('profile');
 const profileName = document.querySelector('profile__title');
 const profileDescription = document.querySelector('profile__subtitle');

 profilebuttun.addEventListener('click', () =>{

    profilepopup.classList.add('popup__active');

 } );

 profileclosepopup.addEventListener('click',() =>{
    
    profilepopup.classList.remove('popup__active');
});


function popupSave(e) {
   popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
   profileName.textContent = `${popupName.value}`;
   profileDescription.textContent = `${popupDescription.value}`;
   profilepopup.classList.remove('popup__active');
   e.preventDefault();
};
profilepopup.addEventListener('keydow', function (event) {
     if ( event.keycode === 13){
          event.preventDefault();
          popupSaveProfile.click();
     }

});
popupSaveProfile.addEventListener('click', popupSave);
popupSaveProfile.a