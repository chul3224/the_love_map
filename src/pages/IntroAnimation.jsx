import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroAnimation.css';

const messages = [
  "나의 사랑은 어떤 모습일까?",
  "내 마음의 지도를 열어봅니다."
];

function IntroAnimation() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [fade, setFade] = useState('out');
  const navigate = useNavigate();

  useEffect(() => {
    // Phase 1: Show first message
    const timer1 = setTimeout(() => {
      setCurrentMessage(messages[0]);
      setFade('in');
    }, 500); // Initial delay

    // Phase 2: Hide first message
    const timer2 = setTimeout(() => {
      setFade('out');
    }, 3500); // Time first message is on screen

    // Phase 3: Show second message
    const timer3 = setTimeout(() => {
      setCurrentMessage(messages[1]);
      setFade('in');
    }, 4500); // Wait for first message to fade out

    // Phase 4: Hide second message
    const timer4 = setTimeout(() => {
      setFade('out');
    }, 7500); // Time second message is on screen

    // Phase 5: Navigate to home
    const timer5 = setTimeout(() => {
      navigate('/home');
    }, 8500); // Wait for second message to fade out and then navigate

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [navigate]);

  return (
    <div className={`intro-animation-container fade-${fade}`}>
      <p className={`intro-message fade-${fade}`}>
        {currentMessage}
      </p>
    </div>
  );
}

export default IntroAnimation;
