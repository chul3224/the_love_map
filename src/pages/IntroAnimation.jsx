import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroAnimation.css';

const messages = [
  "친구들 / 타인 앞에서의 나와,",
  "연인 앞에서의 나의 MBTI가 다르다는걸 아시나요?",
  "몰랐던 나의 연애 MBTI를 확인해 보세요."
];

function IntroAnimation() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState('in');
  const navigate = useNavigate();

  useEffect(() => {
    if (index >= messages.length) {
      navigate('/home');
      return;
    }

    const fadeInTimer = setTimeout(() => {
      setFade('in');
    }, 500); // Time for the previous text to fade out

    const fadeOutTimer = setTimeout(() => {
      setFade('out');
    }, 3500); // How long the text stays on screen

    const nextTextTimer = setTimeout(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 4000); // Total time per message

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(nextTextTimer);
    };
  }, [index, navigate]);

  return (
    <div className="intro-animation-container">
      {index < messages.length && (
        <p className={`intro-message fade-${fade}`}>
          {messages[index]}
        </p>
      )}
    </div>
  );
}

export default IntroAnimation;
