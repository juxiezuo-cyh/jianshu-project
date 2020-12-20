import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable'; //引入不可改变state的库；

const defaultState = fromJS({
  focused: false,
  list: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable的原理是，结合之前的immutable的值，和新的设置的值，生成一个新的对象。不会修改原来的值
      return state.set('focused', action.value);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', action.value);
    default:
      return state;
  }
}
