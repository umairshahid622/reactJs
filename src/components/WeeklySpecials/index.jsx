import Card from 'components/common/Card';
import React from 'react';
import { lemonDessert, bruschetta, greekSalad } from 'assets';
import specialsStyle from './specials.module.css';
const SPECIALS = [
  {
    title: 'Greek Salad',
    image: greekSalad,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe animi corporis quia. Veritatis optio quae iure quasi non tenetur, blanditiis, voluptatum facilis ad ab culpa odio error pariatur consequatur?',
    price: '$ 12.99',
  },
  {
    title: 'Bruchetta',
    image: bruschetta,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe animi corporis quia. Veritatis optio quae iure quasi non tenetur, blanditiis, voluptatum facilis ad ab culpa odio error pariatur consequatur?',
    price: '$ 100.89',
  },
  {
    title: 'Lemon Dessert',
    image: lemonDessert,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe animi corporis quia. Veritatis optio quae iure quasi non tenetur, blanditiis, voluptatum facilis ad ab culpa odio error pariatur consequatur?',
    price: '$ 20.66',
  },
];
const WeeklySpecials = () => {
  return (
    <div className={specialsStyle.wrapper}>
      <p className={specialsStyle.header}>This Week's Specials</p>
      <p className={specialsStyle.label}>Online Menu</p>
      <div className={specialsStyle.container}>
        {SPECIALS.map((food) => (
          <Card key={food.title} {...food} />
        ))}
      </div>
    </div>
  );
};

export default WeeklySpecials;
