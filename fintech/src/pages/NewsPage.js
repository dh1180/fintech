import React from 'react'
import AppHeader from '../components/Common/AppHeader'
import InputComponents from '../components/InputComponent'
import ListComponents from '../components/ListComponents'
import {useState} from 'react'
import axios from 'axios'

function NewsPage() {
  const [searchInputText, setSearchInputText] = useState("")
  const [newsList, setNewsList] = useState([])
  const handleSearchInputChange = (e) => {
    const {value} = e.target
    setSearchInputText(value)
    console.log(value)
  } 
  const handleSearchButtonClick = () => {
    console.log("서버로 요청을 보냅니다.")
    const requestUrl = `https://newsapi.org/v2/everything?q=${searchInputText}&from=2023-01-22&sortBy=publishedAt&apiKey=dd1bf69002c44c529a2b249eb7fc93c5`
    axios.get(requestUrl).then(({data}) => {
        console.log(data.articles)
        const articles = data.articles
        setNewsList(articles)
    }) 
    console.log("뉴스 내용")
  }
  return (
    <div>
        <AppHeader title={"뉴스 검색"}></AppHeader>
        <InputComponents 
        handleChange = {handleSearchInputChange}
        handleClick = {handleSearchButtonClick}>
        </InputComponents>
        <ListComponents newsList={newsList}></ListComponents>
        
    </div>
  )
}

export default NewsPage