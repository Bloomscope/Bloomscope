import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.module.scss';
import Button from '../../common/Button/Button';
import iconRight from '../../assets/images/arrow-return.svg';
import { useNavigate  } from "react-router";
import { useAuth, authFetch, getSessionState } from "../../../../../auth"//"../../../../auth";

function Result({
  quizTitle,
  // numAnswered,
  numTotalQuestions,
  results,
  onClickRestart,
  data,
  test_id
}) {

  const nav = useNavigate();

  let dts = {
    test_id: test_id,
    has_negative_marks: "false",
    quiz_data: data
  }

  authFetch("/api/eval_test", {
    method: "POST",
    body: JSON.stringify(dts),
  })
    .then((r) => r.json())

  return (
    <div className={styles.result}>
      <div className={styles['result-header']}>
        <div className={styles.numbers}>
          <div className={styles.text}>Test Complete </div>
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

export default Result;
