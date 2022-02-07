import React from "react";
import PropTypes from "prop-types";
import styles from "./Alternative.module.scss";

function Alternative({
  alternative,
  isQuestionAnswered,
  onAnswerSelected,
  quesId,
}) {
  const userAnswer = alternative.isUserAnswer;
  let clicked = false;
  return (
    <div
      onClick={() => {
        onAnswerSelected(alternative, quesId);
        clicked = true;
      }}
      role="button"
      tabIndex={0}
      className={[
        styles.alternative,
        userAnswer || clicked ? styles.selected : "",
        // isQuestionAnswered ? styles["current-question-answered"] : "",
      ].join(" ")}
    >
      {alternative.opt_type == "img" ? (
        <img
          alt="Option"
          src={alternative.text}
          className={styles["question-img"]}
        />
      ) : (
        <>{alternative.text}</>
      )}
    </div>
  );
}

Alternative.propTypes = {
  alternative: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isUserAnswer: PropTypes.bool.isRequired,
    img: PropTypes.string,
  }).isRequired,
  isQuestionAnswered: PropTypes.bool.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Alternative;
