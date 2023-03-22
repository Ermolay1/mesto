/*export default class Card{
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
      const card = document
                 .querySelector(this._templateSelector)
                 .content.querySelector(".element")
                 .cloneNode("true");
  
      return card;
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
  
  
  }*/
  export default class Card {
    constructor({data, templateSelector, userId, handleCardClick, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
    }

    _getTemplate() {
      this._card = document
                 .querySelector(this._templateSelector)
                 .content.querySelector(".element")
                 .cloneNode("true");
  
      return this._card;
    }

    deleteCard() {
      this._element.remove();
      this._element = null;
    }

    _setEventListeners() {
      this._image.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      })
      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteIconClick(this._cardId);
      })
       this._likeButton.addEventListener('click', () => {
        if (this._likeButton.classList.contains('element__like-active')) {
          this._handleRemoveLike(this._cardId);
        } else {
          this._handleSetLike(this._cardId);
        }
       })

    }

    generateCard() {
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.element__image');
      this._likeButton = this._element.querySelector('.element__like');
      this._likesNumber = this._element.querySelector('.element__likes-number');
      this._deleteButton = this._element.querySelector('.element__delete-element');
      this._title = this._element.querySelector('.element__text');
      this._image.src = this._link;
      this._image.alt = this._name;
      this._title.textContent = this._name;
      this._hasDeleteButton();
      this._isCardLiked();
      this._likesNumber.textContent = this._likes.length;
      this._setEventListeners();

      return this._element;
    }

    _isCardLiked() {
      if (this._likes.some((user) => {
        return this._userId === user._id;
      })) {
        this._likeButton.classList.add('element__like-active');
      }
    }

    handleLikeCard(data) {
      this._likes = data.likes;
      this._likesNumber.textContent = this._likes.length;
      this._likeButton.classList.toggle('element__like-active');
    }

    _hasDeleteButton() {
      if (this._userId !== this._cardOwnerId) {
        this._deleteButton.remove();
      }
    }
  }

  