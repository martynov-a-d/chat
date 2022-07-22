import dataHandler from "../../../components/dataHandler/dataHandler";
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

describe("dataHandler", () => {
    it("dispatch getItemsLoading", async () => {
        const mockDispatch = jest.fn();
        dataHandler()(mockDispatch);
        // dataHandler(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(getItemsLoading());
    });
})