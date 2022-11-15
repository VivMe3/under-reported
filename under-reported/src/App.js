import React, { useState, Fragment, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './scss/App.scss';

import Home from './pages/Home';
import MoreNews from './pages/MoreNews';
import Category from './pages/Category';
import NoPage from './pages/NoPage';

library.add(fab)

const businessCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

const healthCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

const entertainmentCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

const scienceCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

const techCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

const sportsCards = [
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  },
  {
    title: "South Africa: Alexander Forbes adds more Rainbow to its mix",
    date: "June 6, 2022",
    description: "An intricately woven set of transactions will result in one of Africa's richest men owning a sizeable portion of Alexander Forbes through his..."
  }
];

export default () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="under-reported" element={<Home/>} exact/>
        <Route path="more-news" element={<MoreNews />} />
        <Route path="business" element={<Category category="Business" cards={businessCards} />} />
        <Route path="health" element={<Category category="Health" cards={healthCards} />} />
        <Route path="entertainment" element={<Category category="Entertainment" cards={entertainmentCards} />} />
        <Route path="science" element={<Category category="Science" cards={scienceCards} />} />
        <Route path="tech" element={<Category category="Tech" cards={techCards} />} />
        <Route path="sports" element={<Category category="Sports" cards={sportsCards} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

// https://v5.reactrouter.com/web/example/recursive-paths 
// https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm
// https://github.com/khansalikaziz/NewsZilla---News-Application-with-React?ref=reactjsexample.com
// share link: https://www.npmjs.com/package/react-share , https://dev.to/dsasse07/implementing-a-social-share-feature-jd7 