import React, { Fragment } from 'react';
import '../scss/Home.scss';
import FeaturedStory from '../components/FeaturedStory';
import NewsFeed from '../components/NewsFeed';
import StoryCards from '../components/StoryCards';

//Featured Story
const featLink = "https://google.com";
const featTitle = "South Africa: Alexander Forbes adds more Rainbow to its mix";
const featDescription = "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his...";

//StoryCards
const cards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

//NewsFeed
const news = [
  {
    title: "Kenya: Private healthcare requires intensive care and better regulation",
    description: "Private healthcare facilities in Kenya are under scrutiny after local Twitter uses detailed multiple instances of systemic exploitation...",
    date: "06/20/20"
  },
  {
    title: "Kenya: Private healthcare requires intensive care and better regulation",
    description: "Private healthcare facilities in Kenya are under scrutiny after local Twitter uses detailed multiple instances of systemic exploitation...",
    date: "06/20/20"
  },
  {
    title: "Kenya: Private healthcare requires intensive care and better regulation",
    description: "Private healthcare facilities in Kenya are under scrutiny after local Twitter uses detailed multiple instances of systemic exploitation...",
    date: "06/20/20"
  },
  {
    title: "Kenya: Private healthcare requires intensive care and better regulation",
    description: "Private healthcare facilities in Kenya are under scrutiny after local Twitter uses detailed multiple instances of systemic exploitation...",
    date: "06/20/20"
  },
]

const Home = () => {
    return (
        <Fragment>
          <div className="home container-fluid">
            <div className="row">
              <div className="col-lg">
                {<FeaturedStory title={featTitle} link={featLink} description={featDescription} />}
                <StoryCards cards={cards} />
              </div>
              <div className="col-lg-3">
                <NewsFeed news={news} />
              </div>
            </div>
          </div>
        </Fragment>
      );
}

export default Home;