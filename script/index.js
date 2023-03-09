import Card from './Card.js';

const  initialCards= [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const Esc = "Escape";


const popupProfile = document.querySelector('.popup_type_profile');
const popupElement = document.querySelector('.popup_type_element');
const popupImage = document.querySelector('.popup_type_image');

const buttonClose = document.querySelector('.popup__close ');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonElement = document.querySelector('.profile__addbutton ');

const elements = document.querySelector('.elements');

const imageName = document.querySelector('.popup__image-name');
const imageUrl = document.querySelector('.popup__image');

const profileForm = popupProfile.querySelector('.popup__form-profile');
const imageForm = document.forms.mestoForm;


const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const formName = popupProfile.querySelector('.popup__input_value_name');
const formSubtitle = popupProfile.querySelector('.popup__input_value_description');

const formImageTitle = imageForm.querySelector('.popup__input_type_value-name');
const formImageUrl = imageForm.querySelector('.popup__input_type_value-link');

function openPopup(popup) {
  popup.classList.add('.popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);
};

 function openImagePopup(link, name) {
  imageUrl.src = link;
  imageUrl.src = name;
  imageName.textContent = name;

  openPopup(popupImage);
 };
 
 function closePopup(popup) {
  popup.classList.remove('.popup__opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOverlay);
 };

 function closePopupEsc(e) {
  if (e.key === Esc) {
    const openedPopup = document.querySelector('.popup__opened');
    closePopup(openedPopup);
  }
 };

 function  closePopupOverlay(e) {
  if (e.target.classList.contains('.popup__opened')) {
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
  initialCards.forEach((item) =>{
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

buttonProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  insertProfileForm();
});

buttonElement.addEventListener('click', () => {
  imageForm.reset();
  openPopup(popupElement);
});

profileForm.addEventListener('submit', handleProfileForm);
imageForm.addEventListener('click', handleElementForm);

buttonClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

renderCards(initialCards);
/*
function closePopupByEsc(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === '27') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
 
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
  closePopup(popup);
  }
  })
  });


   profilebuttun.addEventListener('click',function() {
       openPopup(profilepopup);
     inputName.value = profileTitle.textContent;
     inputDescription.value = profileSubtitle.textContent;  
   }
   );


function save(e) {
   e.preventDefault();
   profileTitle.textContent = inputName.value;
   profileSubtitle.textContent = inputDescription.value;
   closePopup(profilepopup);
};

popupForm.addEventListener('submit', save);

openElement.addEventListener('click', function (){
  openPopup(popupElement);
   });
    
    function deleteCard(evt) {
      evt.target.closest(".element").remove();
     }

     function likeCard(evt){
      evt.target.classList.toggle('element__like-active');
     }

     function openImagePopup(cardImage) {
      
      image.src = cardImage.src;
      image.alt = cardImage.alt;
      nameImage.textContent = cardImage.alt;
      openPopup(popupImag);
     };

    function createCard(item) {
      const card = cardTemplate.cloneNode(true);
      const cardImage = card.querySelector('.element__image');
      const deleteButton = card.querySelector('.element__delete-element');
      const closeImage = popupImag.querySelector('.popup__button-close');
      const likeButton = card.querySelector('.element__like');
      
      card.querySelector('.element__text').textContent = item.name;
      cardImage.src = item.link;
      cardImage.alt = item.name; 
    
    
      cardImage.addEventListener('click', () => {
      openImagePopup(cardImage);
     });
       
      deleteButton.addEventListener('click', deleteCard);
      
      likeButton.addEventListener('click', likeCard);
      return card;
    }
   
     function renderCard() {
      initialCards.forEach(initialCard => {
       const cardHtml = createCard(initialCard);
       cardsContainer.append(cardHtml);
     
      });
     }
     
     renderCard();

      
     form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newCard = [
        {
          name: `${formText.value}`,
          link: `${formLink.value}`
        }];
        cardsContainer.prepend(createCard(newCard[0]));
        closePopup(popupElement);
        e.target.reset();
     })
*/
    



  


   
   
  
      

  

 
