import { combineReducers } from 'redux';
import auth from '../reducers/authReducer.js';
import alert from '../reducers/alertReducer.js';
import profile from '../reducers/profileReducer.js';
import child from '../reducers/childReducer.js';

export default combineReducers({
    auth,
    alert,
    profile,
    child
});
