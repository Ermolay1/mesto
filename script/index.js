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


const config ={
  selectorElements: '.elements',
  selectorElementCards: '.element__cards',
}

const element = document.querySelector(config.selectorElements);

for (const initialCard of  initialCards) {
  const card = new Card(config.selectorElementCards, initialCard);
  const element = card.getElement();
  
}






/*const profilepopup = document.querySelector('.popup_type_profile');
 const profilebuttun = document.querySelector('.profile__edit-button');
 
 const profileClosePopup = profilepopup.querySelector('.popup__close-popup');
 
const buttonSave  = document.querySelector('.popup__button-save');
const inputName = document.querySelector('.popup__input_value_name');
const profileTitle = document.querySelector('.profile__title');
const inputDescription = document.querySelector('.popup__input_value_description');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form-profile');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document
                     .querySelector('.element__cards')
                     .content
                     .querySelector('.element');
 
 const popupElementLink = document.querySelector('.popup_type_element_input-value-name');
 const form = document.querySelector('.popup__form_type_mesto');
 const formText = form.querySelector('.popup__input_type_value-name');
 const formLink = form.querySelector('.popup__input_type_value-link');                 
 const popupElement = document.querySelector('.popup_type_element');
 const openElement = document.querySelector('.profile__addbutton');
 const saveElement = document.querySelector('.popup__button-save_type_mesto');
 const closeElement = document.querySelector('.popup__close-popup_type_mesto');
 const popupImag = document.querySelector('.popup_type_image');
 const nameImage = popupImag.querySelector('.popup__image-name');
 const image = popupImag.querySelector('.popup__image');
 const popups = document.querySelectorAll('.popup');


function openPopup(popup){
  popup.classList.add('popup_opened');
   document.addEventListener('keyup', closePopupByEsc);
} ;


function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
};


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
    



  


   
   
  
      

  

 
