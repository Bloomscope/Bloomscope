import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.scss';
import Button from '../../common/Button/Button';
import iconRight from '../../assets/images/arrow-return.svg';
import { useNavigate  } from "react-router";

function Result({
  quizTitle,
  numCorrectAnswers,
  numTotalQuestions,
  results,
  currentUrl,
  onClickRestart,
}) {
    let chosenResult = results[0];

  results.map((result, i) => {
    if (
      numCorrectAnswers >= result.range.from &&
      numCorrectAnswers <= result.range.to
    ) {
      chosenResult = results[i];
    }
    return false;
  });
  const nav = useNavigate();
  return (
    <div className={styles.result}>
      <div className={styles['result-header']}>
        <div className={styles.numbers}>
          <strong>{numCorrectAnswers}</strong>
          <span>/</span>
          <span>{numTotalQuestions}</span>
        </div>

        <img
          alt="Result"
          src={require(`../../assets/images/results/${chosenResult.img ||
            'default/default.jpg'}`).default}
          className={styles['result-img']}
        />
      </div>

      <div className={styles.title}>
        <strong>{chosenResult.title}</strong>
      </div>

      <div className={styles.description}>{chosenResult.description}</div>

      <div className={styles['restart-button-container']}>
        <Button
          text="Back to Dashboard"
          onButtonClick={() => nav('/student/dashboard')}
          inlineStyle={{
            fontSize: '11px',
            lineHeight: '13px',
          }}
          iconRight={iconRight}
        />
      </div>
    </div>
  );
}

Result.propTypes = {
  quizTitle: PropTypes.string.isRequired,
  numCorrectAnswers: PropTypes.number.isRequired,
  numTotalQuestions: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      range: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
      }),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentUrl: PropTypes.string.isRequired,
  onClickRestart: PropTypes.func.isRequired,
};

export default Result;
