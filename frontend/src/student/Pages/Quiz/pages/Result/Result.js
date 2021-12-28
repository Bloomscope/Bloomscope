import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.scss';
import Button from '../../common/Button/Button';
import iconRight from '../../assets/images/arrow-return.svg';
import { useNavigate  } from "react-router";

function Result({
  quizTitle,
  numAnswered,
  numTotalQuestions,
  results,
  currentUrl,
  onClickRestart,
}) {

  // results.map((result, i) => {
  //   if (
  //     numAnswered >= result.range.from &&
  //     numAnswered <= result.range.to
  //   ) {
  //     chosenResult = results[i];
  //   }
  //   return false;
  // });
  const nav = useNavigate();
  return (
    <div className={styles.result}>
      <div className={styles['result-header']}>
        <div className={styles.numbers}>
          <div className={styles.text}>You answered </div>
          <strong>{numAnswered}</strong>
          <span>/</span>
          <span>{numTotalQuestions}</span>
          <div className={styles.text}> questions</div>
        </div>

        <img
          alt="Result"
          src={require(`../../assets/images/results/default/default.jpg`).default}
          className={styles['result-img']}
        />
      </div>

      <h2>Your answers have been successfully recorded.</h2>

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
  numAnswered: PropTypes.number.isRequired,
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
