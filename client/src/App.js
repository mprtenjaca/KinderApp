import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { refreshToken } from './redux/actions/authAction.js'

import Alert from './components/alert/Alert.js';
import PageRender from './pageRender.js';
import Home from './pages/home.js';
import Login from './pages/login.js';

const App = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(refreshToken())
    }, [dispatch])

    return(
        <Router>
        <Alert/>
        <div className="App">
            <div className="main">
            <Route exact path="/" component={auth.token ? Home : Login} />
                <Route exact path="/:page" component={PageRender} />
                <Route exact path="/:page/:id" component={PageRender} />
            </div>
        </div>
        </Router>
    );
}

export default App;