import React from "react";
import PropTypes from "prop-types";
import styles from "./Question.module.scss";
import Progress from "./Progress/Progress";
import Alternative from "./Alternative/Alternative";

function Question({
  quizTitle,
  numTotalQuestions,
  numCurrentQuestion,
  question,
  onAnswerSelected,
  goBack,
  goForward,
  type,
}) {
  return (
    <>
      <div>
        <div className={styles.question}>
          <div className={styles["quiz-title"]}>{quizTitle}</div>

          <Progress
            numCurrentQuestion={numCurrentQuestion}
            numTotalQuestions={numTotalQuestions}
            visited = {true}
          />

          {question.img && (
            <img
              alt="Current question"
              src={question.img}
              className={styles["question-img"]}
            />
          )}

<button className="btn btn-primary" onClick={goBack}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={goForward}>
        Next
      </button>
          <div className={styles["question-text"]}>
            <strong>{question.text}</strong>
          </div>
        </div>
      </div>

      <div className={styles.alternatives}>
        {question.alternatives.map((alternative) => (
          <Alternative
            alternative={alternative}
            isQuestionAnswered={question.isAnswered}
            key={`alternative-${question.id}-${alternative.id}`}
            onAnswerSelected={onAnswerSelected}
            quesId={question.id}
          />
        ))}
      </div>

      <button className="btn btn-primary" onClick={goBack}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={goForward}>
        Next
      </button>
    </>
  );
}

Question.propTypes = {
  quizTitle: PropTypes.string.isRequired,
  numTotalQuestions: PropTypes.number.isRequired,
  numCurrentQuestion: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string,
    isAnswered: PropTypes.bool.isRequired,
    alternatives: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        img: PropTypes.string,
      }).isRequired
    ).isRequired,
  }).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Question;
