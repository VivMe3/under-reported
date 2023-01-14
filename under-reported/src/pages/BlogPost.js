import React, { Fragment, useState, useEffect } from 'react';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import '../scss/App.scss';
import { Link, useParams, useHistory } from 'react-router-dom';
import { blogPost } from '../config/Api';

const Blog = ({content}) => {

  const [blogPostItem, setBlogPostItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    blogPost(id).then((res) => {
      setBlogPostItem(res);
    })
  } , []);

  console.log(blogPostItem.content);

    return (
      <Fragment>
        {/* <Link className='blog-goBack' to='/'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link> */}
        {blogPostItem ? (
          <div className='blog-wrap main-body'>
            <h1>{blogPostItem.title}</h1>
            <div className='blog-content' dangerouslySetInnerHTML={{__html: blogPostItem.content}}></div>
          </div>
        ) : (
          <EmptyList />
        )}
      </Fragment>
    );
  };
export default Blog;