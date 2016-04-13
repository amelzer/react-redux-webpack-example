import {List} from 'immutable';
import {combineReducers} from 'redux';

function results(state = List(), action) {
  switch (action.type) {
  case 'SET_RESULTS':
    return action.results;
  default:
    return state;
  }
}

function markedItems(state = List(), action) {
  switch (action.type) {
  case 'MARK_ITEM':
    return state.find((i) => (i.equals(action.item))) ? state : state.push(action.item);
  case 'UNMARK_ITEM':
    return state.filter((i) => (!i.equals(action.item)));
  case 'CLEAR_MARKED_ITEMS':
    return List();
  default:
    return state;
  }
}

export default combineReducers({
  results,
  markedItems
});
