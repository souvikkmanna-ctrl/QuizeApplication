import React from "react";

function Login({ studentName, studentCode, setStudentName, setStudentCode, onStart }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim() || !studentCode.trim()) {
      alert("Please enter both Name and Student Code / Roll No");
      return;
    }
    onStart(); // This triggers handleLogin in QuizApp.jsx
  };

  return (
    <div className="quiz-container">
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Student Code / Roll No"
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
        />
        <button type="submit" className="next-button">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default Login;