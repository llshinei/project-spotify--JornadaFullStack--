import React from 'react';
import logoSpotify from '../assets/logo/spotify-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <Link to="/"><img alt="Spotify Logo" src={logoSpotify}/></Link>
        <Link to="/"><h1>Spotify</h1></Link>
    </div>
  );
};

export default Header;