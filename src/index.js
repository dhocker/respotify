/*
React Tutorial
http://patternhatch.com/2016/08/02/a-primer-on-the-react-ecosystem-part-2-of-3/

Note how this tutorial uses a form of injection where it passes
getter functions to child components (e.g. AlbumList and TrackList).
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import TrackList from './components/TrackList';
import * as musicApi from './api/musicApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
      tracks: [],
      currentPreview: null,
      previewTrack: null,
      previewTrackInstance: null,
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.processTracks = this.processTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
    if (this.state.previewTrack) {
      this.playPreview(this.state.previewTrack);
    }
  }

  getTracks(albumId) {
    musicApi.getTracks(albumId, this.processTracks);
    if (this.state.previewTrack) {
      this.playPreview(this.state.previewTrack);
    }
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
      album: '',
      tracks: [],
    });
  }

  processTracks(payload) {
    this.setState({
      album: payload.name,
      tracks: payload.tracks.items,
      previewTrack: null,
    });
  }

  playPreview(trackInstance, track) {
    if (this.state.currentPreview) {
      const curAudioObject = this.state.currentPreview;
      curAudioObject.pause();
      this.state.previewTrackInstance.clearTrackPlay();
    }

    if (this.state.previewTrack !== track) {
      const newAudioObject = new Audio(track.preview_url);
      this.setState({
        currentPreview: newAudioObject,
        previewTrack: track,
        previewTrackInstance: trackInstance,
      });

      newAudioObject.play();
    } else {
      this.setState({
        currentPreview: null,
        previewTrack: null,
        previewTrackInstance: null,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
            <SearchBar getAlbums={this.getAlbums} />
        </div>
        <div className="row">
            <AlbumList
                albums={this.state.albums}
                getTracks={this.getTracks}
            />
            <TrackList
                album={this.state.album}
                tracks={this.state.tracks}
                playPreview={this.playPreview}
            />
        </div>
      </div>
    );
  }
}

/*
  Essentially, this is the "main" for the single page app
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
