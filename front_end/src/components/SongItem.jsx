import React from 'react';
import { Link } from 'react-router-dom';

const SongItem = ({ image, name, duration, _id, i }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
        <div className="song-item__track">
          <p>{i + 1}</p>
            <div className="song-item__track--info">
                <img alt={`Picture of ${name}`} src={image}/>
                <p>{name}</p>
            </div>
        </div>
        <p>{duration}</p>
    </Link>
  );
};

export default SongItem;