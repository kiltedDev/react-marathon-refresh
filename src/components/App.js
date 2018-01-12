import React from 'react';
import PlaylistLibrary from './PlaylistLibrary'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: this.props.data.selectedPlaylistId,
      selectedSongId: this.props.data.selectedSongId
    }

    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this);
  }

  handleSongSelect( id ) {
    this.setState( { selectedSongId: id }  )
  }

  handlePlaylistSelect( id ) {
    console.log(this.state);
    this.setState( { selectedPlaylistId: id }  )
  }

  render() {
    let data = this.props.data
    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <h1>Playlists</h1>
        <PlaylistLibrary
          playlists={this.props.data.playlists}
          selectedPlaylistId={this.state.selectedPlaylistId}
          handlePlaylistSelect={this.handlePlaylistSelect}
        />
        <h1>Songs</h1>
        <SongCollection
          songs={this.props.data.songs}
          selectedSongId={this.state.selectedSongId}
          handleSongSelect={this.handleSongSelect}
        />
      </div>
    );
  }
}

export default App;
