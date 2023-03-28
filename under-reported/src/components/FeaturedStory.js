import React, { useState, useEffect } from 'react';
import '../scss/FeaturedStory.scss';
import Random from '../imgs/random.jpg';
import { Link } from 'react-router-dom';
import { blogPostDescription } from '../config/Api';
import { getFirstImage, handleDescription } from '../utils/Utils';

const FeaturedStory = ({ blog }) => {
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    if (blog.id) { //needed to prevent first-load null api call
      (async function() {
        setDescriptions(await Promise.all([blog].map(blog => blogPostDescription(blog.id))));
      })()
    }
  } , [blog]);

  return (
    <div className="featuredStory">
      <Link className="ui image" to={`/blog/${blog.id}`}> 
        {getFirstImage(blog.content) &&
         <div className='blog-content' dangerouslySetInnerHTML={{__html: getFirstImage(blog.content)}}></div>
        }
        {!getFirstImage(blog.content) && 
          <div className='blog-content'><img src={Random} alt="Random" /></div>
        }
        <div className="caption">
          <div className="content">
            <h1>{blog.title}</h1>
            <p>{descriptions[0] && descriptions[0].items ? handleDescription(descriptions[0].items[0]['content']) : ''}</p>
          </div>
        </div>
        <div className="overlay">
          <i className="arrow circle right icon big"></i>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedStory;