import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from './Request'
function Home() {
  return (
    <div>
      <Main/>
      <Row rowId = "1" fetchUrl ={requests.requestUpcoming} title ="UpComing"/>
      <Row rowId = "2" fetchUrl ={requests.requestPopular} title ="Popular"/>
      <Row rowId = "3" fetchUrl ={requests.requestTrending} title ="Trending"/>
      <Row rowId = "4" fetchUrl ={requests.requestTopRated} title ="TopRated"/>
      <Row rowId = "5" fetchUrl ={requests.requestHorror} title ="Horror"/>
    </div>
  )
}

export default Home
