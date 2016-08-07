/*
React Tutorial
http://patternhatch.com/2016/08/02/a-primer-on-the-react-ecosystem-part-2-of-3/

Ideas for improvement:
    Highlight currently playing track
*/

import React from 'react';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';
const previewColor = 'green';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleTrackPlay = this.onToggleTrackPlay.bind(this);
  }

  onToggleTrackPlay(event) {
    // If a track is playing,
    this.props.playPreview(this.props.track);
  }

  render() {
    return (
      <li
        style={Track.styles.li}
        onMouseOver={(e) => { e.target.style.backgroundColor = mouseOverColor; }}
        onMouseOut={(e) => { e.target.style.backgroundColor = mouseOutColor; }}
        onClick={this.onToggleTrackPlay}
      >
        {this.props.track.name}
      </li>
    );
  }
}

Track.propTypes = {
  track: React.PropTypes.object.isRequired,
  playPreview: React.PropTypes.func.isRequired,
};

Track.styles = {
  li: {
    fontSize: '1.5em',
    padding: '0.2em',
    listStyleType: 'none',
    backgroundColor: mouseOutColor,
    cursor: 'pointer',
  },
};

export default Track;
