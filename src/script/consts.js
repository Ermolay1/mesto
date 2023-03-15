const popupElementCard = document.querySelector('.popup_type_element');
const formElementCard = popupElementCard.querySelector('.popup__form_type_mesto');

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupElement = document.querySelector('.profile__addbutton');

const formProfile = document.querySelector('.popup__form-profile');
const inputName = formProfile.querySelector('.popup__input_value_name');
const inputDescription = formProfile.querySelector('.popup__input_value_description');

export { formElementCard, buttonOpenPopupElement, buttonOpenPopupProfile, inputName, inputDescription, formProfile};