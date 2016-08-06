import React from 'react';

const Album = (props) => {
  return (
    <li>
      <img
        src={props.album.images[1].url}
        alt={props.album.name}
        style={Album.styles.img}
      />
    </li>
  );
};

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
};

Album.styles = {
  img: {
    maxWidth: '150px',
    maxHeight: '150px',
    marginBottom: '1em',
  },
};

export default Album;
