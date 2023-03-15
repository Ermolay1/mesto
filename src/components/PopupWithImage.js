import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector(".popup__image ");
        this._imageName = this._popup.querySelector(".popup__image-name");

    }
    open(item) {
        this._image.src = item.link;
        this._image.alt = item.name;
        this._imageName.textContent = item.name;
        super.open();
    }
}
