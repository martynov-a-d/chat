import { GET_WEATHER_DATA, GET_ARTICLES_DATA, REQUEST_ITEMS_LOADING } from "./actions";


const initialState = []

export const externalApiStatusReducer = (state = initialState, payload) => {
    switch (payload) {
        case REQUEST_ITEMS_LOADING:
            return {
                ...state,
                request: {
                    status: "REQUEST_STATUS.LOADING",
                    error: "",
                }
            }

        default:
            break;
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