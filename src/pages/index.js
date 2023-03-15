
import "./index.css";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidate from "../components/FormValidate.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../script/initialCards.js";
import { config } from "../script/config.js";

import {
   formElementCard,
   buttonOpenPopupElement,
   buttonOpenPopupProfile,
   formProfile,
   inputName,
   inputDescription,
} from "../script/consts.js";



const popupWithImage = new PopupWithImage('.popup_type_image');
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
elementFormValidator.enableValidation();




  


   
   
  
      

  

 
