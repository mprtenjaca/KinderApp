import { PROFILE_TYPES } from '../actions/profileAction'
//import { EditData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    childeren: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case PROFILE_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case PROFILE_TYPES.GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            };
        case PROFILE_TYPES.GET_ID:
            return {
                ...state,
                ids: [...state.ids, action.payload]
            };
        case PROFILE_TYPES.GET_CHILD:
            return {
                ...state,
                childeren: [...state.childeren, action.payload]
            };
        // case PROFILE_TYPES.UPDATE_CHILD:
        //     return {
        //         ...state,
        //         posts: EditData(state.posts, action.payload._id, action.payload)
        //     };
        default:
            return state;
    }
}

export default profileReducer