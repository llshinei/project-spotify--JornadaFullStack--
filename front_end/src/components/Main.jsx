import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = ({ type }) => {
  return (
    <div className="main">
        {/* Item list for artists */}
        {type === "artists" || type === undefined ? <ItemList title="artists" items={10} itemsArray={artistArray} path="/artists" idPath="/artist/"/> : <></>}
        {/* Item list for songs */}
        {type === "songs" || type === undefined ? <ItemList title="songs" items={20} itemsArray={songsArray} path="/songs" idPath="/song/"/> : <></>}
    </div>
  );
};

export default Main;