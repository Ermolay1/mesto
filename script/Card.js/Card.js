
class Card {
     constructor(template, initialCards){
       this._template = template;
       this._name = initialCards.name;
       this._link = initialCards.link;
     }

     _getElementFromTemplate() {
         return document.querySelector(this._template)
           .content
           .children[0]
           .cloneNode(true);
      }

       getElement() {

   this._element = this._getElementFromTemplate();
   
   return this._element;

}
}

export default Card;
