import React from "react";

function decodeHtml(htmlString) {
  if (typeof htmlString !== "string") return htmlString ?? "";
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.documentElement.textContent || htmlString;
}

function QuizReview({
  questions = [],
  userAnswers = [],
  onViewResult
}) {
  const getStatusClass = (isAnswered, isCorrect) => {
    if (!isAnswered) return "unanswered-status";
    return isCorrect ? "correct-status" : "wrong-status";
  };

  return (
    <div className="quiz-container review-container">
      <h1>Review Answers</h1>

      <div className="review-list">
        {questions.map((question, index) => {
          const rawAnswer = Array.isArray(userAnswers)
            ? userAnswers[index]
            : userAnswers[question.id ?? index];

          const isAnswered =
            rawAnswer !== undefined &&
            rawAnswer !== null &&
            String(rawAnswer).trim() !== "";

          const safeUserAnswer = isAnswered ? String(rawAnswer).trim() : null;
          const safeCorrectAnswer = String(question.correctAnswer ?? "").trim();

          const isCorrect =
            isAnswered &&
            safeUserAnswer.toLowerCase() === safeCorrectAnswer.toLowerCase();

          return (
            <div
              className={`review-question-card ${
                !isAnswered ? "unanswered" : isCorrect ? "correct" : "wrong"
              }`}
              key={question.id || `q-${index}`}
            >
              <h3 className="review-question-title">
                Q{index + 1}. {decodeHtml(question.question || question.title)}
              </h3>

              <div className="review-details">
                <p>
                  <strong>Your Answer:</strong>{" "}
                  <span
                    className={
                      !isAnswered
                        ? "text-muted"
                        : isCorrect
                        ? "text-correct"
                        : "text-wrong"
                    }
                  >
                    {isAnswered ? decodeHtml(safeUserAnswer) : "Not Answered"}
                  </span>
                </p>

                <p>
                  <strong>Correct Answer:</strong>{" "}
                  <span className="text-correct">
                    {decodeHtml(safeCorrectAnswer)}
                  </span>
                </p>

                {question.explanation && (
                  <p className="review-explanation">
                    <strong>Explanation:</strong> {decodeHtml(question.explanation)}
                  </p>
                )}
              </div>

              <div className={`status-badge ${getStatusClass(isAnswered, isCorrect)}`}>
                {!isAnswered
                  ? "⚠️ Not Answered"
                  : isCorrect
                  ? "✅ Correct"
                  : "❌ Incorrect"}
              </div>
            </div>
          );
      })}
      </div>

      <div className="result-actions">
        <button type="button" className="next-button" onClick={onViewResult}>
          Back to Result
        </button>
      </div>
    </div>
  );
}

export default QuizReview;