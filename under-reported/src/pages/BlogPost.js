import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { convertDate } from '../utils/Utils';
import { blogPost } from '../config/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Skeleton from 'react-loading-skeleton';
import '../scss/BlogPost.scss';
import '../scss/App.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const Blog = () => {
  const [blogPostItem, setBlogPostItem] = useState('');
  const { id } = useParams();
  const [visibility, setVisibility] = useState('none');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    blogPost(id).then((res) => {
      setBlogPostItem(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    })
  }, []);

  let dateFormat = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setVisibility('block');
    setTimeout(() => {
      setVisibility('none');
    }, 5000);
  }

  return (
    <Fragment>
      {loading &&
        <div className='blog-wrap main-body'>
          <Skeleton height="5rem" />
          <Skeleton count={20} />
        </div>
      }
      {blogPostItem &&
        <div className='blog-wrap main-body'>
          <p className="date">{convertDate(blogPostItem.published, dateFormat)}</p>
          <h1>{blogPostItem.title}</h1>
          <div className='blog-content' dangerouslySetInnerHTML={{ __html: blogPostItem.content }}></div>
          <div style={{ display: visibility }}>Link copied!</div>
          <div>
            <FontAwesomeIcon icon={faLink} className="share-icon" onClick={copyLink} />
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="item">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="share-icon" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Check%20out%20this%20article!&via=`} target="_blank" rel="noopener noreferrer" className="item">
              <FontAwesomeIcon icon="fa-brands fa-twitter" className="share-icon" />
            </a>
            <a href={`mailto:%7Bemail_address%7D?subject=Check%20out%20this%20article:%20${blogPostItem.title}&body=Found%20this%20article%20and%20wanted%20to%20share%20with%20you:%20${window.location.href}%20`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="share-icon" />
            </a>
          </div>
          <div className="author"><FontAwesomeIcon icon={faCircleUser} size="2x" />By Solomon Abo</div>
        </div>
      }
      {!blogPostItem && !loading &&
        <div className='blog-wrap main-body'>
          <h1>Post not found</h1>
        </div>
      }
    </Fragment>
  );
};

export default Blog;