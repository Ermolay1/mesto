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

// Практическая 5

const initialCards = [
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


 const cardsContainer = document.querySelector('.elements');
 const cardTemplate = document
                      .querySelector('.element__cards')
                      .content
                      .querySelector('.element');
  
  const popupElementLink = document.querySelector('.popup__form_input_value_name');
  const form = document.querySelector('.popup-element__form');
  const formText = form.querySelector('.popup__form_input_value_name');
  const formLink = form.querySelector('.popup__form_input_value_link');                 
  const popupElement = document.querySelector('.popup-element');
  const openElement = document.querySelector('.profile__addbutton');
  const closeElement = document.querySelector('.popop__close');
  

   function openPopupElement() {
       popupElement.classList.add('popup_opened');
   }
   
   function closePopupElement() {
    popupElement.classList.remove('popup_opened');
   }
  
   openElement.addEventListener('click', openPopupElement);
   closeElement.addEventListener('click',closePopupElement);
   
  
     
   function submitform(event) {
    event.preventDefault();
    const newCard = cardTemplate.cloneNode(true);
    cardsContainer.prepend(newCard);
    newCard.querySelector('.element__image').src = formLink.value;
    newCard.querySelector('.element__image').alt = formText.value;
    newCard.querySelector('.element__text').textContent = formText.value;
                    
    const likeButton = newCard.querySelector('.element__like');
   
    function likeCard(){
     likeButton.classList.toggle('element__like-active');
    }
  
    likeButton.addEventListener('click', likeCard);

    const deleteButton = newCard.querySelector('.element__delete-element');

   function deleteCard() {
     deleteButton.closest('.element').remove();
   }
 
   deleteButton.addEventListener('click', deleteCard);
     
   const popupImag = document.querySelector('.popup-image');
   const openImage = newCard.querySelector('.element__image');
   const Image = popupImag.querySelector('.popup-image__image');
   const closeImage = popupImag.querySelector('.popup-image__close-popup');
   const textImage = newCard.querySelector('.element__text');
   const nameImage = popupImag.querySelector('.popup-image__name');

    function openPopupImage() {
      popupImag.classList.add('popup_opened');
      Image.src = openImage.getAttribute('src');
      Image.alt = textImage.textContent;
      nameImage.textContent = textImage.textContent;
    }
  
    function closePopupImage(){
      popupImag.classList.remove('popup_opened');
    }
  openImage.addEventListener('click', openPopupImage);
  closeImage.addEventListener('click', closePopupImage);
    
  closePopupElement();


      }
    form.addEventListener('submit', submitform,  );               
   

 function createCard(item) {
   const card = cardTemplate.cloneNode(true);
   card.querySelector('.element__image').src = item.link;
   card.querySelector('.element__image').alt = item.name;
   card.querySelector('.element__text').textContent = item.name;
   
   const deleteButton = card.querySelector('.element__delete-element');

   function deleteCard() {
     deleteButton.closest('.element').remove();
   }
 
   deleteButton.addEventListener('click', deleteCard);
   

   const likeButton = card.querySelector('.element__like');
   
  function likeCard(){
   likeButton.classList.toggle('element__like-active');
  }

  likeButton.addEventListener('click', likeCard);
  
   const popupImag = document.querySelector('.popup-image');
   const openImage = card.querySelector('.element__image');
   const Image = popupImag.querySelector('.popup-image__image');
   const closeImage = popupImag.querySelector('.popup-image__close-popup');
   const textImage = card.querySelector('.element__text');
   const nameImage = popupImag.querySelector('.popup-image__name');

    function openPopupImage() {
      popupImag.classList.add('popup_opened');
      Image.src = openImage.getAttribute('src');
      Image.alt = textImage.textContent;
      nameImage.textContent = textImage.textContent;
    }
  
    function closePopupImage(){
      popupImag.classList.remove('popup_opened');
    }
  openImage.addEventListener('click', openPopupImage);
  closeImage.addEventListener('click', closePopupImage);
    
   
   return card;
 }

  function renderCard() {
   initialCards.forEach(initialCard => {
    const cardHtml = createCard(initialCard);
    cardsContainer.append(cardHtml);
  
   });
  }
  
  renderCard();



 
