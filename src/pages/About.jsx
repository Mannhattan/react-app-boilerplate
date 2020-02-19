import React, { Component } from 'react';

import css from './Home.scss';

import Container from './../components/Container.jsx';



class About extends Component {
    constructor() {
        super();
        
        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <p>About page</p>
            </Container>
        );
    }
}

export default About;