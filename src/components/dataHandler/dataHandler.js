import { getItemsFailure, getItemsLoading, getItemsSuccess } from "../../store/additionalApi/actions";

const dataHandler = () => async (api, elem, component, dispatch) => {
    dispatch(getItemsLoading(component));
    try {
        await fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("not ok!")
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

export default dataHandler()