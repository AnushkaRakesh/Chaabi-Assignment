
import React from 'react';
import { Provider } from 'react-redux';
import TypingApp from './TypingApp';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <TypingApp />
    </Provider>
  );
}

export default App;


