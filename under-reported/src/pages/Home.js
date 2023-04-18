import React, { Fragment, useState, useEffect } from 'react';
import '../scss/Home.scss';
import FeaturedStory from '../components/FeaturedStory';
import NewsFeed from '../components/NewsFeed';
import StoryCards from '../components/StoryCards';
import { blogPost, blogList } from '../config/Api';

//Featured Story
const featuredStoryID = '5167575882235143189';

//Bottom 3 Stories
const cards = [
  {id: '5167575882235143189'},
  {id: '2612160509708525381'},
  {id: '5629965884021217700'},
]

const Home = () => {
  const [featuredStory, setFeaturedStory] = useState([]);
  const [storyBlogs, setStoryBlogs] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    blogPost(featuredStoryID).then((res) => {
      setFeaturedStory(res);
    });

    (async function () {
      setStoryBlogs(await Promise.all(cards.map(card => blogPost(card.id))));
    })();

    blogList().then((res) => {
      setLatestNews(res.slice(0, 4));
    });

  }, []);

  return (
    <Fragment>
      <div className="home container-fluid main-body">
        <div className="row">
          <div className="col-lg">
            <FeaturedStory blog={featuredStory} />
            <StoryCards blogs={storyBlogs} />
          </div>
          <div className="col-lg-3">
            <NewsFeed blogs={latestNews} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;