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
        headers: this._headers})
        .then((res) => {  return res.json()})
    };

      
}

export default Api;