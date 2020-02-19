import React, { Component } from 'react';
import { Link } from "react-router-dom";

import css from './Navigation.scss';



class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default Navigation;

