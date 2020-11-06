import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "gormit.eu.auth0.com",
        clientID: "FX6jN7MxhKmz6dWQoonsuTymxPxpbNUK",
        redirectUri: "http://localhost:3000",
        audience: "gormit.eu.auth0.com/userinfo",
        responseType: "token token_id",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }
}