import { createStore } from 'redux';
import typingReducer from './reducers/typingReducer';

const store = createStore(typingReducer);

export default store;
