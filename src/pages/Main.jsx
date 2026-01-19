import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="intro fade-in">
      <h1>당신의 사랑 지도를 펼쳐보세요</h1>
      <p style={{ marginBottom: '3rem' }}>
        간단한 테스트를 통해 당신의 연애 스타일을 알아보고,
        <br />
        더 깊은 이해를 위한 아티클도 읽어보세요.
      </p>
      <Link to="/quiz">
        <button className="start-btn">테스트 시작하기</button>
      </Link>
    </div>
  );
}

export default Home;
