import data from '../utils/constants';
import Card from './card.jsx'

const Cards = () => {

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
