import React from 'react';
import { Link } from 'react-router-dom';

class Gallery extends React.Component {

  render() {

    const { key, id, imageURL, title, subtitle, description } = this.props.details;

    return (

        <div className="item">
          <div className="item-inner">
            <div className="remove-sauce"><button onClick={() => this.props.removeSauce(this.props.index)}>Remove Sauce</button></div>
            <Link
              title={title}
              key={key}
              index={key}
              description={description}
              to={`/sauce/${id}`}
            >    
              <div className="hotsauce-img" style={{ backgroundImage: `url(${imageURL})` }}>
                <img alt={title} src={imageURL} />
              </div>
              <div className="hotsauce-info">
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
          </Link>
        </div>
      </div>

    );
  }
}

export default Gallery;


