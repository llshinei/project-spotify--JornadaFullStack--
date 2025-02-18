import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faCirclePlay, faCirclePause, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const timeFormat = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${'0' + minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

const timeFormatInSec = (timeInString) => {
  const splitArray = timeInString.split(':');
  const minutes = parseInt(splitArray[0]);
  const seconds = parseInt(splitArray[1]);
  return seconds + (minutes * 60);
};

const SoundPlayer = ({ _id, audio, duration, songsArray }) => {
  const indexId = songsArray.map((currentObject) => currentObject._id).indexOf(_id);
  const previousSong = (indexId - 1 < 0) ? songsArray[songsArray.length - 1] : songsArray[indexId - 1];
  const nextSong = (indexId + 1 > songsArray.length - 1) ? songsArray[0] : songsArray[indexId + 1];
  
  const audioPlayer = useRef();
  const progressActive = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(timeFormat(0));
  const durationInSec = timeFormatInSec(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) setCurrentTime(timeFormat(audioPlayer.current.currentTime));
      progressActive.current.style.setProperty('--_progress', `${(audioPlayer.current.currentTime / durationInSec) * 100}%`);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [isPlaying]);
  
  // const skipButton = () => {
  //   if (isPlaying) audioPlayer.current.pause();
  //   setCurrentTime(timeFormat(0));
  // }

  return (
    <div className="sound-player">
      <div className="sound__controls">
        <Link to={`/song/${previousSong._id}`}>
          <FontAwesomeIcon className="controls__icons" icon={faBackwardStep} /*onClick={() => skipButton()}*//>
        </Link>
          <FontAwesomeIcon className="controls__icons controls__player-icon" icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()}/>
        <Link to={`/song/${nextSong._id}`}>
          <FontAwesomeIcon className="controls__icons" icon={faForwardStep} /*onClick={() => skipButton()}*//>
        </Link>
      </div>
      <div className="sound__progress">
        <p className="progress__time">{currentTime}</p>
        <div className="progress__bar">
          <div ref={progressActive} className="progress__bar--active"></div>
        </div>
        <p className="progress__time">{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default SoundPlayer;