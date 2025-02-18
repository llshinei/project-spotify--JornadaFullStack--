import { artistArray } from '../../front_end/src/assets/database/artists.js';
import { songsArray } from '../../front_end/src/assets/database/songs.js';
import { db } from './connect.js';

const newArtistsArray = artistArray.map((currentObject) => {
    const newArtistObject = { ...currentObject };
    delete newArtistObject.id;
    return newArtistObject;
});

const newSongsArray = songsArray.map((currentObject) => {
    const newSongObject = { ...currentObject };
    delete newSongObject.id;
    return newSongObject;
});

const responseArtist = await db.collection('artists').insertMany(newArtistsArray);
const responseSongs = await db.collection('songs').insertMany(newSongsArray);