import React from 'react';

const Song = (props) => {

  return(
    <div>
      <li className={props.className} onClick={props.selectSong}>{props.name} - {props.artist}</li>
    </div>
  )
}

export default Song;
