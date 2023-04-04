import React, { useState, Fragment, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './scss/App.scss';

import Home from './pages/Home';
import MoreNews from './pages/MoreNews';
import Category from './pages/Category';
import BlogPost from "./pages/BlogPost";
import NoPage from './pages/NoPage';

library.add(fab);

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
  const history = createBrowserHistory();

  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  }

  return (
    <Fragment>
      <Header />
      <Routes history={history}>
        <Route path="/" element={<Home data={getData}/>} exact/>
        <Route path="under-reported" element={<Home/>} exact/>
        <Route path="more-news" element={<MoreNews />} />
        <Route path="business" element={<Category category="Business" cards={businessCards} data={getData}/>} />
        <Route path="health" element={<Category category="Health" cards={healthCards} />} />
        <Route path="entertainment" element={<Category category="Entertainment" cards={entertainmentCards} />} />
        <Route path="science" element={<Category category="Science" cards={scienceCards} />} />
        <Route path="tech" element={<Category category="Tech" cards={techCards} />} />
        <Route path="sports" element={<Category category="Sports" cards={sportsCards} />} />
        <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

// Vivian Blogger: https://vivirie.blogspot.com/

// https://v5.reactrouter.com/web/example/recursive-paths 
// https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm
// https://github.com/khansalikaziz/NewsZilla---News-Application-with-React?ref=reactjsexample.com
// share link: https://www.npmjs.com/package/react-share , https://dev.to/dsasse07/implementing-a-social-share-feature-jd7 

// API setup with node.js and mongodb: https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd 
// API with express and deploying api to heroku: https://rapidapi.com/blog/nodejs-express-rest-api-example/

// use blogger api: https://developers.google.com/blogger/docs/3.0/performance
// get image from blogger api: https://stackoverflow.com/questions/42609433/thumbnail-of-blogger-post-url-using-blogger-api
// blogger api breakdown: https://developers.google.com/blogger/docs/3.0/reference/posts#resource

// https://buttercms.com/blog/how-to-create-a-blog-with-react/ 
// https://web.postman.co/workspace/HHS~c5779602-71fe-4fea-b72d-2c51c2ab5957/request/create?requestId=76862892-e2f4-4182-a580-8e945e9378c5

// https://javascript.plainenglish.io/build-a-blog-app-with-react-building-components-part-2-5b079c7da924
// https://javascript.plainenglish.io/build-a-blog-app-with-react-components-and-hooks-part-3-facc1efe1fb3