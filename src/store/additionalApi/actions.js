export const GET_WEATHER_DATA = "GET::WETHER_DATA";
export const GET_ARTICLES_DATA = "GET::ARTICLES_DATA";
export const REQUEST_ITEMS_LOADING = "REQUEST::ITEMS_LOADING";
export const REQUEST_ITEMS_SUCCESS = "REQUEST::ITEMS_SUCCESS";
export const REQUEST_ITEMS_FAILURE = "REQUEST::ITEMS_FAILURE";

/**
 * 
 * Middleware по статусам
 */
export const getItemsLoading = (component) => ({
    type: REQUEST_ITEMS_LOADING,
    component: component,
});

export const getItemsSuccess = (items, component) => ({
    type: REQUEST_ITEMS_SUCCESS,
    payload: items,
    component: component,
});

export const getItemsFailure = (err, component) => ({
    type: REQUEST_ITEMS_FAILURE,
    payload: err,
    component: component,
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