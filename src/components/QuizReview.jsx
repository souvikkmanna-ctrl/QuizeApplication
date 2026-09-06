function QuizReview({
  questions,
  userAnswers,
  onViewResult
}) {
  return (
    <div className="quiz-container review-container">
      <h1>Review Answers</h1>

      {questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect =
          userAnswer === question.correctAnswer;

        return (
          <div className="review-question" key={index}>
            <h3>
              Q{index + 1}. {question.question}
            </h3>

            <p>
              <strong>Your Answer:</strong>{" "}
              {userAnswer || "Not Answered"}
            </p>

            <p>
              <strong>Correct Answer:</strong>{" "}
              {question.correctAnswer}
            </p>

            <p
              className={
                isCorrect ? "correct-answer" : "wrong-answer"
              }
            >
              {isCorrect ? "✅ Correct" : "❌ Wrong"}
            </p>
          </div>
        );
      })}

      <button
        className="next-button"
        onClick={onViewResult}
      >
        View Result
      </button>
    </div>
  );
}

export default QuizReview;