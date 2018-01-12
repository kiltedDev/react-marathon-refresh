import React from 'react';

const Playlist = (props) => {

  return (
    <div>
      <li className={props.className} onClick={props.selectPlaylist}>{props.name}</li>
    </div>
  )
}

export default Playlist;
