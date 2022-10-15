class Api {
    constructor(configApi){
        this._url = configApi.url;
        this._headers = configApi.headers;

    }

    _onResponce(res) {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject({message: "Ошибка на стороне сервера:", res });
        }
    }
    

    getAllCard(){
       return fetch(`${this._url}/cards`, {
        headers: this._headers})
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    };
    
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers})
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    };

    setUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link,
              })
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    setUserInfo(data){
        return fetch(`${this._url}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.nameProfile,
                about: data.infoProfile
              })
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        });
    }

    addCard({name, link}){
        return fetch(`${this._url}/cards`,{
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    delCard(idCard){
        return fetch(`${this._url}/cards/${idCard}`,{
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    setCardLike(idCard){
        return fetch(`${this._url}/cards/${idCard}/likes`,{
            method: 'PUT',
            headers: this._headers
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    removeCardLike(idCard){
        return fetch(`${this._url}/cards/${idCard}/likes`,{
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            return this._onResponce(res);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    

      
}

export default Api;