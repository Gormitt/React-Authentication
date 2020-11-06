// libraries
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// components
import Articles from "../../containers/Articles/Articles";
import UserInfo from '../../containers/UserInfo/UserInfo';
import About from "../../containers/About/About";
// styles
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return ( 
            <div className = {classes.Layout}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = "/">Home</NavLink></li>
                            <li><NavLink to = "/secret">User</NavLink></li>
                            <li><NavLink to = "/about">About</NavLink></li>
                            <li><button onClick = {this.props.auth.login}>Login</button></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Route exact path="/" component = {Articles} />
                    <Route exact path="/secret" component = {UserInfo} />
                    <Route exact path="/about" component = {About} />
                </main>
            </div>
        );
    };
}

export default Layout;