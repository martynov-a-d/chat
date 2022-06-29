import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dataHandler } from "../dataHandler/dataHandler"
import { apiWeather } from "./apiBox"
import { getWeatherData } from "../../store/additionalApi/actions"
import { selectorWeather } from "../../store/additionalApi/selectors"

export const Weather = () => {
    const dispatch = useDispatch()
    const [dataWeather, GetWether] = useState([])
    dispatch(getWeatherData(dataWeather))

    useEffect(() => {
        dataHandler(apiWeather, GetWether)
    }, [])
    const weather = useSelector(selectorWeather)
    const hourly = weather.hourly
    const hourly_units = weather.hourly_units
    const arrWeather = []
    let todayTemp = ""
    if (hourly) {
        for (let i = 0; hourly.time.length > i; i++) {
            arrWeather.push({
                id: i,
                temperature: hourly.temperature_2m[i],
                time: hourly.time[i],
            })
        }
        for (let i = 0; arrWeather.length > i; i++) {
            if (Date.parse(arrWeather[i].time) <= Date.parse(new Date())) {
                if (Date.parse(new Date()) <= Date.parse(arrWeather[i + 1].time)) {
                    return todayTemp = arrWeather[i].temperature + hourly_units.temperature_2m
                }
            }
        }
    }
    return <>
        <div>
            <p>Weather</p>
            <p>{todayTemp}</p>
        </div>
    </>
}
