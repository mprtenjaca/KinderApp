import { combineReducers } from 'redux';
import auth from '../reducers/authReducer.js';
import alert from '../reducers/alertReducer.js';
import profile from '../reducers/profileReducer.js';

export default combineReducers({
    auth,
    alert,
    profile
});
