import React, { useState, useEffect, useRef } from 'react';
import './Typewriter2.css';

const Typewriter = ({ onFinish }) => {
  const [text, setText] = useState('');
  const message = 'X O X O...';
  const typingSpeed = 200; // Adjust the typing speed in milliseconds
  const erasingSpeed = 100; // Adjust the erasing speed in milliseconds
  const pauseDelay = 600; // Adjust the pause duration in milliseconds

  const typewriterRef = useRef(null);

  useEffect(() => {
    let isTyping = true;
    let currentIndex = 0;
    let direction = 1;

    const typeText = async () => {
      if (!isTyping) return;

      setText(prevText => {
        const newText = message.slice(0, currentIndex + 1);
        return direction === 1 ? newText : newText.slice(0, -1);
      });

      currentIndex += direction;

      if (currentIndex === message.length) {
        direction = -1;
        await delay(pauseDelay);
      }

      if (currentIndex === -1) {
        direction = 1;
        await delay(pauseDelay);
        if (onFinish) onFinish();
      }

      await delay(direction === 1 ? typingSpeed : erasingSpeed);
      typeText();
    };

    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

    typeText();

    return () => {
      isTyping = false;
    };
  }, [onFinish]);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriterHeight = typewriterRef.current.clientHeight;
      typewriterRef.current.style.marginBottom = `-${typewriterHeight}px`;
    }
  }, [text]);

  return (
    <div className="typewriter-container">
      <div className="typewriter2" ref={typewriterRef}>
        {text}
      </div>
    </div>
  );
};

export default Typewriter;