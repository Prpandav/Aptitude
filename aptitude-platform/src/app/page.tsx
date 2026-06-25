'use client';
import { useState, useEffect } from 'react';

export default function MockTestDashboard() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [testState, setTestState] = useState('START'); // START, ACTIVE, COMPLETED
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins

  // --- 1. TIMER LOGIC ---
  useEffect(() => {
    let timer;
    if (testState === 'ACTIVE' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && testState === 'ACTIVE') {
      submitTest(); // Auto-submit if time runs out
    }
    return () => clearInterval(timer);
  }, [testState, timeLeft]);

  // --- 2. API FETCH LOGIC ---
  const startTest = async () => {
    setTestState('ACTIVE');
    setTimeLeft(900);
    const res = await fetch('/api/generate');
    const data = await res.json();
    setQuestions(data);
  };

  // --- 3. STATE MANAGEMENT (Saving your answer) ---
  const handleOptionSelect = (option) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const clearResponse = () => {
    const updatedAnswers = { ...userAnswers };
    delete updatedAnswers[currentIndex];
    setUserAnswers(updatedAnswers);
  };

  // --- 4. GRADING LOGIC (Calculating right/wrong) ---
  const submitTest = () => {
    if (testState !== 'ACTIVE') return;
    let calculatedScore = 0;
    
    // Loop through all questions and compare user choice to true answer
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.trueAnswer) {
        calculatedScore += 1;
      }
    });
    
    setScore(calculatedScore);
    setTestState('COMPLETED');
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // =============================================================
  // VIEW 1: START SCREEN
  // =============================================================
  if (testState === 'START') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-50 font-sans p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold mb-2 text-white">CrackTheTape V3</h1>
          <p className="text-slate-400 mb-8 font-medium">Placement Simulation Engine</p>
          <div className="flex justify-between text-sm text-slate-300 mb-8 px-4 bg-slate-800 py-3 rounded-lg">
            <span>⏱️ 15 Minutes</span>
            <span>📝 15 Questions</span>
          </div>
          <button 
            onClick={startTest}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            INITIALIZE ENGINE
          </button>
        </div>
      </div>
    );
  }

  // =============================================================
  // VIEW 2: COMPLETED SCREEN & ANSWER KEY (The Upgrade)
  // =============================================================
  if (testState === 'COMPLETED') {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Score Header */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl text-center border border-slate-800 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Execution Report</h2>
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Final Score</p>
            <p className={`text-6xl font-black mb-2 ${percentage >= 70 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {score} <span className="text-3xl text-slate-500">/ {questions.length}</span>
            </p>
            <p className="text-slate-300 mb-6">Accuracy: {percentage}%</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-all"
            >
              Start New Exam
            </button>
          </div>

          {/* Detailed Answer Key */}
          <h3 className="text-xl font-bold text-slate-300 mb-6 border-b border-slate-800 pb-2">Detailed Analysis</h3>
          <div className="space-y-6">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === q.trueAnswer;
              const isSkipped = !userAnswer;

              return (
                <div key={idx} className={`p-6 rounded-xl border ${isCorrect ? 'bg-emerald-900/10 border-emerald-900/50' : 'bg-rose-900/10 border-rose-900/50'}`}>
                  
                  {/* Question Title & Status */}
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-lg font-medium text-slate-200 pr-4">{idx + 1}. {q.question}</p>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border whitespace-nowrap
                      ${isCorrect ? 'bg-emerald-900/50 text-emerald-400 border-emerald-800' : 
                        isSkipped ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-rose-900/50 text-rose-400 border-rose-800'}`}>
                      {isCorrect ? '✓ CORRECT' : isSkipped ? '⚠ SKIPPED' : '✗ INCORRECT'}
                    </span>
                  </div>

                  {/* Answers Display */}
                  <div className="mb-4 space-y-2">
                    <p className="text-sm text-slate-400">
                      Your Answer: <span className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {userAnswer || 'None'}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-slate-400">
                        Correct Answer: <span className="font-semibold text-emerald-400">{q.trueAnswer}</span>
                      </p>
                    )}
                  </div>

                  {/* Hint Block */}
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Engine Hint</p>
                    <p className="text-sm text-slate-300 font-mono">{q.hint}</p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }

  // =============================================================
  // VIEW 3: ACTIVE EXAM UI
  // =============================================================
  const currentQ = questions[currentIndex];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* LEFT: Main Question Area */}
      <div className="flex-1 flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
          <h2 className="text-xl font-semibold text-slate-200">
            Question <span className="text-blue-400">{currentIndex + 1}</span> <span className="text-sm text-slate-500 ml-2">[{currentQ?.topic}]</span>
          </h2>
          <div className="md:hidden text-xl font-mono text-blue-400">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-xl shadow-lg mb-6 flex-1">
          <p className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed mb-8">
            {currentQ?.question}
          </p>

          <div className="space-y-3">
            {currentQ?.options?.map((option, i) => {
              const isSelected = userAnswers[currentIndex] === option;
              return (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center group
                    ${isSelected 
                      ? 'bg-blue-600/10 border-blue-500 ring-1 ring-blue-500' 
                      : 'bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-700/50'
                    }`}
                >
                  <div className={`h-5 w-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-blue-500' : 'border-slate-500 group-hover:border-slate-400'}`}>
                    {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />}
                  </div>
                  <span className={`${isSelected ? 'text-blue-50' : 'text-slate-300'}`}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-6 py-2.5 bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 text-slate-300 font-medium rounded-lg border border-slate-700 transition-colors"
          >
            ← Previous
          </button>
          
          <button
            onClick={clearResponse}
            disabled={!userAnswers[currentIndex]}
            className="px-4 py-2 text-sm text-slate-400 disabled:opacity-30 hover:text-white transition-colors"
          >
            Clear Response
          </button>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIndex === questions.length - 1}
            className="px-6 py-2.5 bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* RIGHT: Sidebar / Navigation Palette */}
      <div className="w-full md:w-80 bg-slate-900 border-l border-slate-800 p-6 flex flex-col md:h-screen sticky top-0">
        
        <div className="hidden md:flex flex-col items-center justify-center bg-slate-950 border border-slate-800 rounded-xl py-6 mb-8 shadow-inner">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Time Remaining</p>
          <div className={`text-4xl font-mono ${timeLeft < 120 ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
            {formatTime(timeLeft)}
          </div>
        </div>

        <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Question Palette</p>
        
        <div className="grid grid-cols-5 gap-2 mb-8">
          {questions.map((_, idx) => {
            const isAnswered = !!userAnswers[idx];
            const isCurrent = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-11 w-full rounded-md text-sm font-bold flex items-center justify-center transition-all duration-200
                  ${isCurrent ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 z-10' : ''}
                  ${isAnswered 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white'
                  }
                `}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col space-y-2 mb-8 text-xs text-slate-400">
          <div className="flex items-center"><div className="w-3 h-3 rounded bg-emerald-600 mr-2" /> Answered</div>
          <div className="flex items-center"><div className="w-3 h-3 rounded bg-slate-800 border border-slate-700 mr-2" /> Not Answered</div>
          <div className="flex items-center"><div className="w-3 h-3 rounded border-2 border-blue-500 mr-2" /> Current Question</div>
        </div>

        <button
          onClick={submitTest}
          className="mt-auto w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all uppercase tracking-wide"
        >
          Submit Final Exam
        </button>
      </div>
    </div>
  );
}