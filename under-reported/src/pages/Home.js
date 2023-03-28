import React, { Fragment, useState, useEffect } from 'react';
import '../scss/Home.scss';
import FeaturedStory from '../components/FeaturedStory';
import NewsFeed from '../components/NewsFeed';
import StoryCards from '../components/StoryCards';
import EmptyList from '../components/EmptyList';
// import BlogList from '../components/BlogList';
import { blogPost, blogList } from '../config/Api';

//Featured Story
const featuredStoryID = '4665982065570606416';

//Bottom 3 Stories
const cards = [
  {id: '5902186712207754525'}, //testing
  {id: '4665982065570606416'}, //another post
  {id: '890454697808030910'}, //hello
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
                <StoryCards blogs={storyBlogs}/>
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