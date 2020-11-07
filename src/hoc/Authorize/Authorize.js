import React, { Component } from "react";
import Auth from '../../Auth';

export default function authorize(WrappedComponent) {
    return class extends Component {
        render() {
            console.log(localStorage.getItem("access_token"));
            const auth = new Auth();
            return auth.isAuthenticated() ? 
                <WrappedComponent /> :
                <div>You have no permission to acces this page.</div>
        }
    }
}