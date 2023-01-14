import React from 'react';
import '../scss/StoryCards.scss';
import { Link } from 'react-router-dom';

import Random from '../imgs/random.jpg';

const StoryCards = ({ cards, blogs }) => {

  const getFirstImage = (content) => {
    let imgTag = content.match(/<img([\w\W]+?)>/g);
    if (imgTag) {
      let newImgTag = imgTag[0].replace("/>", " referrerpolicy='no-referrer' />");
      console.log(newImgTag);
      return newImgTag;
    }
  }

  console.log('blogs',blogs);
  const renderedCards = blogs.map((blog, index) => {
    return (
      <div key={`story-${index}`} className="card">
        <Link className="image" to={`/blog/${blog.id}`}> 
        {getFirstImage(blog.content) &&
         <div className='blog-content' dangerouslySetInnerHTML={{__html: getFirstImage(blog.content)}}></div>
        }
        {!getFirstImage(blog.content) && 
          <img src={Random} alt="Random" />
        }
            <h3 className="title">{blog.title}</h3>
            { blog.published && 
              <p className="date">{blog.published}</p>
            }
            <p className="content">{blog.description? 'description': ''}</p>
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