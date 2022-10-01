import React from 'react';
import '../scss/MoreNewsCards.scss';
import Random from '../imgs/random.jpg';

const MoreNewsCards = ({ cards }) => {
  const renderedCards = cards.map((card, index) => {
    return (
        <a href={card.url} key={`more-news-${index}`} className="row item">
                <div className="col-lg-3">
                    <img src={Random} alt={card.alt} />
                </div>
                <div className="col-lg-9">
                    <h3 className="title" >{card.title}</h3>
                    <p className="date">{card.date}</p>
                    <p className="content">{card.description}</p>
                </div>
        </a>
    )
  })

  return (
    <div className="view-more-cards">
      {renderedCards}
    </div>
  )
}

export default MoreNewsCards;