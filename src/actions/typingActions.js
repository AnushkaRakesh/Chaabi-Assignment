export const setCurrentWord = (word) => {
    return {
      type: 'SET_CURRENT_WORD',
      payload: word,
    };
  };
  
  export const incrementKeysPressed = () => {
    return {
      type: 'INCREMENT_KEYS_PRESSED',
    };
  };
  
  export const incrementIncorrectKeysPressed = () => {
    return {
      type: 'INCREMENT_INCORRECT_KEYS_PRESSED',
    };
  };
  
  export const setAccuracy = (accuracy) => {
    return {
      type: 'SET_ACCURACY',
      payload: accuracy,
    };
  };
  
export const setTimeLeft = () => {
    return {
      type: 'SET_TIME_LEFT',
    };
  };
  
  export const resetTypingApp = (word) => {
    return {
      type: 'RESET_TYPING_APP',
      payload: word,
    };
  };
  