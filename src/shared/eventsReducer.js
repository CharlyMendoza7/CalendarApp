import ADD_TYPE from "./ACTIONS.JS";

export const eventsReducer = ( state = [], action) => {

    // console.log(state)
    switch ( action.type ) {

        case ADD_TYPE: 
            return [...state, action.payload]
    
        default:
            return state;
    }

}