import React, { Fragment, useState, useEffect } from 'react';
import StoryCards from '../components/StoryCards';
import { categoryBlogList } from '../config/Api';
import InfiniteScroll from "react-infinite-scroll-component";
import '../scss/Category.scss';

const Category = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState(9);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const defaultNumberOfPosts = 9;
  const increaseIndexBy = 3;

  useEffect(() => {
    categoryBlogList(category.toLowerCase()).then((res) => {
      if (res) {
        setBlogs(res.slice(0, defaultNumberOfPosts));
        if (res.length <= index) {
          setHasMore(false);
        } else {
          setIndex(index + increaseIndexBy)
        }
      }
    })
    setLoading(false);
  }, [category]);

  function getMore() {
    categoryBlogList(category.toLowerCase()).then((res) => {
      setBlogs(res.slice(0, index));
      if (res.length <= index) {
        setHasMore(false);
      } else {
        setIndex(index + increaseIndexBy)
      }
    });
  }

  return (
    <Fragment>
      <div className="category-container container-fluid main-body">
        <h1>{category}</h1>
        <div className="row">
          <div className="col-lg">
            {loading && 
              <div>
                <p style={{ textAlign: 'center' }}>
                  <b>Loading...</b>
                </p>
              </div>
            }
            {!loading && blogs.length === 0 && !hasMore && 
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
                    <a href="#" target="_top" style={{ textAlign: 'center' }}><p>Back to Top</p></a>
                  </div>
                }
              >
                <StoryCards blogs={blogs} />
              </InfiniteScroll>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Category;