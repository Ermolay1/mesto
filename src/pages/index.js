
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidate from "../components/FormValidate.js";
import UserInfo from "../components/UserInfo.js";
import { config } from "../script/config.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
   formElementCard,
   buttonOpenPopupElement,
   buttonOpenPopupProfile,
   formProfile,
   inputName,
   inputDescription,
   avatar,
   buttonAvatar,
   formAvatar,
} from "../script/consts.js";
import {api} from "../components/Api.js";
 


let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([initialCards, userData]) => {
      userInfo.setUserInfo(userData);
      userId = userData._id;
      cardsList.renderItems(initialCards);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });

    const userInfo = new UserInfo({
      username: '.profile__title',
      description: '.profile__subtitle',
      avatar: '.profile__image'
    });

    const profilePopup = new PopupWithForm({
      popupSelector: '.popup_type_profile ',
      handleFormSubmit: (data) => {
        profilePopup.loading(true);
        api.editUserInfo(data)
         .then((data) => {
          userInfo.setUserInfo(data);
          profilePopup.close();
         })
         .catch((err) => {
          console.log(`Ошибка: ${err}`);
         })
         .finally(() => {
            profilePopup.loading(false);
         });
      }
    });
   profilePopup.setEventListeners();

 function fillinProfileFormInputs({username, description}) {
  inputName.value = username;
  inputDescription.value = description;
 }

 const avatarPopop = new PopupWithForm({
  popupSelector: '.popup_type_profile-avatar',
  handleFormSubmit: (data) => {
    avatarPopop.loading(true);
    api.editAvatar(data)
     .then((data) => {
        userInfo.setUserInfo(data);
        avatarPopop.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        avatarPopop.loading(false);
      });

  }
 });

 avatarPopop.setEventListeners();

 buttonAvatar.addEventListener('click', () => {
  avatarFormValidator.resetValidationMessage();
  avatarPopop.open();
 });

 buttonOpenPopupProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillinProfileFormInputs({
    username: info.username,
    description: info.description
  });
  profilePopup.open();
 });

 const createCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: '.element__cards',
    userId: userId,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
           .then(() => {
             deleteCardPopup.close();
             card.deleteCard();
           })
           .catch((err) => {
            console.log(`Ошибка: ${err}`);
           });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
 };

 const cardsList = new Section({
  renderer: (card) => {
    cardsList.addItem(createCard(card));
  },
 },
   '.elements');

   const deleteCardPopup = new PopupWithConfirmation({
    popupSelector: '.popup_type_element-delete'
   });
   deleteCardPopup.setEventListeners();

   const elementPopup = new PopupWithForm({
    popupSelector: '.popup_type_element',
    handleFormSubmit: (formData) => {
      elementPopup.loading(true);
      api.addCard(formData)
        .then((formData) => {
           cardsList.addItem(createCard(formData));
           elementPopup.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          elementPopup.loading(false);
        });
    }
   });
   elementPopup.setEventListeners();

   buttonOpenPopupElement.addEventListener('click', () => {
    elementFormValidator.resetValidationMessage();
    elementPopup.open();
   })

   const imagePopup = new PopupWithImage('.popup_type_image');
   imagePopup.setEventListeners();

   const profileFormValidator = new FormValidate(config, formProfile);
   profileFormValidator.enableValidation();

   const elementFormValidator = new FormValidate(config, formElementCard);
   elementFormValidator.enableValidation();

   const avatarFormValidator = new FormValidate(config, formAvatar);
   avatarFormValidator.enableValidation();
  





  


   
   
  
      

  

 
