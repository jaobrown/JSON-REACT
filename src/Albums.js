import React, { Component } from "react";

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      music: {
        albums: []
      }
    };

    // load in json
    fetch("Data/music.json")
      .then(result => result.json())
      .then(Data => {
        this.setState({
          music: Data
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        <h3>Music Library</h3>
        {this.state.music.albums.map(album => {
          return (
            <div className="album">
              <h1>{album.albumName}</h1>
              <h2>{album.bandName}</h2>
              <p>
                {album.songs.map(song => {
                  return (
                    <div className="songs">
                      <p className="song-name">{song.name}</p>
                      <p>{song.playtime}</p>
                      <p>Instruments: {song.instrument}</p>
                    </div>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Albums;
