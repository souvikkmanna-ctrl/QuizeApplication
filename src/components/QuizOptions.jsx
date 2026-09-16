import React from "react";

function QuizOptions({
  options = [],
  selectedAnswer = null,
  onAnswer,
  isAnswered = false
}) {
  return (
    <div className="options" role="group" aria-label="Quiz question options">
      {options.map((option, index) => {
        const optionValue = typeof option === "object" ? option.text : option;
        const optionKey = typeof option === "object" ? option.id : `${option}-${index}`;
        const isSelected = selectedAnswer === optionValue;

        return (
          <button
            key={optionKey}
            type="button"
            className={`option-btn ${isSelected ? "selected" : ""}`}
            onClick={() => onAnswer(optionValue)}
            disabled={isAnswered}
            aria-pressed={isSelected}
          >
            {optionValue}
          </button>
        );
      })}
    </div>
  );
}

export default QuizOptions;