import React from 'react';
import Album from './album';
import styles from './albumList.scss';

const albumList = (props) => (
    <div className={styles.albumlist}>
    {props.albums.map((a, i) => (
        <Album key={i} data={a} onClick={() => {
          props.onPick(a);
        }} />)
    )}
    </div>
);

albumList.propTypes = {
  albums: React.PropTypes.object.isRequired,
  onPick: React.PropTypes.func
}

export default albumList;
