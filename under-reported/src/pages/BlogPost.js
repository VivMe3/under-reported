import React, { Fragment } from 'react';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import '../scss/App.scss';
import { Link } from 'react-router-dom';

const Blog = ({content}) => {

  {/*
              <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {content.created}</p>
              <h1>{content.title}</h1>
              <div className='blog-subCategory'>
                
                  <div>
                    <Chip label={content.tags[0].name} />
                  </div>
                
              </div>
            </header>
            <img src={content.featured_image} alt='cover' />
            <div className='blog-content' dangerouslySetInnerHTML={{__html: content.body}}></div>
          </div>
   */}

   console.log(content);

    return (
      <Fragment>
        <Link className='blog-goBack' to='/'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {content ? (
          <div className='blog-wrap'>
            <h1>{content.title}</h1>
            <div className='blog-content' dangerouslySetInnerHTML={{__html: content.content}}></div>
          </div>
        ) : (
          <EmptyList />
        )}
      </Fragment>
    );
  };
export default Blog;