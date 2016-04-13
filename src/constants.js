let strings = [
  'MARK_ITEM',
  'UNMARK_ITEM',
  'SET_RESULTS',
  'CLEAR_MARKED_ITEMS'
];

const constants = strings.reduce((carry, current) => {
  carry[current] = current;
  return carry;
}, {});

export default constants;
