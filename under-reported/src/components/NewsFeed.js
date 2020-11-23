import React from 'react';
import '../scss/NewsFeed.scss';

const NewsFeed = ({ news }) => {
  const renderedNews = news.map((item, index) => {
    return (
      <div key={`news-${index}`} className="newsItem">
        <a href="https://www.google.com">
          <h4>{item.title}</h4>
          <div className="content">{item.description}</div>
          <div className="meta"><i className="calendar icon"></i> {item.date}</div>
        </a>
      </div>
    )
  })
  return (
    <div className="newsfeed">
      <h2 className="header">Latest News</h2>
      {renderedNews}
      <div className="viewMore" >
        <a href="https://www.google.com">View More News <i class="arrow circle right icon"></i></a>
      </div>
    </div>
  )
}

export default NewsFeed;