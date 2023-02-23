import React, { PureComponent } from 'react'
import axios from "axios"
import { useState } from 'react'

const AxiosComponent = () => {
    const [data, setData] = useState()

    const handleClick = () => {
        console.log("서버로 요청을 보냅니다.")
        const requestUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-22&sortBy=publishedAt&apiKey=dd1bf69002c44c529a2b249eb7fc93c5"
        axios.get(requestUrl).then((response) => {
            console.log(response)
            setData(response.data)
        }) 
    }
    return (
        <div>
            <button onClick={handleClick}>데이터 통신하기</button>
        </div>
    )
}

export default AxiosComponent