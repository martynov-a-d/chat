import { GET_WEATHER_DATA, GET_ARTICLES_DATA, REQUEST_ITEMS_LOADING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILURE } from "./actions";


const initialState = []

export const externalApiStatusReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case REQUEST_ITEMS_LOADING:
            return {
                ...state,
                request: {
                    component: payload.component,
                    status: "REQUEST_STATUS.LOADING",
                }
            }
        case REQUEST_ITEMS_SUCCESS:
            return {
                ...state,
                request: {
                    component: payload.component,
                    status: "REQUEST_STATUS_SUCCESS",
                }
            }
        case REQUEST_ITEMS_FAILURE:
            return {
                ...state,
                request: {
                    component: payload.component,
                    error: "ERROR",
                }
            }
        default:
            return state;
    }
}

export const weatherReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case GET_WEATHER_DATA:
            return {
                ...state,
                weatherData: payload.payload,
            };
        default:
            return state;
    }
}

export const articlesReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case GET_ARTICLES_DATA:
            return {
                ...state,
                articlesData: payload.payload,
            };
        default:
            return state;
    }
}