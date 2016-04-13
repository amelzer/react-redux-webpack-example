import Immutable from 'immutable';
import {setResults} from '../actions';
import store from '../store';

export default {
  searchAlbums(term) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/search?type=music&entity=album&term='+term);

    xhr.addEventListener('load', () => {
      let data = JSON.parse(xhr.response);
      store.dispatch(setResults(Immutable.fromJS(data.results)));
    });
    xhr.addEventListener('error', (e) => reject(e));

    xhr.send();
  }
}
