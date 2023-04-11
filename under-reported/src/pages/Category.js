import React, { Fragment, useState, useEffect } from 'react';
import '../scss/Category.scss';
import StoryCards from '../components/StoryCards';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import { categoryBlogList } from '../config/Api';
import InfiniteScroll from "react-infinite-scroll-component";

const Category = ({ category, cards, data }) => {

  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    categoryBlogList(category.toLowerCase()).then((res) => {
      if (res) {
        setBlogs(res.slice(0,9));
        if (res.length <= index) {
          setHasMore(false);
        } else {
          setIndex(index+3)
        }
      }
    })
  } , [category]);

  function getMore() {
    categoryBlogList(category.toLowerCase()).then((res) => {
      setBlogs(res.slice(0, index));
      if (res.length <= index) {
        setHasMore(false);
      } else {
        setIndex(index+3)
      }
    });
  }

    return (
        <Fragment>
          <div className="category-container container-fluid main-body">
            <h1>{category}</h1>
            <div className="row">
              <div className="col-lg">
                {blogs.length == 0 &&
                  <div>
                  <p style={{ textAlign: 'center' }}>
                    <b>No news items</b>
                  </p>
                </div>
                }
                {blogs.length > 0 && 
                  <InfiniteScroll
                    dataLength={index - 1}
                    next={getMore}
                    hasMore={hasMore}
                    loader={
                      <p style={{ textAlign: 'center' }}>
                        <b>Scroll to load more...</b>
                      </p>
                    }
                    endMessage={
                      <div style={{ paddingBottom: '2rem' }}>
                        <p style={{ textAlign: 'center' }}>
                          <b>No more news items</b>
                        </p>
                        <a href="#" style={{ textAlign: 'center' }}><p>Back to Top</p></a>
                      </div>
                    }
                  >
                    <StoryCards blogs={blogs}/>
                  </InfiniteScroll>
                }
              </div>
            </div>
          </div>
        </Fragment>
      );
}

export default Category;