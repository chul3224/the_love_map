import { useState } from 'react';
import './App.css';
import { questions, results } from './questions';

function SakuraRain() {
  const petals = Array.from({ length: 20 });
  return (
    <div className="sakura-container">
      {petals.map((_, i) => (
        <div key={i} className="sakura" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}>
          🌸
        </div>
      ))}
    </div>
  );
}

function App() {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState(null);

  const startQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  const handleAnswer = (value) => {
    setScores((prev) => ({ ...prev, [value]: prev[value] + 1 }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Calculate final scores using the *current* state plus the last answer
    // Actually, since setScores is async, we should be careful. 
    // However, handleAnswer updates state. The result calculation usually happens after.
    // To be safe, we can calculate in a useEffect or pass the final values. 
    // Simpler approach: update state, then check in useEffect or use a temporary variable if logic was complex.
    // Here, since I call calculateResult *after* the if/else check, the state update for the last question might not have applied yet in this render cycle if I used the state directly *immediately*.
    // BUT: React state updates are batched.
    
    // Better Approach for immediate calculation:
    // Let's pass the final answer to calculateResult or just use a helper.
    // Actually, let's wait for the state update.
    // For simplicity in this structure, I will defer the calculation to a useEffect or just assume the user clicks a "See Result" button? 
    // No, usually it's automatic.
    
    // Let's fix the race condition by calculating based on the final accumulated score *including the last click*.
    // Since `handleAnswer` is triggered by a click, I can pass the value to a helper.
    
    // Actually, let's just make `calculateResult` rely on the scores state, but trigger it properly.
    // A clean way is to just setStep('result') and do the calculation during render or in a useEffect.
    finishQuiz();
  };

  const finishQuiz = () => {
     setCurrentStep('result');
  };

  const getFinalType = () => {
    // We need to calculate this based on `scores`.
    // Note: If we call this immediately after setting state for the last question, `scores` might be stale.
    // So we will pass the `value` of the last answer to this function if needed, OR we use functional updates.
    
    // To avoid complexity, let's just use the `scores` state.
    // Since `handleAnswer` updates `scores`, and `finishQuiz` changes the step, the re-render for 'result' step will have the updated scores?
    // NOT GUARANTEED if they are in the same event loop tick without a timeout.
    // FIX: Let's do the score update in handleAnswer, and if it's the last question, we explicitly calculate the new score to determine the result *then* set step.
    
    // Wait, the standard way:
    // 1. Update score.
    // 2. Check index.
    // 3. If last, set step to result.
    
    // The issue is `scores` inside `handleAnswer` (if we accessed it) would be old.
    // But `getFinalType` will be called during the *render* of the Result component, which happens *after* the state update is processed. So it should be fine!
    
    const type = [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    return type;
  };

  const resetQuiz = () => {
    setCurrentStep('intro');
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="App">
      <SakuraRain />
      <div className="container">
        <div className="sakura-decoration">❀</div>
        
        {currentStep === 'intro' && (
          <div className="intro fade-in">
            <h1>The Love Map</h1>
            <p>당신의 연애 스타일을 알아보는<br/>포근한 MBTI 테스트</p>
            <button className="start-btn" onClick={startQuiz}>테스트 시작하기</button>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="quiz fade-in">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <h2 className="question-text">
              {questions[currentQuestionIndex].content}
            </h2>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button 
                  key={index} 
                  className="option-btn"
                  onClick={() => handleAnswer(option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'result' && (
          <ResultView scores={scores} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
}

function ResultView({ scores, resetQuiz }) {
  // Calculate type inside the component to ensure we have the latest scores
  const type = [
    scores.E >= scores.I ? 'E' : 'I', // Default to E if tie, or whatever logic
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P'
  ].join('');

  const data = results[type] || results['ISTJ']; // Fallback

  return (
    <div className="result fade-in">
      <h2>당신의 연애 타입은</h2>
      <div className="result-name">{data.name} ({type})</div>
      <p className="result-desc">{data.desc}</p>
      
      <div className="match-box">
        <h3>최고의 궁합</h3>
        <p>{results[data.match]?.name} ({data.match})</p>
      </div>

      <button className="retry-btn" onClick={resetQuiz}>다시 하기</button>
    </div>
  );
}

export default App;