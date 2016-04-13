import constants from '../constants';

export const setResults = (results) => {
  return {
    type: constants.SET_RESULTS,
    results
  };
};

export const markItem = (item) => {
  return {
    type: constants.MARK_ITEM,
    item
  }
};

export const unMarkItem = (item) => {
  return {
    type: constants.UNMARK_ITEM,
    item
  }
};

export const clearMarkedItems = () => {
  return {type: constants.CLEAR_MARKED_ITEMS};
}

