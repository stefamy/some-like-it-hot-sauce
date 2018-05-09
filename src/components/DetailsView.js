import React from 'react';
import NotFound from './NotFound.js';
import sauceInventory from '../hotsauces.json';
import { slugify } from '../helpers.js';
import { Link } from 'react-router-dom';

const DetailsView = ({ match }) => {  

  const sauces = sauceInventory.list; 
  const currentSauce = sauces[parseInt(match.params.id, 10)];

  if (!currentSauce) {
    return <NotFound />;
  }

  return (
    <div className="page details">
      <Link to="/" className="home-link">Back to hot sauce list</Link>
      <h1 className="page-title">{currentSauce.title}</h1>
      <div className="page-left">
        <div className="detail-image">
          <img alt={slugify(currentSauce.title)} src={currentSauce.imageURL} />
        </div>
      </div>
      <div className="page-right">
        <p>{currentSauce.description}</p>
      </div>
    </div>
   );
}

export default DetailsView;