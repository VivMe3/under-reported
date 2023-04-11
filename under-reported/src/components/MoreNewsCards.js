import React, { Fragment, useState, useEffect } from 'react';
import '../scss/MoreNews.scss';
import { Link } from 'react-router-dom';
import { blogPostDescription } from '../config/Api';
import { getFirstImage, convertDate, handleDescription } from '../utils/Utils';
import Random from '../imgs/random.jpg';

const MoreNewsCards = ({ blogs }) => {
  const [descriptions, setDescriptions] = useState([]);
  let dateFormat = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }

  useEffect(() => {
    (async function() {
      setDescriptions(await Promise.all(blogs.map(blog => blogPostDescription(blog.id))));
    })()
  } , [blogs]);

  const renderedCards = blogs.map((blog, index) => {
    return (
      <Link key={`more-news-${index}`} className="row item" to={`/blog/${blog.id}`}>
        <div className="col-lg-3">
          {getFirstImage(blog.content) &&
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: getFirstImage(blog.content) }}></div>
          }
          {!getFirstImage(blog.content) &&
            <div className='blog-content'><img src={Random} alt="Random" /></div>
          }
        </div>
        <div className="col-lg-9">
          <h3 className="title" >{blog.title}</h3>
          {blog.published &&
            <p className="date">{convertDate(blog.published, dateFormat)}</p>
          }
          <p className="content">{descriptions[index] && descriptions[index].items ? handleDescription(descriptions[index].items[0]['content']) : ''}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className="view-more-cards">
      {renderedCards}
    </div>
  )
}

export default MoreNewsCards;