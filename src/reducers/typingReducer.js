const initialState = {
    currentWord: 'Start typing...',
    keysPressed: 0,
    incorrectKeysPressed: 0,
    accuracy: 100,
    timeLeft: 300,
  };
  
  const typingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_WORD':
        return { ...state, currentWord: action.payload };
      case 'INCREMENT_KEYS_PRESSED':
        return { ...state, keysPressed: state.keysPressed + 1 };
      case 'INCREMENT_INCORRECT_KEYS_PRESSED':
        return { ...state, incorrectKeysPressed: state.incorrectKeysPressed + 1 };
      case 'SET_ACCURACY':
        return { ...state, accuracy: action.payload };
        case 'SET_TIME_LEFT':
            
        return { ...state, timeLeft: state.timeLeft-1 };
      case 'RESET_TYPING_APP':
        return {
          ...state,
          currentWord: action.payload,
          keysPressed: 0,
          incorrectKeysPressed: 0,
          accuracy: 100,
          timeLeft: 300,
        };
      default:
        return state;
    }
  };
  
  export default typingReducer;
  