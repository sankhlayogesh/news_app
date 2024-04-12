import React from 'react'

function NewsItem(props) {
  let {title , description , imgUrl , newsUrl ,publishedTime , author , source } = props
  return (
    <div className='my-3'>
       <div className="card">
        <div style={{display: "flex" , justifyContent: 'flex-end', position: 'absolute' , right: '0'}}>
          <span className="badge rounded-pill bg-danger" style={{left: "80%", zIndex: '1'}}>
            {source} 
          </span>
        </div>
        <img src={imgUrl ? imgUrl : 'https://www.financialexpress.com/wp-content/uploads/2024/04/solar-eclipse-2024.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-danger">{author ? `By ${author} On`  : 'By Unknown'} {new Date(publishedTime).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark ">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
