/*
React Tutorial
http://patternhatch.com/2016/08/02/a-primer-on-the-react-ecosystem-part-2-of-3/

Note how this tutorial uses a form of injection where it passes
getter functions to child components (e.g. Album).
*/

import React from 'react';
import Album from './Album';

const AlbumList = (props) => {
  const albums = props.albums.map((album) =>
    <Album key={album.id} album={album} getTracks={props.getTracks} />);

  return (
    <div className="col-md-3" style={AlbumList.styles.div}>
      <ul style={AlbumList.styles.ul}>
        {albums}
      </ul>
    </div>
  );
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
  getTracks: React.PropTypes.func.isRequired,
};

AlbumList.styles = {
  div: {
    textAlign: 'left',
    maxHeight: '75vh',
    overflowY: 'auto',
  },
  ul: {
    listStyle: 'none',
  },
};

export default AlbumList;
