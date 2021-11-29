//---- import / export ----//
import { CheckBoxToggle } from "./actions";

const startState = {
    checkbox: false,
    name: 'ALEX'
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export function profileReducer(state = startState, action) {
    switch (action.type) {
        case CheckBoxToggle:
            return {
                ...state,
                checkbox: !state.checkbox
            }
    
        default:
            return state;
    }
}