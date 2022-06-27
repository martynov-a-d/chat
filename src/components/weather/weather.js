import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dataHandler } from "../dataHandler/dataHandler"
import { apiWeather, apiArticles } from "./apiBox"
import { getArticlesData, getWeatherData } from "../../store/weather/actions"
import { selectorArticles, selectorWeather } from "../../store/weather/selectors"

export const Weather = () => {
    const dispatch = useDispatch();
    const [dataWeather, GetWether] = useState([]);
    const [dataArticles, GetArticles] = useState([]);
    dispatch(getWeatherData(dataWeather));
    dispatch(getArticlesData(dataArticles))

    useEffect(() => {
        dataHandler(apiWeather, GetWether)
        dataHandler(apiArticles, GetArticles)
    }, []);

    const articles = useSelector(selectorArticles)
    const weather = useSelector(selectorWeather)
    const timeToTemp = weather.hourly
    const tempData = []
    const timeData = []
    const test = []
    let todayTemp = ""
    if (timeToTemp) {
        tempData.push(timeToTemp.temperature_2m)
        timeData.push(timeToTemp.time)
        for (let i = 0; timeToTemp.time.length > i; i++) {
            test.push({
                id: i,
                temperature: timeToTemp.temperature_2m[i],
                time: timeToTemp.time[i],
            })
        }
        for (let i = 0; test.length > i; i++) {
            if (Date.parse(test[i].time) <= Date.parse(new Date())) {
                if (Date.parse(new Date()) <= Date.parse(test[i + 1].time)) {
                    // return todayTemp = test[i].temperature
                }
            }
        }
    }
    return <>
        <div>
            <p>Weather</p>
            <p>{todayTemp}</p>
        </div>
        <div>
            <p>Articles</p>
            <ul>
                {articles.map((elem) => (<li key={elem.id}>{elem.title}</li>))}
            </ul>
        </div>
    </>
}
