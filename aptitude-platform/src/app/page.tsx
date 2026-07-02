'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import Footer from './../components/footer';
import {
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  RefreshCcw,
  Flag,
  AlertCircle,
  Loader2,
  Sparkles,
  BarChart3,
} from 'lucide-react';

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

const cardTransition: Transition = {
  duration: 0.28,
  ease: 'easeOut',
};

const cardMotion = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: cardTransition,
};

export default function MockTestDashboard() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [testState, setTestState] = useState<'START' | 'ACTIVE' | 'COMPLETED'>('START');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(900);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const answeredCount = useMemo(() => Object.keys(userAnswers).length, [userAnswers]);
  const reviewCount = useMemo(
    () => Object.values(markedForReview).filter(Boolean).length,
    [markedForReview]
  );
  const totalQuestions = questions.length || 15;
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);
  const currentQ = questions[currentIndex];

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
    let timer: ReturnType<typeof setInterval>;

    if (testState === 'ACTIVE' && timeLeft > 0 && questions.length > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && testState === 'ACTIVE') {
      setTimeout(() => submitTest(), 0);
    }

    return () => clearInterval(timer);
  }, [testState, timeLeft, submitTest, questions.length]);

  const startTest = async () => {
    try {
      setErrorMessage('');
      setIsGenerating(true);
      setTimeLeft(900);
      setCurrentIndex(0);
      setUserAnswers({});
      setMarkedForReview({});

      const res = await fetch('/api/generate');
      if (!res.ok) throw new Error('Could not generate questions. Please try again.');

      const data: Question[] = await res.json();
      setQuestions(data);
      setTestState('ACTIVE');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleOptionSelect = (option: string) => {
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: option }));
  };

  const clearResponse = () => {
    setUserAnswers((prev) => {
      const updatedAnswers = { ...prev };
      delete updatedAnswers[currentIndex];
      return updatedAnswers;
    });
  };

  const toggleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const goToNextQuestion = () => {
    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const goToPreviousQuestion = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  // =============================================================
  // VIEW 1: START SCREEN
  // =============================================================
  if (testState === 'START') {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-50 p-4 font-sans text-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <motion.div
          {...cardMotion}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 text-center shadow-2xl shadow-slate-200/80 backdrop-blur md:p-10"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-blue-600" />

          <motion.div
            initial={{ rotate: -8, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.12, type: 'spring', stiffness: 180 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm"
          >
            <CheckCircle2 size={32} />
          </motion.div>

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Sparkles size={14} className="text-blue-500" />
            AI Generated Assessment
          </p>

          <h1 className="mb-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Placement Assessment
          </h1>
          <p className="mx-auto mb-8 max-w-sm font-medium leading-relaxed text-slate-500">
            A focused IT aptitude simulation with timed questions, review marking, and detailed feedback.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Duration</p>
              <p className="flex items-center gap-2 text-lg font-semibold">
                <Clock size={18} className="text-blue-500" /> 15 Minutes
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">Total Items</p>
              <p className="flex items-center gap-2 text-lg font-semibold">
                <AlertCircle size={18} className="text-blue-500" /> 15 Questions
              </p>
            </motion.div>
          </div>

          {errorMessage && (
            <div className="mb-4 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
              {errorMessage}
            </div>
          )}

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={startTest}
            disabled={isGenerating}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isGenerating ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Generating Questions
              </>
            ) : (
              <>
                Acknowledge & Begin
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </motion.div>
        <Footer />
      </div>
    );
  }

  // =============================================================
  // VIEW 2: COMPLETED SCREEN
  // =============================================================
  if (testState === 'COMPLETED') {
    const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
    const attempted = Object.keys(userAnswers).length;

    return (
      <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 md:p-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...cardMotion}
            className="relative mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8"
          >
            <div className={`absolute left-0 top-0 h-1.5 w-full ${percentage >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} />

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-100">
              <BarChart3 size={28} />
            </div>

            <h2 className="mb-2 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
              Performance Analytics
            </h2>
            <p className="mb-8 text-sm font-medium text-slate-500">
              Review your score, accuracy, attempts, and the logic behind each answer.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Final Score</p>
                <p className="mt-2 text-4xl font-black text-slate-900">
                  {score}<span className="text-xl text-slate-400">/{questions.length}</span>
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Accuracy</p>
                <p className={`mt-2 text-4xl font-black ${percentage >= 70 ? 'text-emerald-600' : 'text-rose-600'}`}>{percentage}%</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Attempted</p>
                <p className="mt-2 text-4xl font-black text-blue-600">{attempted}</p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="mx-auto flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              <RefreshCcw size={16} /> Return to Dashboard
            </motion.button>
          </motion.div>

          <h3 className="mb-4 px-2 text-sm font-bold uppercase tracking-widest text-slate-500">Question Breakdown</h3>
          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === q.trueAnswer;
              const isSkipped = !userAnswer;

              return (
                <motion.div
                  key={q.id || idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx * 0.03, 0.25) }}
                  className={`rounded-2xl border p-5 shadow-sm transition-all md:p-6 ${
                    isCorrect ? 'border-emerald-200 bg-emerald-50/60' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <p className="text-base font-semibold leading-relaxed text-slate-800">
                      <span className="mr-2 font-mono text-slate-400">{idx + 1}.</span> {q.question}
                    </p>
                    {isCorrect ? <CheckCircle2 className="shrink-0 text-emerald-500" /> : <XCircle className="shrink-0 text-rose-500" />}
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <p className="mb-1 text-xs font-bold uppercase text-slate-500">Your Selection</p>
                      <p className={`font-semibold ${isCorrect ? 'text-emerald-600' : isSkipped ? 'text-slate-400' : 'text-rose-600'}`}>
                        {userAnswer || 'Not Attempted'}
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                        <p className="mb-1 text-xs font-bold uppercase text-emerald-600">Correct Answer</p>
                        <p className="font-semibold text-emerald-700">{q.trueAnswer}</p>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-blue-600">Logic Formula</p>
                    <p className="text-sm leading-relaxed text-slate-600">{q.hint}</p>
                  </div>
                </motion.div>
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
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 font-sans text-slate-900 selection:bg-blue-200 md:flex-row">
      {/* LEFT: Main Question Area */}
      <main className="flex min-w-0 flex-1 flex-col p-4 md:p-6 lg:p-8">
        {/* Header Ribbon */}
        <motion.header
          {...cardMotion}
          className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Assessment Console</p>
              <h2 className="flex flex-wrap items-center gap-3 text-lg font-black text-slate-800 md:text-xl">
                Question {currentIndex + 1}
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  {currentQ?.topic || 'Loading'}
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 sm:block">
                {answeredCount}/{totalQuestions} Attempted
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 font-mono text-lg font-black">
                <Clock size={18} className={timeLeft < 120 ? 'animate-pulse text-rose-500' : 'text-slate-500'} />
                <span className={timeLeft < 120 ? 'text-rose-600' : 'text-slate-700'}>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          <div className="h-1.5 w-full bg-slate-100">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </motion.header>

        {/* Question Container */}
        <motion.section
          {...cardMotion}
          transition={{ ...cardMotion.transition, delay: 0.05 }}
          className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="flex-1 overflow-y-auto p-5 md:p-8">
            {!currentQ ? (
              <div className="flex h-full min-h-95 flex-col items-center justify-center text-center text-slate-500">
                <Loader2 className="mb-3 animate-spin text-blue-600" size={28} />
                <p className="font-semibold">Preparing your questions...</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 md:p-6">
                    <p className="text-xl font-semibold leading-relaxed text-slate-800 md:text-2xl">
                      {currentQ.question}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {currentQ.options?.map((option: string, i: number) => {
                      const isSelected = userAnswers[currentIndex] === option;
                      const optionLabel = String.fromCharCode(65 + i);

                      return (
                        <motion.button
                          key={option}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleOptionSelect(option)}
                          className={`group flex w-full items-center rounded-2xl border-2 p-4 text-left transition-all ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-100'
                              : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50 hover:shadow-sm'
                          }`}
                        >
                          <div
                            className={`mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm font-black transition-all ${
                              isSelected
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-200 group-hover:text-blue-600'
                            }`}
                          >
                            {isSelected ? <CheckCircle2 size={18} /> : optionLabel}
                          </div>
                          <span className={`text-base font-semibold ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                            {option}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Action Toolbar */}
          <div className="border-t border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={toggleMarkForReview}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all ${
                    markedForReview[currentIndex]
                      ? 'border-purple-200 bg-purple-100 text-purple-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Flag size={16} className={markedForReview[currentIndex] ? 'fill-purple-700' : ''} />
                  {markedForReview[currentIndex] ? 'Unmark Review' : 'Mark for Review'}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={clearResponse}
                  disabled={!userAnswers[currentIndex]}
                  className="rounded-xl border border-transparent px-4 py-2.5 text-sm font-bold text-slate-500 transition-all hover:border-slate-200 hover:bg-white hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Clear Response
                </motion.button>
              </div>

              <div className="flex gap-2 lg:ml-auto">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={goToPreviousQuestion}
                  disabled={currentIndex === 0}
                  className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
                >
                  <ChevronLeft size={18} /> Prev
                </motion.button>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={goToNextQuestion}
                  disabled={currentIndex === questions.length - 1}
                  className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-blue-600 px-5 py-2.5 font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
                >
                  Next <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* RIGHT: Navigation Palette */}
      <aside className="z-10 flex w-full flex-col border-l border-slate-200 bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.02)] md:h-screen md:w-80 lg:w-96">
        <div className="flex-1 overflow-y-auto p-5 md:p-6">
          <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Progress</p>
              <p className="text-xs font-bold text-blue-600">{progressPercentage}%</p>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full bg-blue-600"
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
                <p className="text-lg font-black text-emerald-600">{answeredCount}</p>
                <p className="text-[10px] font-bold uppercase text-slate-400">Answered</p>
              </div>
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
                <p className="text-lg font-black text-purple-600">{reviewCount}</p>
                <p className="text-[10px] font-bold uppercase text-slate-400">Review</p>
              </div>
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
                <p className="text-lg font-black text-slate-600">{Math.max(totalQuestions - answeredCount, 0)}</p>
                <p className="text-[10px] font-bold uppercase text-slate-400">Left</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">Question Palette</p>

          <div className="mb-8 grid grid-cols-5 gap-3 md:grid-cols-4">
            {questions.map((_, idx: number) => {
              const isAnswered = !!userAnswers[idx];
              const isCurrent = currentIndex === idx;
              const isMarked = markedForReview[idx];

              return (
                <motion.button
                  key={idx}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex h-12 w-full items-center justify-center rounded-xl border-2 text-sm font-black transition-all ${
                    isCurrent ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                  } ${
                    isMarked && isAnswered
                      ? 'border-purple-700 bg-purple-600 text-white'
                      : isMarked
                        ? 'border-purple-300 bg-white text-purple-600'
                        : isAnswered
                          ? 'border-emerald-600 bg-emerald-500 text-white'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50'
                  }`}
                >
                  {idx + 1}
                  {isMarked && isAnswered && (
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-2 border-b border-slate-200 pb-2 text-xs font-black uppercase tracking-widest text-slate-500">Legend</p>
            <div className="flex items-center text-sm font-semibold text-slate-700">
              <div className="mr-3 h-4 w-4 rounded border-2 border-emerald-600 bg-emerald-500 shadow-sm" /> Answered
            </div>
            <div className="flex items-center text-sm font-semibold text-slate-700">
              <div className="mr-3 h-4 w-4 rounded border-2 border-slate-300 bg-white shadow-sm" /> Not Answered
            </div>
            <div className="flex items-center text-sm font-semibold text-slate-700">
              <div className="mr-3 h-4 w-4 rounded border-2 border-purple-400 bg-white shadow-sm" /> Marked for Review
            </div>
            <div className="flex items-center text-sm font-semibold text-slate-700">
              <div className="relative mr-3 h-4 w-4 rounded border-2 border-purple-700 bg-purple-600 shadow-sm">
                <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-white bg-emerald-400" />
              </div>
              Answered & Marked
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-white p-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={submitTest}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 py-3.5 font-black text-white shadow-lg shadow-slate-800/15 transition-all hover:bg-slate-900"
          >
            <CheckCircle2 size={18} />
            Submit Assessment
          </motion.button>
        </div>
      </aside>
    </div>
  );
}
