import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//routing pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';



class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        );
    }
}

export default Routing;

ReactDOM.render(<Routing />, document.getElementById('root'));