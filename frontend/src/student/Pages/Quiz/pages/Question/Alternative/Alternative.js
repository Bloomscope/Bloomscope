import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alternative.module.scss';

function Alternative({ alternative, isQuestionAnswered, onAnswerSelected, quesId }) {
  // const isNotChosen =
  //   isQuestionAnswered && !alternative.isCorrect && !alternative.isUserAnswer;
  const userAnswer = alternative.isUserAnswer;
let clicked = false;
  return (
    <div
      onClick={() => {onAnswerSelected(alternative, quesId);clicked = true}}
      // onKeyPress={() => onAnswerSelected(alternative, quesId)}
      role="button"
      tabIndex={0}
      className={[
        styles.alternative,
        userAnswer||clicked ? styles.selected : "",
        // isNotChosen ? styles['not-chosen'] : '',
        isQuestionAnswered ? styles['current-question-answered'] : '',
      ].join(' ')}
    >
      {alternative.opt_type == "img" ?
                <img
                  alt="Option"
                  src={alternative.text}
                  className={styles['question-img']}
                />
              :
              <>
      {alternative.text}
      </>
      }
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
