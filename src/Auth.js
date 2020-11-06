/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "gormit.eu.auth0.com",
        clientID: "FX6jN7MxhKmz6dWQoonsuTymxPxpbNUK",
        redirectUri: "http://localhost:3000",
        audience: "articles_api",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        // this method parses auth results to json
        this.auth0.parseHash((err, authResults) => {
            // we check if we have anything inside
            if (authResults && authResults.accessToken && authResults.idToken) {
                // we define expire time of tokens
                const expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                // we store information in the local storage
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                // remove information from query string
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }
            else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        // return boolean which tells if actual time is greater than token expire time
        return new Date().getTime() < JSON.parse(localStorage.getItem("expires_at"));
    }
}