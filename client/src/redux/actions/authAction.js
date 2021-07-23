import { postDataAPI } from '../../utils/fetchData.js';

export const TYPES = {
    AUTH: 'AUTH'
}

export const login = (data) => async (dispatch) => {
    try{
        dispatch({type: 'NOTIFY', payload: {loading: true}});
        console.log("login action")

        const res = await postDataAPI('login', data);
        console.log(res);
    }catch(err){

    }
}