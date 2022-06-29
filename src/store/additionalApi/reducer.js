import { GET_WEATHER_DATA, GET_ARTICLES_DATA } from "./actions";


const initialState = []

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