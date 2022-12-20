import React, { Fragment, useState, useEffect } from 'react';
import '../scss/Category.scss';
import StoryCards from '../components/StoryCards';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import { blogList } from '../config/Api';

//StoryCards
const cards = [
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

const Category = ({ category, cards, data }) => {

  const [blogs, setBlogs] = useState([]);

  const BlogContent = (id) => {
    data(id);
  }

  useEffect(() => {
    blogList().then((res) => {
        setBlogs(res);
    })
  } , []);

    return (
        <Fragment>
          <div className="category-container container-fluid">
            <h1>{category}</h1>
            <div className="row">
              <div className="col-lg">
                <StoryCards cards={cards} />
                {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content = {BlogContent}/>}
              </div>
            </div>
          </div>
        </Fragment>
      );
}

export default Category;