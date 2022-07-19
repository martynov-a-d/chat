import { getItemsFailure, getItemsLoading, getItemsSuccess } from "../../store/additionalApi/actions";

export const dataHandler = async (api, elem, dispatch, component) => {
    dispatch(getItemsLoading(component));
    try {
        await fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("error!")
                }
                return response.json()
            })
            .then((result) => {
                elem(result);
                dispatch(getItemsSuccess(result, component));
            })
    } catch (error) {
        dispatch(getItemsFailure(error, component));
    }
};