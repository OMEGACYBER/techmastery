
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  chapterTitle: string;
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, chapterTitle, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (option: string) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const getOptionClasses = (option: string) => {
    if (!isSubmitted) {
      return selectedAnswers[currentQuestionIndex] === option
        ? 'bg-brand-accent text-white'
        : 'bg-brand-secondary hover:bg-brand-accent/50';
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500/80 text-white';
    }
    if (option === selectedAnswers[currentQuestionIndex] && option !== currentQuestion.correctAnswer) {
      return 'bg-red-500/80 text-white';
    }
    return 'bg-brand-secondary';
  };
  
  if (isSubmitted) {
    const score = getScore();
    return (
        <div className="max-w-4xl mx-auto p-8 bg-brand-secondary rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-white mb-4">Quiz Results</h2>
            <p className="text-xl text-center text-brand-light mb-8">Chapter: {chapterTitle}</p>
            <div className="text-center mb-8">
                <p className="text-5xl font-bold text-brand-accent">{score} / {questions.length}</p>
                <p className="text-lg text-gray-300 mt-2">Correct Answers</p>
            </div>
            <div className="space-y-6">
                {questions.map((q, index) => (
                    <div key={index} className="p-4 bg-brand-primary rounded-md">
                        <p className="font-semibold text-lg">{index + 1}. {q.question}</p>
                        <p className={`mt-2 ${selectedAnswers[index] === q.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                            Your answer: {selectedAnswers[index] ?? 'Not answered'}
                        </p>
                        {selectedAnswers[index] !== q.correctAnswer && <p className="text-green-400">Correct answer: {q.correctAnswer}</p>}
                        <p className="text-sm text-gray-400 mt-2"><strong>Explanation:</strong> {q.explanation}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={onComplete}
                className="w-full mt-8 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                Back to Lessons
            </button>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="max-w-4xl mx-auto p-8 bg-brand-secondary rounded-lg shadow-2xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Quiz: {chapterTitle}</h2>
        <p className="text-gray-300">Question {currentQuestionIndex + 1} of {questions.length}</p>
        <div className="w-full bg-brand-primary rounded-full h-2.5 mt-2">
            <div className="bg-brand-accent h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6 text-brand-light">{currentQuestion.question}</h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${getOptionClasses(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        {currentQuestionIndex === questions.length - 1 ? (
             <button 
                onClick={handleSubmit} 
                disabled={selectedAnswers[currentQuestionIndex] === null}
                className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                Submit Quiz
            </button>
        ) : (
            <button 
                onClick={handleNext} 
                disabled={selectedAnswers[currentQuestionIndex] === null}
                className="px-6 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                Next Question
            </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
