import './TouchTyping.css';

// export default TypingApp;
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUndo } from 'react-icons/fa';
import {
  setCurrentWord,
  incrementKeysPressed,
  incrementIncorrectKeysPressed,
  setAccuracy,
  setTimeLeft,
  resetTypingApp,
} from './actions/typingActions';

function TypingApp() {
  const dispatch = useDispatch();
  const currentWord = useSelector((state) => state.currentWord);
  const keysPressed = useSelector((state) => state.keysPressed);
  const incorrectKeysPressed = useSelector((state) => state.incorrectKeysPressed);
  const accuracy = useSelector((state) => state.accuracy);
  const timeLeft = useSelector((state) => state.timeLeft);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(setCurrentWord(generateRandomWord()));
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  useEffect(() => {
    if (timeLeft === 0) {
      calculateAccuracy();
    }
  }, [timeLeft]);

  const generateRandomWord = () => {
    const words = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const calculateAccuracy = () => {
    const totalKeyPresses = keysPressed + incorrectKeysPressed;
    const accuracyPercentage = (1 - incorrectKeysPressed / totalKeyPresses) * 100;
    dispatch(setAccuracy(Math.round(accuracyPercentage)));
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    dispatch(incrementKeysPressed());

    if (key === currentWord[0]) {
      dispatch(setCurrentWord(currentWord.slice(1)));
      if (currentWord.length === 1) {
        dispatch(setCurrentWord(generateRandomWord()));
      }
    } else {
      dispatch(incrementIncorrectKeysPressed());
    }
  };

  const handleReset = () => {
    dispatch(resetTypingApp(generateRandomWord()));
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const renderKeys = () => {
    return currentWord.split('').map((character, index) => {
      let keyClass = 'key';
      if (index === 0) {
        keyClass += ' currentKey';
      }
      return (
        <span key={index} className={keyClass}>
          {character}
        </span>
      );
    });
  };

  const formatTime = (time) => {
    return time >= 0 ? time.toString() : '0';
  };

  return (
    <div className='main'>
      <h1 className='header'>Touch Typing Application</h1>
      <div className='wordBox'>{renderKeys()}</div>
      <div className='features'>
        <p className='sameColour'>Keys Pressed: {keysPressed}</p>
        <p className='sameColour'>Accuracy: {accuracy}%</p>
        <p className='sameColour'>Time Left: {formatTime(timeLeft)} seconds</p>
      </div>
      <div className='inputContainer'>
        <input ref={inputRef} type='text' onKeyPress={handleKeyPress} className='inputBox' />
        <button onClick={handleReset} className='resetButton'>
          <FaUndo className='undo' />
        </button>
      </div>
    </div>
  );
}

export default TypingApp;


