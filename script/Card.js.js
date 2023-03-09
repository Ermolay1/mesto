
export default class Card {
     constructor(data, templateSelector,openElementPopup){
      this._templateSelector = templateSelector;
      this._elementLink = data.link;
      this._elementName = data.name;
      this._openElementPopup = openElementPopup;
     }
_getTemplate() {
  this._cardTemplate = document
              .querySelector(this._templateSelector)
              .content.querySelector('.element')
              .cloneNode(true);
   return cardTemplate;
};
 
generateCard() {
  this._card = this._getTemplate();
  this._cardImage = this._card.querySelector('.element__image');
  this._cardLikeButton = this._card.querySelector('.element__like');
  this._cardDeleteButton = this._card.querySelector('.element__delete-element');
  this._cardImage.src = this._elementLink;
  this._cardImage.alt = this._elementName;
  this._cardTitle = this_card.querySelector('.element__text');
  this._cardTitle.textContent = this._elementName;

  this._setEventiListeners();
  return this._card;
};

_likeCard() {
  this._cardLike.classList.toggle('element__like-active');
};

_deleteCard() {
  this._card.remove();
};

_setEventiListeners() {
  this._cardDeleteButton.addEventListener('click', () => {
    this._deleteCard();
  });

  
  this._cardLike.addEventListener('click', () =>{
    this._likeCard();
  });

  this._cardImage.addEventListener('click', () =>{
    this._openImagePopup(this._elementLink, this._elementName);

  });
}

}
