import React, { Component } from 'react';

import css from './Home.scss';

import Container from './../components/Container.jsx';



class Home extends Component {
    constructor() {
        super();
        
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <p>Home page</p>
            </Container>
        );
    }
}

export default Home;