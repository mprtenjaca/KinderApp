import { CHILD_TYPES } from '../actions/childAction'
//import { EditData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    childeren: []
}

const childReducer = (state = initialState, action) => {
    switch (action.type){
        case CHILD_TYPES.CREATE_CHILD:
            return {
                ...state,
                childeren: [...state.childeren, action.payload]
            };
        default:
            return state;
    }
}

export default childReducer