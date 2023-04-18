import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostDescription } from '../config/Api';
import { convertDate, handleDescription } from '../utils/Utils';
import '../scss/NewsFeed.scss';

const NewsFeed = ({ blogs }) => {
  const [descriptions, setDescriptions] = useState([]);
  let dateFormat = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }

  useEffect(() => {
    (async function () {
      setDescriptions(await Promise.all(blogs.map(blog => blogPostDescription(blog.id))));
    })()
  }, [blogs]);

  const renderedNews = blogs.map((blog, index) => {
    return (
      <div key={`news-${index}`} className="newsItem">
        <Link to={`/blog/${blog.id}`}>
          <h4 className="title">{blog.title}</h4>
          <div className="content">{descriptions[index] && descriptions[index].items ? handleDescription(descriptions[index].items[0]['content']) : ''}</div>
          <div className="meta"><i className="calendar icon"></i> {convertDate(blog.published, dateFormat)}</div>
        </Link>
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