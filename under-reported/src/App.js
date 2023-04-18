import React, { useState, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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

export default () => {
  const history = createBrowserHistory();

  return (
    <Fragment>
      <Header />
      <Routes history={history}>
        <Route path="/" element={<Home />} exact/>
        <Route path="under-reported" element={<Home/>} exact/>
        <Route path="more-news" element={<MoreNews />} />
        <Route path="business" element={<Category category="Business" />} />
        <Route path="health" element={<Category category="Health" />} />
        <Route path="entertainment" element={<Category category="Entertainment" />} />
        <Route path="science" element={<Category category="Science" />} />
        <Route path="tech" element={<Category category="Tech" />} />
        <Route path="sports" element={<Category category="Sports" />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};
