import React, {Component} from 'react';
import Song from './Song';

const SongCollection = (props) => {
  let className;

  let songs = props.songs.map(song => {
    let selectSong = () => props.handleSongSelect(song.id)
    if (song.id === props.selectedSongId){
      className= "selected"
    } else {
      className = ""
    }

    return (
      <Song
        name = {song.name}
        key = {song.id}
        id = {song.id}
        selectSong = {selectSong}
        artist = {song.artist}
        album = {song.album}
        className={className}
      />
    )
  })

  return(
    <div>
      <ul>
        {songs}
      </ul>
    </div>
  )
}

export default SongCollection
