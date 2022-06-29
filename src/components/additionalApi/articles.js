import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticlesData } from "../../store/additionalApi/actions"
import { dataHandler } from "../dataHandler/dataHandler"
import { apiArticles } from "./apiBox"
import { selectorArticles } from "../../store/additionalApi/selectors"

export const Articles = () => {
    const [dataArticles, GetArticles] = useState([])
    const dispatch = useDispatch()
    dispatch(getArticlesData(dataArticles))
    useEffect(() => {
        dataHandler(apiArticles, GetArticles)
    }, [])
    const articles = useSelector(selectorArticles)
    return <>
        <div className="articles">
            <ul>
                {articles.map((elem) => (<li key={elem.id}>{elem.title}</li>))}
            </ul>
        </div>
    </>
}