export const GET_WEATHER_DATA = "GET::WETHER_DATA";
export const GET_ARTICLES_DATA = "GET::ARTICLES_DATA";
export const getWeatherData = (payload) => ({
    type: GET_WEATHER_DATA,
    payload,
})
export const getArticlesData = (payload) => ({
    type: GET_ARTICLES_DATA,
    payload,
})