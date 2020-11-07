// libraries
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// components
import Articles from "../../containers/Articles/Articles";
import UserInfo from '../../containers/UserInfo/UserInfo';
import About from "../../containers/About/About";
import Callback from '../../containers/Callback/Callback';
// styles
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        console.log(this.props.auth.isAuthenticated());

        const button = this.props.auth.isAuthenticated() ?
            <button onClick = {this.props.auth.logout}>Logout</button> :
            <button onClick = {this.props.auth.login}>Login</button> 

        return ( 
            <div className = {classes.Layout}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to = "/">Home</NavLink></li>
                            <li><NavLink exact to = "/secret">User</NavLink></li>
                            <li><NavLink exact to = "/about">About</NavLink></li>
                            <li>{button}</li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Route exact path="/" component = {Articles} />
                    <Route exact path="/secret" component = {UserInfo} />
                    <Route exact path="/about" component = {About} />
                    <Route exact path="/callback" component = {Callback} />
                </main>
            </div>
        );
    };
}

export default Layout;