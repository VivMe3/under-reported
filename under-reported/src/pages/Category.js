import React, { Fragment } from 'react';
import '../scss/Category.scss';
import StoryCards from '../components/StoryCards';

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

const Category = (props) => {
    return (
        <Fragment>
          <div className="category-container container-fluid">
            <h1>{props.category}</h1>
            <div className="row">
              <div className="col-lg">
                <StoryCards cards={props.cards} />
              </div>
            </div>
          </div>
        </Fragment>
      );
}

export default Category;