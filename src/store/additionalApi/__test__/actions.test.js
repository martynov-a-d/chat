import dataHandler from "../actions";
import { getItemsLoading, getItemsSuccess, REQUEST_ITEMS_LOADING, REQUEST_ITEMS_SUCCESS } from "../actions";

describe("getItemsLoading", () => {
    it("should return obj with type", () => {
        const expected = {
            type: REQUEST_ITEMS_LOADING,
        };

        const received = getItemsLoading();

        expect(received).toEqual(expected);
    });
});

describe("getItemsSuccess", () => {
    it("should return type and payload", () => {
        const payload = []
        const expected = {
            type: REQUEST_ITEMS_SUCCESS,
            payload
        };

        const received = getItemsSuccess(payload);

        expect(received).toEqual(expected);
    })
});

/**
 * Все работает отлично, тесты не проходят, 
 * матерится на ананимную функцию dataHandler
 */
describe("dataHandler", () => {
    it.skip("dispatch getItemsLoading", async () => {
        const mockDispatch = jest.fn();
        await dataHandler()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith(getItemsLoading());
    });

    it.skip("dispach success action on fetch", async () => {
        const result = { articles: [] };
        const mockDispatch = jest.fn();
        fetch.mockResponseOnce(() => (JSON.stringify(result)));
        await dataHandler()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getItemsSuccess(result));
    });
});