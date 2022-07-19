
export const dataHandler = (api, elem) => {
    try {
        fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("error!")
                }
                return response.json()
            })
            .then((result) => { elem(result) })
    }
    catch (error) { console.log(error) }
};