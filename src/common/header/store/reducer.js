import * as actionTypes from './actionTypes.js';

const defaultState = {
  focused: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return {
        focused: action.value,
      }
    case actionTypes.SEARCH_BLUR:
      return {
        focused: action.value,
      }
    default:
      return state;
  }
}
