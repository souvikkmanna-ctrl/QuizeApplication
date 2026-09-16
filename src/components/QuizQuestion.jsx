import React from "react";

function decodeHtml(htmlString) {
  if (typeof htmlString !== "string") return "";
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.documentElement.textContent || htmlString;
}

function QuizQuestion({
  question = "",
  questionNumber = 1,
  totalQuestions = 1
}) {
  const rawText =
    typeof question === "object" && question !== null
      ? question.question || question.title || question.text
      : question;

  const questionText = decodeHtml(rawText);

  if (!questionText) {
    return (
      <div className="quiz-question-container" aria-busy="true">
        <p className="question-number">Loading question...</p>
      </div>
    );
  }

  return (
    <div className="quiz-question-container" aria-live="polite">
      <p className="question-number">
        Question {questionNumber} of {Math.max(totalQuestions, 1)}
      </p>
      <h2 className="question-text">{questionText}</h2>
    </div>
  );
}

export default QuizQuestion;