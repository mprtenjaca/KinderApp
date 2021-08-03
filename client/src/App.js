import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Notify from './components/notify/Notify.js';

import PageRender from './pageRender.js';
import Home from './pages/home.js';
import Login from './pages/login.js';

const App = () => {
    return(
        <Router>
        <Notify/>
        <div className="App">
            <div className="main">
            <Route exact path="/" component={Login} />
                <Route exact path="/:page" component={PageRender} />
                <Route exact path="/:page/:id" component={PageRender} />
            </div>
        </div>
        </Router>
    );
}

export default App;