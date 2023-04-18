import React, { useState, useEffect } from 'react';
import '../scss/StoryCards.scss';
import { Link } from 'react-router-dom';
import { blogPostDescription } from '../config/Api';
import { getFirstImage, convertDate, handleDescription } from '../utils/Utils';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const StoryCards = ({ blogs }) => {
  //https://eszter.space/async-map/ 
  // blogger comment: https://developers.google.com/blogger/docs/3.0/using#RetrievingASpecificComment
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
      <div key={`story-${index}`} className="card">
        <Link className="image" to={`/blog/${blog.id}`}>
          {getFirstImage(blog.content) &&
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: getFirstImage(blog.content) }}></div>
          }
          {!getFirstImage(blog.content) &&
            <div className='blog-content'><Skeleton height="10rem" /></div>
          }
          <h3 className="title">{blog.title}</h3>
          {blog.published &&
            <p className="date">{convertDate(blog.published, dateFormat)}</p>
          }
          <p className="content">{descriptions[index] && descriptions[index].items ? handleDescription(descriptions[index].items[0]['content']) : ''}</p>
        </Link>
      </div >
    )
  })

  return (
    <div className="storycards ui link three stackable cards">
      {renderedCards}
    </div>
  )
}

export default StoryCards;