import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;

// store 想要改变数据，必须走一个流程：
// 首先创建一个action,dispatch(action)
// 传递给store，
// 然后再给到reducer，
// reducer处理完以后，
// 再给到store，
// 最后数据发生更新