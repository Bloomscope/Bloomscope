import React from "react";
import styles from "./Confirm.module.scss";
import Button from "../../common/Button/Button";

function Confirm({ goBack, confirmSubmission, numAnswered,numTotalQuestions }) {
  return (
    <div className={styles.confirm}>
      <div className={styles["confirm-header"]}>
        <div className={styles.numbers}>
          <div className={styles.text}>Are you sure you want to submit?</div><br/> 
          <div className={styles.text}>You have answered <span>{numAnswered}</span> <span>/</span><span>{numTotalQuestions} </span> Questions</div>
          
        </div>

        <img
          alt="Result"
          src={
            require(`../../assets/images/results/default/default.jpg`).default
          }
          className={styles["confirm-img"]}
        />
      </div>
      <div className={styles.title}></div>
      <div className={styles["confirm-button-container"]}>
        <Button
          text="Back to Quiz"
          onButtonClick={goBack}
          inlineStyle={{
            fontSize: "11px",
            lineHeight: "13px",
          }}
        />
        <Button
          text="Confirm submission"
          onButtonClick={confirmSubmission}
          inlineStyle={{
            fontSize: "11px",
            lineHeight: "13px",
          }}
        />
      </div>
    </div>
  );
}

// Result.propTypes = {
//   quizTitle: PropTypes.string.isRequired,
//   numAnswered: PropTypes.number.isRequired,
//   numTotalQuestions: PropTypes.number.isRequired,
//   results: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       range: PropTypes.shape({
//         from: PropTypes.number.isRequired,
//         to: PropTypes.number.isRequired,
//       }),
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       img: PropTypes.string,
//     }).isRequired,
//   ).isRequired,
//   onClickRestart: PropTypes.func.isRequired,
// };

export default Confirm;
