export default class Card{
    constructor(data, templateSelector, { handleCardClick }) {
      this._link = data.link;
      this._name = data.name;
      this._templateSelector = templateSelector;
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.element__image');
      this._likeButton = this._element.querySelector('.element__like');
      this._title = this._element.querySelector('.element__text');
      this._handleCardClick = handleCardClick.bind(this);
    };

    _getTemplate() {
      const cardElement = document
                 .querySelector(this._templateSelector)
                 .content.querySelector(".element")
                 .cloneNode("true");
  
      return cardElement;
    };
    
    generateCard = () => {
      this._image.src = this._link;
      this._image.alt = this._name;
      this._title.textContent = this._name;
      this._setEventListeners();
      return this._element;
    };

    _handleDelete() {
      this._element.remove();
      this._element = null;
    };

    _handleLike() {
      this._likeButton.classList.toggle('element__like-active');
    };

    _handleOpenImage() {
      this._handleCardClick();
    };

    _setEventListeners() {
      this._element.querySelector('.element__delete-element').addEventListener("click", this._handleDelete.bind(this));
      this._element.querySelector('.element__like').addEventListener("click", this._handleLike.bind(this));
      this._element.querySelector('.element__image').addEventListener("click", () => {
        this._handleOpenImage();
      });
    }
  
  
  }
  