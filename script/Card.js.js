export default class Card{

  constructor(data, templateSelector, openImagePopup ) {
  this._templateSelector = templateSelector;
  this._imgLink = data.link;
  this._imgName = data.name;
  this._openImagePopup = openImagePopup;
  } 

  _getTemplate() {
    const cardTemplate = document
               .querySelector(this._templateSelector)
               .content.querySelector('.element')
               .cloneNode("true");

    return cardTemplate;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cartDelete = this._card.querySelector('.element__delete-element');
    this._cardLike = this._card.querySelector('.element__like');
    this._cardImage = this._card.querySelector('.element__image');
    this._cardTitle = this._card.querySelector('.element__text');
    this._cardImage.src = this._imgLink;
    this._cardImage.alt = this._imgName;
    this._cardTitle.textContent = this._imgName;
    this._setEventiListeners();

    return this._card;
  }

_likeCard() {
  this._cardLike.classList.toggle('element__like-active');
};

_deleteCard() {
  this._card.remove();
};

_setEventiListeners() {
  this._cartDelete.addEventListener('click', () => {
    this._deleteCard();
  });

  
  this._cardLike.addEventListener('click', () =>{
    this._likeCard();
  });

  this._cardImage.addEventListener('click', () =>{
    this._openImagePopup(this._imgLink, this._imgName);

  });
}

}
