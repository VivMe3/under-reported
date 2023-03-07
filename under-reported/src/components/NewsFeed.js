import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogList } from '../config/Api';

import '../scss/NewsFeed.scss';

const NewsFeed = ({ news }) => {
  const [blogs, setBlogs] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
      blogList().then((res) => {
        setBlogs(res);
      })
      // (async function() {
      //   const test = (await Promise.all(cards.map(card => blogPost(card.id))));
      //   console.log(test);
      // })()
    } , []);

    console.log(blogs);
  const renderedNews = news.map((item, index) => {
    return (
      <div key={`news-${index}`} className="newsItem">
        <a href="https://www.google.com">
          <h4 className="title">{item.title}</h4>
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
        <Link to="/more-news">View More News <i className="arrow circle right icon"></i></Link>
      </div>
    </div>
  )
}

export default NewsFeed;