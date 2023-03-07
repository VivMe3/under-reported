import React, { Fragment, useState, useEffect } from 'react';
import '../scss/StoryCards.scss';
import { Link } from 'react-router-dom';
import { blogPostDescription } from '../config/Api';

import Random from '../imgs/random.jpg';

const StoryCards = ({ blogs }) => {
  //https://eszter.space/async-map/ 
  // blogger comment: https://developers.google.com/blogger/docs/3.0/using#RetrievingASpecificComment
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    (async function() {
      setDescriptions(await Promise.all(blogs.map(blog => blogPostDescription(blog.id))));
    })()
  } , [blogs]);

  const getFirstImage = (content) => {
    let imgTag = content.match(/<img([\w\W]+?)>/g);
    if (imgTag) {
      let newImgTag = imgTag[0].replace("/>", " referrerpolicy='no-referrer' />");
      return newImgTag;
    }
  }

  let option = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }

  function convertDate(date) {
    return new Date(date).toLocaleDateString('en-US',option);
  }

  function handleDescription(e) {
    const description = new DOMParser().parseFromString(e, 'text/html');
    const truncated = truncateString(description.body.innerHTML, 150);
    return truncated;
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  const renderedCards = blogs.map((blog, index) => {
      return (
      <div key={`story-${index}`} className="card">
        <Link className="image" to={`/blog/${blog.id}`}> 
        {getFirstImage(blog.content) &&
         <div className='blog-content' dangerouslySetInnerHTML={{__html: getFirstImage(blog.content)}}></div>
        }
        {!getFirstImage(blog.content) && 
          <div className='blog-content'><img src={Random} alt="Random" /></div>
        }
            <h3 className="title">{blog.title}</h3>
            { blog.published && 
              <p className="date">{convertDate(blog.published)}</p>
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