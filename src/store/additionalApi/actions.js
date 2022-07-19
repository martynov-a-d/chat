export const GET_WEATHER_DATA = "GET::WETHER_DATA";
export const GET_ARTICLES_DATA = "GET::ARTICLES_DATA";
export const REQUEST_ITEMS_LOADING = "REQUEST::ITEMS_LOADING";
export const REQUEST_ITEMS_SUCCESS = "REQUEST::ITEMS_SUCCESS";
export const REQUEST_ITEMS_FAILURE = "REQUEST::ITEMS_FAILURE";

/**
 * 
 * Middleware по статусам
 */
export const getItemsLoading = () => ({
    type: REQUEST_ITEMS_LOADING,
});

export const getItemsSuccess = (items) => ({
    type: REQUEST_ITEMS_SUCCESS,
    payload: items,
});

export const getItemsFailure = (err) => ({
    type: REQUEST_ITEMS_FAILURE,
    payload: err,
});

/**
 * Middlewares по данным
 * @param {*} payload 
 * @returns 
 */
export const getWeatherData = (payload) => ({
    type: GET_WEATHER_DATA,
    payload,
});
export const getArticlesData = (payload) => ({
    type: GET_ARTICLES_DATA,
    payload,
});