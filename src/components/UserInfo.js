export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
      this._name = document.querySelector(nameSelector);
      this._description = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
      return { userName: this._name.textContent, userDescription: this._description.textContent };
    }
    setUserInfo({ input_name, input_description }) {
      this._name.textContent = input_name;
      this._description.textContent = input_description;
    }
  }