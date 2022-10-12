class Api {
    constructor(configApi){
        this._url = configApi.url;
        this._headers = configApi.headers;

    }
    getAllCard(){
       return fetch(`${this._url}/cards`, {
        headers: this._headers})
        .then((res) => {  return res.json()})
    };
    
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers})
        .then((res) => {  return res.json()})
    };

    setUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link,
              })
        }).then((res) => {  return res.json()});
    }

    setUserInfo(data){
        return fetch(`${this._url}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.nameProfile,
                about: data.infoProfile
              })
        }).then((res) => {  return res.json()});
    }

    addCard({name, link}){
        return fetch(`${this._url}/cards`,{
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        }).then((res) => {return res.json()});
    }

    delCard(idCard){
        return fetch(`${this._url}/cards/${idCard}`,{
            method: 'DELETE',
            headers: this._headers
        }).then((res) => {return res.json()});
    }
    

      
}

export default Api;