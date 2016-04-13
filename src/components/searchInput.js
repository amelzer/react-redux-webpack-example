import React from 'react';
import itunes from '../services/itunes';
import styles from './searchInput.scss';

let timer;
let term = '';
let searched = '';

function search() {
  if (term !== searched) {
    itunes.searchAlbums(term);
    searched = term;
  }
}

function change(ev) {
  term = ev.target.value;
  if (!timer) {
    search();
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      search();
    }, 500);
  }
};

export default () => (
    <div className={styles.searchInput}>
    <input type="text" onChange={change} placeholder="Search" />
    </div>
);
