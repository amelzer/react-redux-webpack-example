import React from 'react';

const album = (props) => (
    <div onClick={props.onClick}>
    <img src={props.data.get('artworkUrl100')} />
    </div>
);

album.propTypes = {
  onClick: React.PropTypes.func,
  data: React.PropTypes.object.isRequired
};

export default album;
