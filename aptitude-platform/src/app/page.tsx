'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, XCircle, ChevronRight, ChevronLeft, RefreshCcw, Play } from 'lucide-react';

export default function MockTestDashboard() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [testState, setTestState] = useState('START'); 
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(900); 

  useEffect(() => {
    let timer;
    if (testState === 'ACTIVE' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && testState === 'ACTIVE') {
      submitTest();
    }
    return () => clearInterval(timer);
  }, [testState, timeLeft]);

  const startTest = async () => {
    setTestState('ACTIVE');
    setTimeLeft(900);
    const res = await fetch('/api/generate');
    const data = await res.json();
    setQuestions(data);
  };

  const handleOptionSelect = (option) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const clearResponse = () => {
    const updatedAnswers = { ...userAnswers };
    delete updatedAnswers[currentIndex];
    setUserAnswers(updatedAnswers);
  };

  const submitTest = () => {
    if (testState !== 'ACTIVE') return;
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.trueAnswer) calculatedScore += 1;
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-slate-50 font-sans p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-[#0a0a0a]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md w-full bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-500">
            CrackTheTape
          </h1>
          <p className="text-slate-400 mb-10 font-medium text-sm tracking-wide uppercase">Placement Simulation Engine V3</p>
          
          <div className="flex justify-between items-center text-sm text-slate-300 mb-10 px-6 bg-black/40 py-4 rounded-2xl border border-white/5">
            <span className="flex items-center gap-2"><Clock size={16} className="text-blue-400"/> 15 Minutes</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400"/> 15 Questions</span>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={startTest}
            className="group relative w-full py-4 bg-white text-black rounded-xl font-bold transition-all overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Engine <Play size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // =============================================================
  // VIEW 2: COMPLETED SCREEN & ANSWER KEY
  // =============================================================
  if (testState === 'COMPLETED') {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-slate-50 font-sans p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/[0.02] backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center border border-white/10 mb-8 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 ${percentage >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Execution Report</h2>
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 font-semibold">Final Score</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className={`text-7xl font-black tracking-tighter ${percentage >= 70 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {score}
              </span>
              <span className="text-3xl text-slate-600 font-medium">/ {questions.length}</span>
            </div>
            <p className="text-slate-400 mb-10 font-medium tracking-wide">System Accuracy: <span className="text-white">{percentage}%</span></p>
            
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 mx-auto border border-white/10"
            >
              <RefreshCcw size={16} /> Reboot Simulation
            </motion.button>
          </div>

          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 px-2">Detailed Analysis</h3>
          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === q.trueAnswer;
              const isSkipped = !userAnswer;

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  key={idx} 
                  className={`p-6 rounded-2xl border backdrop-blur-sm transition-colors ${
                    isCorrect ? 'bg-emerald-950/20 border-emerald-900/30' : 'bg-rose-950/20 border-rose-900/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <p className="text-base font-medium text-slate-200 leading-relaxed">
                      <span className="text-slate-500 font-mono mr-2">{String(idx + 1).padStart(2, '0')}.</span>
                      {q.question}
                    </p>
                    {isCorrect ? <CheckCircle2 className="text-emerald-500 shrink-0" /> : <XCircle className="text-rose-500 shrink-0" />}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Your Selection</p>
                      <p className={`font-medium ${isCorrect ? 'text-emerald-400' : isSkipped ? 'text-slate-500' : 'text-rose-400'}`}>
                        {userAnswer || 'Skipped'}
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-900/30">
                        <p className="text-xs text-emerald-500/70 uppercase tracking-wider mb-1">Valid Output</p>
                        <p className="font-medium text-emerald-400">{q.trueAnswer}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Engine Hint</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{q.hint}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  // =============================================================
  // VIEW 3: ACTIVE EXAM UI
  // =============================================================
  const currentQ = questions[currentIndex];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-blue-500/30">
      
      {/* LEFT: Main Question Area */}
      <div className="flex-1 flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full h-screen overflow-hidden">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              Question {currentIndex + 1}
              <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs rounded-full font-medium border border-white/5">
                {currentQ?.topic}
              </span>
            </h2>
          </div>
          <div className="md:hidden flex items-center gap-2 text-xl font-mono text-slate-300 bg-white/5 px-4 py-2 rounded-xl">
            <Clock size={18} className={timeLeft < 120 ? 'text-rose-500 animate-pulse' : 'text-blue-400'} />
            <span className={timeLeft < 120 ? 'text-rose-500' : ''}>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Container with Animation */}
        <div className="flex-1 relative overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="pb-24"
            >
              <p className="text-xl md:text-2xl font-medium text-slate-100 leading-relaxed mb-10 tracking-tight">
                {currentQ?.question}
              </p>

              <div className="space-y-3">
                {currentQ?.options?.map((option, i) => {
                  const isSelected = userAnswers[currentIndex] === option;
                  return (
                    <motion.button
                      whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.99 }}
                      key={i}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center group
                        ${isSelected 
                          ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                        }`}
                    >
                      <div className={`h-5 w-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors shrink-0
                        ${isSelected ? 'border-blue-400' : 'border-slate-600 group-hover:border-slate-400'}`}>
                        {isSelected && <motion.div layoutId="activeCheck" className="h-2 w-2 rounded-full bg-blue-400" />}
                      </div>
                      <span className={`text-base ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pointer-events-none md:static md:bg-none">
          <div className="flex items-center justify-between pt-4 border-t border-white/10 pointer-events-auto backdrop-blur-md md:backdrop-blur-none bg-[#0a0a0a]/80 md:bg-transparent rounded-2xl md:rounded-none px-4 md:px-0 py-4 md:py-0">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-3 bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 text-slate-300 font-medium rounded-xl transition-colors"
            >
              <ChevronLeft size={18} /> Prev
            </button>
            
            <button
              onClick={clearResponse}
              disabled={!userAnswers[currentIndex]}
              className="px-4 py-2 text-sm text-slate-500 disabled:opacity-0 hover:text-slate-300 transition-colors"
            >
              Clear
            </button>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex === questions.length - 1}
              className="flex items-center gap-2 px-5 py-3 bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 font-bold rounded-xl transition-colors shadow-lg"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: Sidebar / Navigation Palette */}
      <div className="w-full md:w-80 bg-white/[0.02] border-l border-white/10 p-6 flex flex-col md:h-screen sticky top-0 backdrop-blur-3xl">
        
        <div className="hidden md:flex flex-col items-center justify-center bg-black/40 border border-white/5 rounded-2xl py-8 mb-8">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <Clock size={12} /> Time Remaining
          </p>
          <div className={`text-4xl font-mono tracking-tight ${timeLeft < 120 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </div>
        </div>

        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Question Palette</p>
        
        <div className="grid grid-cols-5 gap-2 mb-8">
          {questions.map((_, idx) => {
            const isAnswered = !!userAnswers[idx];
            const isCurrent = currentIndex === idx;
            return (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-11 w-full rounded-xl text-sm font-bold flex items-center justify-center transition-colors relative
                  ${isCurrent ? 'bg-white text-black z-10' : 
                    isAnswered ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' : 'bg-black/20 text-slate-500 border border-white/5 hover:bg-white/5 hover:text-slate-300'
                  }
                `}
              >
                {idx + 1}
                {isAnswered && !isCurrent && (
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </motion.button>
            );
          })}
        </div>

        <button
          onClick={submitTest}
          className="mt-auto w-full py-4 bg-rose-600/90 hover:bg-rose-500 text-white font-bold rounded-xl transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(225,29,72,0.2)]"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
}