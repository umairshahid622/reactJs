import React from 'react';

import cardStyles from './card.module.css';

const Card = ({ title, price, image, text }) => {
  return (
    <div className={cardStyles.card}>
      <img src={image} alt={title} />
      <div className={cardStyles.body}>
        <h2> {title}</h2>
        <p
          style={{
            fontWeight: 'bolder',
            fontSize: '1.2rem',
          }}
        >
          {price}
        </p>
        <p>{text}</p>
        <a href='/'>Order by delivery</a>
      </div>
    </div>
  );
};

export default Card;
