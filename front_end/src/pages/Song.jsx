import React from 'react';
import SoundPlayer from '../components/SoundPlayer';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const Song = () => {
  const { id } = useParams();
  const songObject = songsArray.filter((currentObject) => currentObject._id === id)[0];
  const artistObject = artistArray.filter((currentObject) => currentObject.name === songObject.artist)[0];
  const songsFromArtist = songsArray.filter((currentObject) => currentObject.artist === artistObject.name);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__container--image">
          <img alt={`Picture of ${songObject.name}`} src={songObject.image}/>
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObject._id}`} className="song__bar--image">
          <img alt={`Picture of ${artistObject.name}`} src={artistObject.image}/>
        </Link>
        <SoundPlayer _id={songObject._id} audio={songObject.audio} duration={songObject.duration} songsArray={songsFromArtist}/>
        <div className="song__bar--info">
          <p className="song-name">{songObject.name}</p>
          <p>{artistObject.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;