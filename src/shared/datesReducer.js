import UPDATE_TYPE from "./ACTIONS.JS";
import NEXT_TYPE from "./ACTIONS.JS";
import PREV_TYPE from "./ACTIONS.JS";

export const datesReducer = ( state = {}, action) => {

    switch ( action.type ) {

        case PREV_TYPE:
            return {
                ...state,
                month: action.payload.month,
                year: action.payload.year
            };

        case NEXT_TYPE:
            return {
                ...state,
                month: action.payload.month,
                year: action.payload.year
            };

        case UPDATE_TYPE:
            return {
                ...state,
                month: action.payload,
                year: action.payload
            }
    
        default:
            return state;
    }

}