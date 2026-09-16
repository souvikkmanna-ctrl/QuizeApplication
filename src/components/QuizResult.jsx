import React from "react";

function QuizResult({
  studentName = "",
  studentCode = "",
  score = 0,
  totalQuestions = 0,
  passingPercentage = 50,
  onRestart,
  onReview
}) {
  const safeTotal = Math.max(totalQuestions, 0);
  const percentage =
    safeTotal > 0 ? Math.round((Math.max(score, 0) / safeTotal) * 100) : 0;
  const isPassed = percentage >= passingPercentage;

  const getFeedback = () => {
    if (percentage >= 80) return { text: "Outstanding Work!", color: "#16a34a" };
    if (percentage >= 50) return { text: "Good Effort! Passed.", color: "#2563eb" };
    return { text: "Needs Improvement. Try Again!", color: "#dc2626" };
  };

  const feedback = getFeedback();

  return (
    <div className="quiz-container quiz-result-container" role="status">
      <h1>{isPassed ? "Quiz Completed 🎉" : "Quiz Finished"}</h1>

      {(studentName || studentCode) && (
        <p className="student-details">
          {studentName && <strong>{studentName}</strong>}
          {studentName && studentCode && " | "}
          {studentCode && <span>ID: {studentCode}</span>}
        </p>
      )}

      <div className="score-summary">
        <h2 className="score-display">
          Your Score: {score} / {safeTotal} ({percentage}%)
        </h2>
        <p
          className="score-feedback"
          style={{ color: feedback.color, fontWeight: 700, margin: "10px 0 20px" }}
        >
          {feedback.text}
        </p>
      </div>

      <div className="result-actions">
        {onReview && (
          <button type="button" className="review-btn" onClick={onReview}>
            Review Answers
          </button>
        )}
        <button type="button" className="next-button" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizResult;