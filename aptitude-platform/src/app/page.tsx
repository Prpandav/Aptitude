'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, XCircle, ChevronRight, ChevronLeft, RefreshCcw, Flag, AlertCircle } from 'lucide-react';

// -------------------------------------------------------------
// TYPESCRIPT BLUEPRINTS (Interfaces)
// -------------------------------------------------------------
interface Question {
  id: string;
  topic: string;
  question: string;
  options: string[];
  trueAnswer: string;
  hint: string;
}

export default function MockTestDashboard() {
  // --- ADDED TYPES TO STATE ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [testState, setTestState] = useState<'START' | 'ACTIVE' | 'COMPLETED'>('START'); 
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(900); 

  // --- FIXED HOISTING: Wrapped in useCallback and moved above useEffect ---
  const submitTest = useCallback(() => {
    if (testState !== 'ACTIVE') return;
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.trueAnswer) calculatedScore += 1;
    });
    setScore(calculatedScore);
    setTestState('COMPLETED');
  }, [testState, questions, userAnswers]);

  useEffect(() => {
    let timer: NodeJS.Timeout; 
    if (testState === 'ACTIVE' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && testState === 'ACTIVE') {
      // Push state update to the next event loop tick to prevent cascading renders
      setTimeout(() => {
        submitTest();
      }, 0);
    }
    return () => clearInterval(timer);
  }, [testState, timeLeft, submitTest]);

  const startTest = async () => {
    setTestState('ACTIVE');
    setTimeLeft(900);
    const res = await fetch('/api/generate');
    const data: Question[] = await res.json();
    setQuestions(data);
  };

  const handleOptionSelect = (option: string) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const clearResponse = () => {
    const updatedAnswers = { ...userAnswers };
    delete updatedAnswers[currentIndex];
    setUserAnswers(updatedAnswers);
  };

  const toggleMarkForReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // =============================================================
  // VIEW 1: START SCREEN (Enterprise Light)
  // =============================================================
  if (testState === 'START') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 font-sans p-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="max-w-lg w-full bg-white border border-slate-200 p-10 rounded-2xl shadow-xl text-center"
        >
          <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
            <CheckCircle2 size={32} />
          </div>
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight text-slate-900">
            Placement Assessment
          </h1>
          <p className="text-slate-500 mb-8 font-medium">Standardized IT Aptitude Simulation</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10 text-left">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</p>
              <p className="text-lg font-semibold flex items-center gap-2"><Clock size={18} className="text-blue-500"/> 15 Minutes</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Items</p>
              <p className="text-lg font-semibold flex items-center gap-2"><AlertCircle size={18} className="text-blue-500"/> 15 Questions</p>
            </div>
          </div>
          
          <button 
            onClick={startTest}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            Acknowledge & Begin
          </button>
        </motion.div>
      </div>
    );
  }

  // =============================================================
  // VIEW 2: COMPLETED SCREEN (Detailed Analytics)
  // =============================================================
  if (testState === 'COMPLETED') {
    const percentage = Math.round((score / questions.length) * 100);
    const attempted = Object.keys(userAnswers).length;
    
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8 text-center relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1.5 ${percentage >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Performance Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm font-semibold text-slate-500 uppercase">Final Score</p>
                <p className="text-4xl font-black mt-2 text-slate-900">{score}<span className="text-xl text-slate-400">/{questions.length}</span></p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm font-semibold text-slate-500 uppercase">Accuracy</p>
                <p className={`text-4xl font-black mt-2 ${percentage >= 70 ? 'text-emerald-600' : 'text-rose-600'}`}>{percentage}%</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm font-semibold text-slate-500 uppercase">Attempted</p>
                <p className="text-4xl font-black mt-2 text-blue-600">{attempted}</p>
              </div>
            </div>
            
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mx-auto shadow-sm"
            >
              <RefreshCcw size={16} /> Return to Dashboard
            </button>
          </div>

          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Question Breakdown</h3>
          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === q.trueAnswer;
              const isSkipped = !userAnswer;

              return (
                <div key={idx} className={`p-6 rounded-xl border ${isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-base font-medium text-slate-800 leading-relaxed">
                      <span className="text-slate-400 font-mono mr-2">{idx + 1}.</span> {q.question}
                    </p>
                    {isCorrect ? <CheckCircle2 className="text-emerald-500 shrink-0" /> : <XCircle className="text-rose-500 shrink-0" />}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Your Selection</p>
                      <p className={`font-medium ${isCorrect ? 'text-emerald-600' : isSkipped ? 'text-slate-400' : 'text-rose-600'}`}>
                        {userAnswer || 'Not Attempted'}
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <p className="text-xs text-emerald-600 uppercase font-semibold mb-1">Correct Answer</p>
                        <p className="font-medium text-emerald-700">{q.trueAnswer}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-lg">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">Logic Formula</p>
                    <p className="text-sm text-slate-600">{q.hint}</p>
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
  // VIEW 3: ACTIVE EXAM UI (Proctor Layout)
  // =============================================================
  const currentQ = questions[currentIndex];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* LEFT: Main Question Area */}
      <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8">
        
        {/* Header Ribbon */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-3">
            Question {currentIndex + 1}
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-md font-semibold border border-slate-200">
              {currentQ?.topic}
            </span>
          </h2>
          <div className="flex items-center gap-2 text-lg font-mono font-bold bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
            <Clock size={18} className={timeLeft < 120 ? 'text-rose-500 animate-pulse' : 'text-slate-500'} />
            <span className={timeLeft < 120 ? 'text-rose-600' : 'text-slate-700'}>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Container */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-xl font-medium text-slate-800 leading-relaxed mb-8">
                  {currentQ?.question}
                </p>

                <div className="space-y-3">
                  {currentQ?.options?.map((option: string, i: number) => {
                    const isSelected = userAnswers[currentIndex] === option;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(option)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center
                          ${isSelected 
                            ? 'bg-blue-50 border-blue-500 shadow-sm' 
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                      >
                        <div className={`h-5 w-5 rounded-full border-2 mr-4 flex items-center justify-center shrink-0
                          ${isSelected ? 'border-blue-600' : 'border-slate-300'}`}>
                          {isSelected && <div className="h-2 w-2 rounded-full bg-blue-600" />}
                        </div>
                        <span className={`text-base font-medium ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Toolbar */}
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={toggleMarkForReview}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors border
                  ${markedForReview[currentIndex] 
                    ? 'bg-purple-100 text-purple-700 border-purple-200' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}
              >
                <Flag size={16} className={markedForReview[currentIndex] ? 'fill-purple-700' : ''} />
                {markedForReview[currentIndex] ? 'Unmark' : 'Mark for Review'}
              </button>
              <button
                onClick={clearResponse}
                disabled={!userAnswers[currentIndex]}
                className="px-4 py-2.5 text-sm font-semibold text-slate-500 disabled:opacity-30 hover:bg-white hover:text-slate-700 rounded-lg transition-colors border border-transparent hover:border-slate-200"
              >
                Clear Response
              </button>
            </div>

            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-5 py-2.5 bg-white border border-slate-200 disabled:opacity-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg shadow-sm transition-colors"
              >
                <ChevronLeft size={18} /> Prev
              </button>
              
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-1 px-5 py-2.5 bg-blue-600 disabled:opacity-50 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Navigation Palette */}
      <div className="w-full md:w-80 bg-white border-l border-slate-200 flex flex-col md:h-screen shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10">
        
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Question Palette</p>
          
          <div className="grid grid-cols-4 gap-3 mb-8">
            {questions.map((_, idx: number) => {
              const isAnswered = !!userAnswers[idx];
              const isCurrent = currentIndex === idx;
              const isMarked = markedForReview[idx];
              
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-12 w-full rounded-lg text-sm font-bold flex items-center justify-center transition-all border-2
                    ${isCurrent ? 'ring-2 ring-blue-500 ring-offset-2 border-transparent' : ''}
                    ${isMarked && isAnswered ? 'bg-purple-600 text-white border-purple-700' :
                      isMarked ? 'bg-white text-purple-600 border-purple-300' :
                      isAnswered ? 'bg-emerald-500 text-white border-emerald-600' : 
                      'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }
                  `}
                >
                  {idx + 1}
                  {/* Indicator Dot for marked + answered */}
                  {isMarked && isAnswered && (
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-2">Legend</p>
            <div className="flex items-center text-sm font-medium text-slate-700"><div className="w-4 h-4 rounded border-2 bg-emerald-500 border-emerald-600 mr-3 shadow-sm" /> Answered</div>
            <div className="flex items-center text-sm font-medium text-slate-700"><div className="w-4 h-4 rounded border-2 bg-white border-slate-300 mr-3 shadow-sm" /> Not Answered</div>
            <div className="flex items-center text-sm font-medium text-slate-700"><div className="w-4 h-4 rounded border-2 bg-white border-purple-400 mr-3 shadow-sm" /> Marked for Review</div>
            <div className="flex items-center text-sm font-medium text-slate-700"><div className="w-4 h-4 rounded border-2 bg-purple-600 border-purple-700 mr-3 shadow-sm relative"><div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 border border-white rounded-full"/></div> Answered & Marked</div>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-200">
          <button
            onClick={submitTest}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <CheckCircle2 size={18} />
            SUBMIT ASSESSMENT
          </button>
        </div>
      </div>
    </div>
  );
}