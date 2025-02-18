import React, { useState } from 'react';
import SongItem from './SongItem';

const SongList = ({ songsArray }) => {
  const [numberItems, setNumberItems] = useState(5);
  const [button, setButton] = useState("See More");
  return (
    <div className="song-list">
        {songsArray.filter((currentValue, i) => i < numberItems).map((currentObject, i) => <SongItem {...currentObject} i={i} key={i}/>)}
        <p className="song-list__see-more" onClick={() => numberItems === 5 ? (setNumberItems(numberItems + 5), setButton("See Less")) : (setNumberItems(numberItems - 5), setButton("See More"))}>{button}</p>
    </div>
  );
};

export default SongList;