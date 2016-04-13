import React from 'react';
import {connect} from 'react-redux';

import AlbumList from './albumList';
import {markItem} from '../actions';
import store from '../store';

const resultList = (props) => (
    <div>
    <h2>Search Results</h2>
    <AlbumList albums={props.results} onPick={(d) => store.dispatch(markItem(d))} />
    </div>
);

resultList.propTypes = {
  results: React.PropTypes.object.isRequired
};

export default connect((state) => state)(resultList);
