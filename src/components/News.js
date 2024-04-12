import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  let [articles , setArticles] = useState([]);
  let [page , setPage] = useState(1);
  let [totalResults , setTotalResults] = useState(0);
  let [isLoading , setIsLoading] = useState(false);                                        
  
  useEffect( () => {
    getApiData();
  },[]);

  document.title = `${capitalizeFirstLetter(props.category)} - News`

  const getApiData = async () =>{
    props.setProgress(10);
  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=20fca355a9694ceab00bdf884c63bd94&page=${page}&pageSize=${props.pageSize}`;
   setIsLoading(true);
   let data = await fetch(url);
   props.setProgress(30);
   let parsedData = await data.json();
   props.setProgress(70);
   setIsLoading(false);
   setArticles(parsedData.articles);
   setTotalResults(parsedData.totalResults);
   props.setProgress(100);
  }

  const handleNext = () => {
   
    if(page >= Math.ceil(totalResults/props.pageSize)){
      
    }else{
      setPage(++page);
      getApiData();
      }
  }
  const handlePrevious = () => {
    setPage(--page);
    getApiData();
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let fetchMoreData = async () => {
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=20fca355a9694ceab00bdf884c63bd94&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(++page);
    // setIsLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setIsLoading(false);
    setArticles( articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
        <h1  className="text-center" style={{marginTop: '70px'}} >News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {isLoading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
        > 
          <div className="container">
            <div className="row">
              {!isLoading && articles.map((item) => {
                return <div className="col-md-4" key={item.url}>
                          <NewsItem  title= {item.title ? item.title.slice(0,39) : ''}  description = {item.description ? item.description.slice(0,88) : ''} imgUrl = {item.urlToImage ? item.urlToImage : 'https://www.financialexpress.com/wp-content/uploads/2024/04/solar-eclipse-2024.jpg'} newsUrl={item.url} 
                              publishedTime={item.publishedAt} author = {item.author ? item.author : ''} source = {item.source.name}/>
                        </div> 
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-end">
          <button disabled= {page <= 1} type="button" onClick={handlePrevious} className="btn btn-dark">Previous</button>
          <button  disabled= {page >= Math.ceil(totalResults/props.pageSize)}  type="button" onClick={handleNext} className="btn btn-dark mx-2">Next</button>
        </div> */}
   
    </>
  )
}

export default News
