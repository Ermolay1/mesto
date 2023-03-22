export default class UserInfo {
    constructor({ username, description, avatar }) {
      this._username = document.querySelector(username);
      this._description = document.querySelector(description);
      this._avatar = document.querySelector(avatar);
    }
    getUserInfo() {
       const userInfo = {
        username: this._username.textContent,
        description: this._description.textContent,
        avatar: this._avatar.src
       }
       return userInfo;
    }
    setUserInfo(data) {
      this._username.textContent = data.name;
      this._description.textContent = data.about;
      this._avatar.src = data.avatar;
    }
  }