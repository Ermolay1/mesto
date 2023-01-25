 const profilepopup = document.querySelector('.popup_type_profile');
 const profilebuttun = document.querySelector('.profile__edit-button');
 
 const profileClosePopup = profilepopup.querySelector('.popup__close-popup');
 
const buttonSave  = document.querySelector('.popup__button-save');
const inputName = document.querySelector('.popup__input_value_name');
const profileTitle = document.querySelector('.profile__title');
const inputDescription = document.querySelector('.popup__input_value_description');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');


function openPopup(popup){
  popup.classList.add('popup_opened');
} ;


function closePopup(popup){
  popup.classList.remove('popup_opened')
};

   profilebuttun.addEventListener('click',function() {
       openPopup(profilepopup);
       inputName.value = profileTitle.textContent;
       inputDescription.value = profileSubtitle.textContent;
     }
   );
   profileClosePopup.addEventListener('click',function() {
    closePopup(profilepopup);
  });
   


function save(evt) {
   evt.preventDefault();
  
   profileTitle.textContent = inputName.value;
   profileSubtitle.textContent = inputDescription.value;
   closePopup();
};

popupForm.addEventListener('submit', save);

// Практическая 5

 const cardsContainer = document.querySelector('.elements');
 const cardTemplate = document
                      .querySelector('.element__cards')
                      .content
                      .querySelector('.element');
  
  const popupElementLink = document.querySelector('.popup_type_element_input-value-name');
  const form = document.querySelector('.popup_type_element_form');
  const formText = form.querySelector('.popup_type_element_input-value-name');
  const formLink = form.querySelector('.popup_type_element_input-value-link');                 
  const popupElement = document.querySelector('.popup_type_element');
  const openElement = document.querySelector('.profile__addbutton');
  const closeElement = document.querySelector('.popup_type_element_button-save-popup');
  
   
   
   openElement.addEventListener('click', function (){
  openPopup(popupElement);
   });
   closeElement.addEventListener('click', function() {
     closePopup(popupElement)
    });

    

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
     
     
      const popupImag = document.querySelector('.popup_type_image');
      const openImage = card.querySelector('.element__image');
      const image = popupImag.querySelector('.popup_type_image_image');
      const closeImage = popupImag.querySelector('.popup_type_image_close-popup');
      const textImage = card.querySelector('.element__text');
      const nameImage = popupImag.querySelector('.popup_type_image_name');
   
    
    
     openImage.addEventListener('click', function() {
      openPopup(popupImag);
      image.src = openImage.getAttribute('src');
      image.alt = textImage.textContent;
      nameImage.textContent = textImage.textContent;
     });


     closeImage.addEventListener('click', function () {
      closePopup(popupImag);
     });
       
      
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

  

 
