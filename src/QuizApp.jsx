import { useState } from "react";

import "./QuizApp.css";

import QuizQuestion from "./components/QuizQuestion";
import QuizOptions from "./components/QuizOptions";
import QuizReview from "./components/QuizReview";
import QuizResult from "./components/QuizResult";

function QuizApp() {
    const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },

  {
    question: "Which language is mainly used in React?",
    options: [
      "Java",
      "JavaScript",
      "Python",
      "C"
    ],
    correctAnswer: "JavaScript"
  },

  {
    question: "Which React Hook is used to manage state?",
    options: [
      "useState",
      "useEffect",
      "useData",
      "useFunction"
    ],
    correctAnswer: "useState"
  },

  {
    question: "Which company developed React?",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    correctAnswer: "Meta"
  },

  {
    question: "What does JSX mean?",
    options: [
      "JavaScript XML",
      "Java Source XML",
      "Java Syntax Extension",
      "JSON XML"
    ],
    correctAnswer: "JavaScript XML"
  },

  {
    question: "What is React?",
    options: [
      "A database",
      "A JavaScript library",
      "An operating system",
      "A programming language"
    ],
    correctAnswer: "A JavaScript library"
  },

  {
    question:
      "What is used to pass data from a parent component to a child component?",
    options: [
      "State",
      "Props",
      "Hooks",
      "Events"
    ],
    correctAnswer: "Props"
  },

  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correctAnswer: "<a>"
  },

  {
    question: "Which HTML tag is used to create the largest heading?",
    options: [
      "<h6>",
      "<heading>",
      "<h1>",
      "<head>"
    ],
    correctAnswer: "<h1>"
  },

  {
    question: "Which HTML tag is used to insert an image?",
    options: [
      "<image>",
      "<img>",
      "<picture>",
      "<src>"
    ],
    correctAnswer: "<img>"
  },

  {
    question: "Which attribute specifies the image path?",
    options: [
      "href",
      "link",
      "src",
      "path"
    ],
    correctAnswer: "src"
  },

  {
    question: "Which CSS property is used to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground"
    ],
    correctAnswer: "color"
  },

  {
    question: "Which CSS property is used to change the background color?",
    options: [
      "background-color",
      "bg-color",
      "color-background",
      "background"
    ],
    correctAnswer: "background-color"
  },

  {
    question: "Which CSS property is used to make text bold?",
    options: [
      "font-weight",
      "text-bold",
      "font-style",
      "bold"
    ],
    correctAnswer: "font-weight"
  },

  {
    question: "Which symbol is used for an ID selector in CSS?",
    options: [
      ".",
      "#",
      "*",
      "@"
    ],
    correctAnswer: "#"
  },

  {
    question: "Which symbol is used for a class selector in CSS?",
    options: [
      "#",
      ".",
      "*",
      "$"
    ],
    correctAnswer: "."
  },

  {
    question: "Which CSS property is used to change the font size?",
    options: [
      "text-size",
      "font-size",
      "size",
      "font-height"
    ],
    correctAnswer: "font-size"
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "variable",
      "var",
      "declare",
      "value"
    ],
    correctAnswer: "var"
  },

  {
    question: "Which keyword creates a constant in JavaScript?",
    options: [
      "constant",
      "let",
      "const",
      "fixed"
    ],
    correctAnswer: "const"
  },

  {
    question: "Which method is used to print something in the browser console?",
    options: [
      "print()",
      "console.log()",
      "display()",
      "write()"
    ],
    correctAnswer: "console.log()"
  },

  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: [
      "==",
      "=",
      "===",
      "!="
    ],
    correctAnswer: "==="
  },

  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "push()",
      "add()",
      "append()",
      "insert()"
    ],
    correctAnswer: "push()"
  },

  {
    question: "Which method removes the last element from an array?",
    options: [
      "remove()",
      "delete()",
      "pop()",
      "shift()"
    ],
    correctAnswer: "pop()"
  },

  {
    question: "Which React Hook is used for side effects?",
    options: [
      "useState",
      "useEffect",
      "useData",
      "useAction"
    ],
    correctAnswer: "useEffect"
  },

  {
    question: "What is a component in React?",
    options: [
      "A database",
      "A reusable UI building block",
      "A CSS file",
      "A server"
    ],
    correctAnswer: "A reusable UI building block"
  },

  {
    question: "Which file extension is commonly used for React components containing JSX?",
    options: [
      ".java",
      ".jsx",
      ".py",
      ".sql"
    ],
    correctAnswer: ".jsx"
  },

  {
    question: "What is used to render a React application into the DOM?",
    options: [
      "createRoot()",
      "renderHTML()",
      "startApp()",
      "displayRoot()"
    ],
    correctAnswer: "createRoot()"
  },

  {
    question: "Which hook is used to store state in a functional component?",
    options: [
      "useEffect",
      "useState",
      "useComponent",
      "useValue"
    ],
    correctAnswer: "useState"
  },

  {
    question: "What is the virtual DOM?",
    options: [
      "A database",
      "A lightweight representation of the DOM",
      "A CSS framework",
      "A JavaScript compiler"
    ],
    correctAnswer: "A lightweight representation of the DOM"
  },

  {
    question: "What is the purpose of the key prop when rendering lists in React?",
    options: [
      "To style elements",
      "To identify elements uniquely",
      "To create CSS classes",
      "To change the component"
    ],
    correctAnswer: "To identify elements uniquely"
  }
  ];

  const [studentName, setStudentName] = useState("");
  const [studentCode, setStudentCode] = useState("");

  const [quizStarted, setQuizStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Store all answers
  const [userAnswers, setUserAnswers] = useState([]);

  const [score, setScore] = useState(0);

  const [showReview, setShowReview] = useState(false);

  const [showResult, setShowResult] = useState(false);

  function startQuiz() {
    if (
      studentName.trim() === "" ||
      studentCode.trim() === ""
    ) {
      alert("Please enter your name and student code!");
      return;
    }

    setQuizStarted(true);
  }

  function handleAnswer(option) {
    setSelectedAnswer(option);
  }

  function handleNext() {
    if (selectedAnswer === "") {
      alert("Please select an answer!");
      return;
    }

    // Save the answer
    const updatedAnswers = [...userAnswers];

    updatedAnswers[currentQuestion] = selectedAnswer;

    setUserAnswers(updatedAnswers);

    // Calculate score
    if (
      selectedAnswer ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore((previousScore) => previousScore + 1);
    }

    // Go to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      setSelectedAnswer("");
    } else {
      // Last question completed
      setShowReview(true);
    }
  }

  function viewResult() {
    // Calculate final score again from all answers
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (
        answer === questions[index].correctAnswer
      ) {
        finalScore++;
      }
    });

    setScore(finalScore);

    setShowReview(false);

    setShowResult(true);
  }

  function restartQuiz() {
    setStudentName("");
    setStudentCode("");

    setQuizStarted(false);

    setCurrentQuestion(0);

    setSelectedAnswer("");

    setUserAnswers([]);

    setScore(0);

    setShowReview(false);

    setShowResult(false);
  }

  // -------------------------
  // Student Information
  // -------------------------

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <h1>Online Quiz Application</h1>

        <h2>Student Information</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) =>
            setStudentName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Enter student code"
          value={studentCode}
          onChange={(e) =>
            setStudentCode(e.target.value)
          }
        />

        <button
          className="next-button"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  // -------------------------
  // Review Page
  // -------------------------

  if (showReview) {
    return (
      <QuizReview
        questions={questions}
        userAnswers={userAnswers}
        onViewResult={viewResult}
      />
    );
  }

  // -------------------------
  // Result Page
  // -------------------------

  if (showResult) {
    return (
      <QuizResult
        score={score}
        totalQuestions={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  // -------------------------
  // Question Page
  // -------------------------

  return (
    <div className="quiz-container">
      <h1>Online Quiz Application</h1>

      <p className="student-info">
        Student: <strong>{studentName}</strong>
        <br />
        Code: <strong>{studentCode}</strong>
      </p>

      <QuizQuestion
        question={
          questions[currentQuestion].question
        }
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />

      <QuizOptions
        options={
          questions[currentQuestion].options
        }
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
      />

      <button
        className="next-button"
        onClick={handleNext}
      >
        {currentQuestion === questions.length - 1
          ? "Submit Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}

export default QuizApp;