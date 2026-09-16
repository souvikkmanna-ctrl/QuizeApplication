import React, { useState } from "react";
import "./QuizApp.css";
import {quizTopics} from "./data/quizData";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Timer from "./components/Timer";
import QuizQuestion from "./components/QuizQuestion";
import QuizOptions from "./components/QuizOptions";
import QuizReview from "./components/QuizReview";
import QuizResult from "./components/QuizResult";


const QUESTION_TIME_LIMIT = 30;

function QuizApp() {
  const [studentName, setStudentName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  
  // Navigation Screens: "login" | "dashboard" | "quiz" | "result" | "review"
  const [currentScreen, setCurrentScreen] = useState("login");

  // Selected topic and active questions
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [questions, setQuestions] = useState([]);
  
  // Quiz progress states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);

  // 1. Move from Login to Dashboard
  function handleLogin() {
    if (!studentName.trim() || !studentCode.trim()) return;
    setCurrentScreen("dashboard");
  }

  // 2. Select topic and start quiz
  function handleSelectTopic(topicId) {
    const topic = quizTopics[topicId];
    if (!topic) return;

    setSelectedTopicId(topicId);
    setQuestions(topic.questions);
    setUserAnswers(Array(topic.questions.length).fill(""));
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setTimeLeft(QUESTION_TIME_LIMIT);
    setCurrentScreen("quiz");
  }

  // 3. Handle picking an option
  function handleAnswer(option) {
    setSelectedAnswer(option);
  }

  // 4. Progress or finish quiz
  function handleNext(forced = false) {
    if (!forced && selectedAnswer === "") {
      alert("Please select an answer before moving forward.");
      return;
    }

    const answerToRecord = forced && selectedAnswer === "" ? "" : selectedAnswer;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answerToRecord;
    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setTimeLeft(QUESTION_TIME_LIMIT);
    } else {
      setCurrentScreen("result");
    }
  }

  // 5. Restart current subject
  function restartQuiz() {
    setUserAnswers(Array(questions.length).fill(""));
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setTimeLeft(QUESTION_TIME_LIMIT);
    setCurrentScreen("quiz");
  }

  // 6. Return to Dashboard to pick another subject
  function goToDashboard() {
    setSelectedTopicId(null);
    setQuestions([]);
    setUserAnswers([]);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setCurrentScreen("dashboard");
  }

  // 7. Full logout
  function handleLogout() {
    setStudentName("");
    setStudentCode("");
    goToDashboard();
    setCurrentScreen("login");
  }

  // Compute final score
  const score = userAnswers.reduce((acc, ans, idx) => {
    return ans === questions[idx]?.correctAnswer ? acc + 1 : acc;
  }, 0);

  // SCREEN 1: LOGIN
  if (currentScreen === "login") {
    return (
      <Login
        studentName={studentName}
        studentCode={studentCode}
        setStudentName={setStudentName}
        setStudentCode={setStudentCode}
        onStart={handleLogin}
      />
    );
  }

  // SCREEN 2: DASHBOARD
  if (currentScreen === "dashboard") {
    return (
      <Dashboard
        studentName={studentName}
        studentCode={studentCode}
        topics={quizTopics}
        onSelectTopic={handleSelectTopic}
        onLogout={handleLogout}
      />
    );
  }

  // SCREEN 3: REVIEW ANSWERS
  if (currentScreen === "review") {
    return (
      <QuizReview
        questions={questions}
        userAnswers={userAnswers}
        onViewResult={() => setCurrentScreen("result")}
      />
    );
  }

  // SCREEN 4: QUIZ RESULT
  if (currentScreen === "result") {
    const currentTopicTitle = quizTopics[selectedTopicId]?.title || "Quiz";
    return (
      <div className="quiz-container quiz-result-container">
        <QuizResult
          studentName={studentName}
          studentCode={studentCode}
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
          onReview={() => setCurrentScreen("review")}
        />
        <div className="result-actions" style={{ marginTop: "12px" }}>
          <button type="button" className="topic-back-btn" onClick={goToDashboard}>
            ⬅ Back to Subject Dashboard
          </button>
        </div>
      </div>
    );
  }

  // SCREEN 5: ACTIVE QUIZ
  const activeQuestionData = questions[currentQuestion];
  const topicTitle = quizTopics[selectedTopicId]?.title;

  return (
    <div className="quiz-container">
      <div className="student-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span><strong>Subject:</strong> {topicTitle}</span>
          <button
            type="button"
            className="link-btn"
            onClick={goToDashboard}
            style={{ background: "none", border: "none", color: "#2563eb", cursor: "pointer", fontSize: "0.85rem", textDecoration: "underline" }}
          >
            Exit to Dashboard
          </button>
        </div>
        <p>Student: {studentName} ({studentCode})</p>
      </div>

      <Timer
        key={`${selectedTopicId}-${currentQuestion}`}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        onTimeUp={() => handleNext(true)}
      />

      <QuizQuestion
        question={activeQuestionData?.question}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />

      <QuizOptions
        options={activeQuestionData?.options}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      <button
        type="button"
        className="next-button"
        onClick={() => handleNext(false)}
      >
        {currentQuestion === questions.length - 1 ? "Submit Subject Quiz" : "Next Question"}
      </button>
    </div>
  );
}

export default QuizApp;