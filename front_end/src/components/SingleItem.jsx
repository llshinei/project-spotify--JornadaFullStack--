import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleItem = ({ _id, image, name, artist, idPath }) => {
  return (
    <Link className="single-item" to={`${idPath}${_id}`}>
        <div className="single-item__image">
            <img alt={`Picture of ${name}`} src={image}/>
            <FontAwesomeIcon className="play-button__icon" icon={faCirclePlay}/>
        </div>
        <div className="single-item__description">
            <div className="single-item__description__title">
                <p>{name}</p>
            </div>
            <p className="single-item__description__type">{artist ?? "Artist"}</p>
        </div>                    
    </Link>
  );
};

export default SingleItem;