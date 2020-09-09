export const fetchMovie = async(dispatch: any) => {
    const URL = "https://localhost:5001/api/movies/"

    const data = await fetch(URL)
    const dataJson = await data.json()
    return dispatch({
        type: "FETCH_MOVIES",
        payload: dataJson
    })

}


export const fetchSeries = async(dispatch: any) => {
    const URL = "https://localhost:5001/api/series/"

    const data = await fetch(URL)
    const dataJson = await data.json()
    return dispatch({
        type: "FETCH_SERIES",
        payload: dataJson
    })

}