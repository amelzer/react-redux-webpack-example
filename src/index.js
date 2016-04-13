import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import ResultList from "./components/resultList";
import MarkedList from "./components/markedList";
import SearchInput from './components/searchInput';
import itunes from './services/itunes'

require('./index.scss');

render(
  <Provider store={store}>
    <div>
    <SearchInput />
    <MarkedList/>
    <ResultList/>
    </div>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  //console.debug('REDUX STATE CHANGE', store.getState().results.toJS());
});

itunes.searchAlbums('Blind Guardian');
