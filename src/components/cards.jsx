import React, { useEffect } from 'react';
import data from '../utils/constants';
import Card from './card.jsx'

const Cards = () => {

  useEffect(() => {
    if (data.length <= 3) {
      const height = document.querySelector('.root');
      height.classList.add('root_small');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const elements = data.map((item) => {

    return (
      <li key={item.id}>
        <Card {...item} />
      </li>
    )
  });

  return (
    <ul className='app__cards'>
      {elements}
    </ul>

  );
}


export default Cards;
