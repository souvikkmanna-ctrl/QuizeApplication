import React from "react";

function Dashboard({
  studentName = "",
  studentCode = "",
  topics = {},
  onSelectTopic,
  onLogout
}) {
  const topicList = topics && typeof topics === "object" ? Object.values(topics) : [];

  if (topicList.length === 0) {
    return (
      <div className="quiz-container dashboard-container">
        <h1>Select a Subject</h1>
        <p style={{ color: "#dc2626", margin: "20px 0" }}>
          ⚠️ No quiz topics found. Please verify <code>src/data/quizData.js</code>.
        </p>
        <button type="button" className="review-btn" onClick={onLogout}>
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container dashboard-container">
      <div className="dashboard-header">
        <h1>Select a Subject</h1>
        <p className="student-details">
          Welcome, <strong>{studentName}</strong> | Roll No: <span>{studentCode}</span>
        </p>
      </div>

      <div className="topic-grid">
        {topicList.map((topic) => (
          <button
            key={topic.id}
            type="button"
            className="topic-card"
            onClick={() => onSelectTopic(topic.id)}
          >
            <div className="topic-icon">{topic.icon}</div>
            <div className="topic-info">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="question-badge">
                {topic.questions?.length || 0} Questions
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="result-actions">
        <button type="button" className="review-btn" onClick={onLogout}>
          Change Student / Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;