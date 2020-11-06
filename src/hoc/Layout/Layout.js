// libraries
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// components
import Articles from "../../containers/Articles/Articles";
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
                            <li><NavLink to = "/about">About</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Route exact path="/" component = {Articles} />
                    <Route exact path="/about" component = {About} />
                </main>
            </div>
        );
    };
}

export default Layout;