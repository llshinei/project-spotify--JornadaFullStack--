import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Artist = () => {
  const { id } = useParams();
  const artistObject = artistArray.filter((currentObject) => currentObject._id === id)[0];
  const songsFromArtist = songsArray.filter((currentObject) => currentObject.artist === artistObject.name);
  const randomSongFromArtist = songsFromArtist[Math.floor(Math.random() * (songsFromArtist.length - 1))];

  return (
    <div className="artist">
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObject.banner})`,}}>
        <div className="artist__header--title">{artistObject.name}</div>
      </div>
      <div className="artist__body">
        <h2>Popular</h2>
        <SongList songsArray={songsFromArtist}/>
      </div>
      <Link to={`/song/${randomSongFromArtist._id}`}><FontAwesomeIcon className="play-button__icon play-button__icon--artist" icon={faCirclePlay}/></Link>
    </div>
  );
};

export default Artist;