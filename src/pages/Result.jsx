import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { detailedResults } from '../resultsData';
import { results } from '../questions'; // for match name

function Result() {
  const { type } = useParams();
  const data = detailedResults[type] || detailedResults['ISTJ']; // Fallback

  return (
    <div className="result fade-in">
      <h2>당신의 연애 타입은</h2>
      <div className="result-name">{data.name} ({type})</div>
      <p className="result-desc">{data.desc}</p>
      
      <div className="result-section">
        <h3>자세한 설명</h3>
        {data.details.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="result-section">
        <h3>강점 vs 약점</h3>
        <p><strong>강점:</strong> {data.strengths}</p>
        <p><strong>약점:</strong> {data.weaknesses}</p>
      </div>

      <div className="result-section">
        <h3>사랑의 언어</h3>
        <p>{data.loveLanguage}</p>
      </div>

      <div className="result-section">
        <h3>데이트 팁</h3>
        <p>{data.datingTips}</p>
      </div>

      <div className="match-box">
        <h3>최고의 궁합</h3>
        <p>{results[data.match]?.name} ({data.match})</p>
      </div>

      <Link to="/quiz">
        <button className="retry-btn">다시 하기</button>
      </Link>
    </div>
  );
}

export default Result;