import React, {Component} from 'react';
import Playlist from './Playlist';

const PlaylistLibrary = (props) => {
  let className;

  let playlists = props.playlists.map(playlist => {
    let selectPlaylist = () => props.handlePlaylistSelect(playlist.id)

    if (playlist.id === props.selectedPlaylistId){
      className= "selected"
    } else {
      className = ""
    }

    return (
      <Playlist
        name = {playlist.name}
        key = {playlist.id}
        id = {playlist.id}
        className={className}
        selectPlaylist = {selectPlaylist}
      />
    )
  })

  return(
    <div>
      <ul>
        {playlists}
      </ul>
    </div>
  )
}

export default PlaylistLibrary
