function QuizResult({
  score,
  totalQuestions,
  onRestart
}) {
  return (
    <div className="quiz-container">
      <h1>Quiz Completed 🎉</h1>

      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>

      <button onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizResult;