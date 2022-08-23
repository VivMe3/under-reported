import React from 'react';
import '../scss/FeaturedStory.scss';
import Random from '../imgs/random.jpg';

const FeaturedStory = ({ link, title, description }) => {
  return (
    <div className="featuredStory">
      <a href={link} className="ui image">
        <img src={Random} alt="random" />
        <div className="caption">
          <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="overlay">
          <i className="arrow circle right icon big"></i>
        </div>
      </a>
    </div>
  )
}

export default FeaturedStory;