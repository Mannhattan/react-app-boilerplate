import React, { Component } from 'react';
import { Link } from "react-router-dom";

import css from './Container.scss';

import Navigation from '../components/Navigation.jsx';

import logo from './../assets/images/logo.png';



class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <img src={logo} alt="logo"/>

                <h1>React app boilerplate</h1>

                <Navigation />

                {this.props.children}
            </div>
        );
    }
}

export default Container;