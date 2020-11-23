import React, { useState, Fragment } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import FeaturedStory from './components/FeaturedStory';
import NewsFeed from './components/NewsFeed';
import StoryCards from './components/StoryCards';
import './scss/App.scss';


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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
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
};