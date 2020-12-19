import * as actionTypes from './actionTypes.js';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
  value: true,
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
  value: false,
})