import React, { Fragment, useState, useEffect } from 'react';
import MoreNewsCards from '../components/MoreNewsCards';
import InfiniteScroll from "react-infinite-scroll-component";
import { blogList } from '../config/Api';
import '../scss/MoreNews.scss';

const MoreNews = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(3);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    blogList().then((res) => {
      setNews(res.slice(0, 3));
    });
  }, []);

  function getMore() {
    blogList().then((res) => {
      setNews(res.slice(0, index));
      if (res.length <= index) {
        setHasMore(false);
      } else {
        setIndex(index + 2)
      }
    });
  }

  return (
    <Fragment>
      <div className="more-news-container container-fluid main-body">
        <div className="row">
          <div className="col-lg">
            <h1>More News</h1>
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
              <MoreNewsCards blogs={news} />
            </InfiniteScroll>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default MoreNews;