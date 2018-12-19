import * as actions from '../actions/types';
import _ from 'lodash';

export default(state= {}, action) => {
    switch(action.type) {
        case actions.FETCH_STREAMS:
        return { ...state, ..._.mapKeys(action.payload, 'id')};

        case actions.FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
       
        case actions.CREATE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
       
        case actions.EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload };
       
        case actions.DELETE_STREAM: 
        return _.omit(state, action.payload)
       
        default:
            return state;
    }
}