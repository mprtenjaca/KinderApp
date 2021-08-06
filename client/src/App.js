import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { refreshToken } from './redux/actions/authAction.js'

import Alert from './components/alert/Alert.js';
import PageRender from './customRouter/pageRender.js';
import Home from './pages/home.js';
import Login from './pages/login.js';
import Header from './components/Header.js';
import Register from './pages/register.js';
import PrivateRouter from './customRouter/privateRouter.js';
import EditProfile from './components/profileComponents/EditProfile.js';

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
                {auth.token && <Header/>}
                <Route exact path="/" component={auth.token ? Home : Login} />
                <Route exact path="/register" component={Register} />

                <PrivateRouter exact path="/:page" component={PageRender} />
                <PrivateRouter exact path="/:page/:id" component={PageRender} />
                <Route exact path="/editProfile" component={EditProfile} />
            </div>
        </div>
        </Router>
    );
}

export default App;