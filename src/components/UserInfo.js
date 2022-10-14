class UserInfo {
    constructor({userInfo, info, avatarUserClass}){
        this._htmlUserInfo = document.querySelector(userInfo);
        this._htmlInfo = document.querySelector(info);
        this._avatarUser = document.querySelector(avatarUserClass);
        this._id = '';
    }
    getUserInfo() {
        return {name: this._htmlUserInfo.textContent, 
                info: this._htmlInfo.textContent};
    }
    setUserInfo({name, about, avatar, _id}) {
        this._htmlUserInfo.textContent = name;
        this._htmlInfo.textContent = about;
        this._avatarUser.src = avatar;
        this._id = _id;
    }

    setAvatar(data){
        this._avatarUser.src = data.link;
    }

    getMyId(){
        return this._id;
    }
}

export default UserInfo;