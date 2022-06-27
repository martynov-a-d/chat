export function dataHandler(api, elem) {
    fetch(api)
        .then((response) => {
            if (!response.ok) {
                throw new Error("error!")
            }
            return response.json()
        })
        .then((result) => { elem(result) })
        .catch((error) => console.log(error))
}