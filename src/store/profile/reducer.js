//---- import / export ----//
import { SetUserName, SignIn, SignOut } from "./actions";

const startState = {
    name: "",
    auth: false,
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export function profileReducer(state = startState, action) {
    switch (action.type) {
        case SetUserName:
            return {
                ...state,
                name: action.name
            }
        case SignIn:
            return {
                ...state,
                auth: true
            }
        case SignOut:
            return {
                ...state,
                auth: false
            }
        default:
            return state;
    }
}