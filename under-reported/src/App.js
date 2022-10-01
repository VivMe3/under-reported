import React, { useState, Fragment, Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ViewMoreNews from './pages/ViewMoreNews';
import NoPage from './pages/NoPage';

library.add(fab)

export default () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="under-reported" element={<Home/>} exact/>
        <Route path="view-more-news" element={<ViewMoreNews />} />
        <Route path="business" element={<NoPage />} />
        <Route path="health" element={<NoPage />} />
        <Route path="entertainment" element={<NoPage />} />
        <Route path="science" element={<NoPage />} />
        <Route path="tech" element={<NoPage />} />
        <Route path="sports" element={<NoPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

// https://v5.reactrouter.com/web/example/recursive-paths 
// https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm
// https://github.com/khansalikaziz/NewsZilla---News-Application-with-React?ref=reactjsexample.com