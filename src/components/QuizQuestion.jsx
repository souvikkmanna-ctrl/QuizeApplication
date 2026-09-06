function QuizQuestion({
  question,
  questionNumber,
  totalQuestions
}) {
  return (
    <>
      <p className="question-number">
        Question {questionNumber} of {totalQuestions}
      </p>

      <h2>{question}</h2>
    </>
  );
}

export default QuizQuestion;