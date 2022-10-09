class UserInfo {
    constructor({userInfo, info}){
        this._htmlUserInfo = document.querySelector(userInfo);
        this._htmlInfo = document.querySelector(info);
    }
    getUserInfo() {
        return {name: this._htmlUserInfo.textContent, 
                info: this._htmlInfo.textContent};
    }
    setUserInfo({name, about}) {
        this._htmlUserInfo.textContent = name;
        this._htmlInfo.textContent = about;
    }
}

export default UserInfo;