function QuizOptions({
  options,
  selectedAnswer,
  onAnswer
}) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          className={
            selectedAnswer === option
              ? "selected"
              : ""
          }
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuizOptions;