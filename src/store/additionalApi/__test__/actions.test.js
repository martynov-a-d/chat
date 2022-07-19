import { getItemsLoading, REQUEST_ITEMS_LOADING } from "../actions ";

it("should return obj with type", () => {
    const expected = {
        type: REQUEST_ITEMS_LOADING,
    };

    const received = getItemsLoading();

    expect(received).toEqual(expected);
}); 