import React from 'react';
import Login from '../login';
import App from '../App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = props => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
        </div>
    </Router>
);

export default Routes;