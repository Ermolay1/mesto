
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
import Api from "../components/Api.js";
 
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: '71ce217b-0d84-4894-b27b-2d906663c6db',
    'Content-Type': 'application/json'
  }
}); 

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
      handleFormSubmit: (dataForm) => {
        profilePopup.loading(true);
        api.editUserInfo(dataForm)
         .then((dataForm) => {
          userInfo.setUserInfo(dataForm);
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
        avatar.src = data.avatar;
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
/*const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function createCard(item) {
  const card = new Card(item, ".element__cards", {
    handleCardClick: () => {
      popupWithImage.open(item);
    },
  });
  return card.generateCard();
}

const cardList = new Section( 
  {
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  },
},
  ".elements"
);
cardList.renderItems();

const popupNewCard = new PopupWithForm('.popup_type_element', {
  handleFormSubmit: (item) => {
    cardList.addItem(createCard(item));
  },
});
popupNewCard.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__subtitle",
});

const popupProfile = new PopupWithForm(".popup_type_profile", {
  handleFormSubmit: (item) => {
    userInfo.setUserInfo(item);
  },
});

popupProfile.setEventListeners();

buttonOpenPopupProfile.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.userName;
  inputDescription.value = userData.userDescription;
  popupProfile.open();
});

buttonOpenPopupElement.addEventListener("click", () => {
  popupNewCard.open();
  elementFormValidator._disableSubmitButton();
});

const profileFormValidator = new FormValidate(config, formProfile);
const elementFormValidator = new FormValidate(config, formElementCard);

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();*/




  


   
   
  
      

  

 
