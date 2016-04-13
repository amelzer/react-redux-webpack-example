import React from 'react';
import {connect} from 'react-redux';

import AlbumList from './albumList';
import {unMarkItem} from '../actions';

import store from '../store';

const resultList = (props) => (
    <div>
    <h2>Marked Items</h2>
    <AlbumList albums={props.markedItems} onPick={(d) => store.dispatch(unMarkItem(d))} />
    </div>
);

resultList.propTypes = {
  markedItems: React.PropTypes.object.isRequired
};

export default connect((state) => state)(resultList);
