import { combineReducers } from 'redux';
import auth from '../reducers/authReducer.js';
import alert from '../reducers/alertReducer';

export default combineReducers({
    auth,
    alert
});
