import React from 'react';
import Track from './Track';

const TrackList = (props) => {
  const tracks = props.tracks.map((track) =>
    <Track
      key={track.id}
      track={track}
      playPreview={props.playPreview}
    />);

  return (
    <div className="col-md-9">
      <h3>{props.album}</h3>
      <ul style={{ listStyle: 'none' }}>
        {tracks}
      </ul>
    </div>
  );
};

TrackList.propTypes = {
  album: React.PropTypes.string,
  tracks: React.PropTypes.array.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};

export default TrackList;
