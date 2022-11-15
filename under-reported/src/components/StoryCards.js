import React from 'react';
import '../scss/StoryCards.scss';
import Random from '../imgs/random.jpg';

const StoryCards = ({ cards }) => {
  const renderedCards = cards.map((card, index) => {
    return (
      <div key={`story-${index}`} className="card">
        <a className="image" href="https://www.google.com">
          <img src={Random} alt="Random" />
            <h3 className="title">{card.title}</h3>
            { card.date && 
              <p className="date">{card.date}</p>
            }
            <p className="content">{card.description}</p>
        </a>
      </div >
    )
  })

  return (
    <div className="storycards ui link three stackable cards">
      {renderedCards}
    </div>
  )
}

export default StoryCards;