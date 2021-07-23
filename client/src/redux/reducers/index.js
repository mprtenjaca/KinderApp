import { combineReducers } from 'redux';
import auth from '../reducers/authReducer.js';
import notify from '../reducers/notifyReducer.js';

export default combineReducers({
    auth,
    notify
});
