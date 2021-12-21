import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import styles from './Quiz.module.scss';
import quizDataInitial from './assets/quiz-data';
 import Navbar from "../../Components/Navbar";
import Start from './pages/Start/Start';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';
 import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
 import {login, useAuth, logout, getSessionState} from "../../../auth"

const paramScore = {
  Remember: 0,
  Understand: 0,
  Apply: 0,
  Analyze: 0,
  Evaluate: 0,
  Create: 0,
};

const TimerClass = styled.div`
  background-color: #fffcf5;
  color: black;
  padding: 1em;
  margin: 0.5em;
  font-size: 1.25rem;
  border: 2px black solid;
  border-radius: 3px;
`;

function Quiz() {
  const quizDataInitialFormatted = {
    ...quizDataInitial,
    questions: quizDataInitial.questions.map(question => ({
      ...question,
      isAnswered: false,
      alternatives: question.alternatives.map(alternative => ({
        ...alternative,
        isUserAnswer: false,
      })),
    })),
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [marksEarned, setMarksEarned] = useState(0);
  const [quizData, setQuizData] = useState(quizDataInitialFormatted);
  const [time, setTime] = useState(quizDataInitialFormatted.time);

  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = e => {
    const total = Date.parse(e) - Date.parse(new Date());
    if (total <= 0) {
      setCurrentPage(currentPage * 10);
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / (1000 * 60 * 60));

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = e => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      );
    }
  };

  const clearTimer = e => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    const hourConv = Math.round(time / 60);
    const minConv = time % 60;
    const timeString =
      '' +
      (hourConv > 9 ? hourConv : '0' + hourConv) +
      ':' +
      (minConv > 9 ? minConv : '0' + minConv) +
      ':' +
      '00';
    setTimer(timeString); // Set Init state

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    let totalSecs = time * 60; // minutes to seconds
    deadline.setSeconds(deadline.getSeconds() + totalSecs);
    return deadline;
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const currentUrl = window.location.href;

  const numTotalQuestions = quizData.questions.length;
  
  const numCurrentQuestion = currentPage - 1;

  const isStartPage = currentPage === 1;
  const isResultPage = currentPage >= numTotalQuestions + 2;

  const currentQuestion = quizData.questions[currentPage - 2];

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onAnswerSelected = clickedAlternative => {
    const currentQuestionIndex = quizData.questions.findIndex(
      question => question.id === currentQuestion.id,
    );

    const marks = currentQuestion['marks'];
    const alternativesCopy = [...currentQuestion.alternatives];

    const foundAlternative = alternativesCopy.find(
      alternative => alternative.id === clickedAlternative.id,
    );

    const updatedAlternative = {
      ...foundAlternative,
      isUserAnswer: true,
    };

    const alternativeIndex = alternativesCopy.findIndex(
      alternative => alternative.id === updatedAlternative.id,
    );

    alternativesCopy[alternativeIndex] = updatedAlternative;

    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions.slice(0, currentQuestionIndex),
        {
          ...currentQuestion,
          alternatives: alternativesCopy,
          isAnswered: true,
        },
        ...quizData.questions.slice(currentQuestionIndex + 1),
      ],
    });

    if (clickedAlternative.isCorrect) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
      setMarksEarned(marksEarned + marks);

      const parameter = currentQuestion.parameters;
      parameter.map(param => {
        paramScore[param.parameter] += param.marks;
      });
    }

    setTimeout(() => {
      goToNextPage();
    }, 500);
  };

  const restartQuiz = () => {
    setNumCorrectAnswers(0);
    setQuizData(quizDataInitialFormatted);
    setCurrentPage(1);
  };
   const access = getSessionState();

   const [logged] = useAuth();
  return (
    <>
      {logged&&access.type==1?<>
    <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TimerClass>Time left: {timer}</TimerClass>
      </div>
      <div className={styles.quiz}>
        {isStartPage && (
          <div className={styles.page}>
            <Start
              description={quizData.description}
              img={quizData.img}
              onClickStart={() => {
                goToNextPage();
                onClickReset();
              }}
              title={quizData.title}
            />
          </div>
        )}
        {!isStartPage && !isResultPage && (
          <div className={styles.page}>
            <Question
              numCurrentQuestion={numCurrentQuestion}
              numTotalQuestions={numTotalQuestions}
              onAnswerSelected={onAnswerSelected}
              question={currentQuestion}
              quizTitle={quizData.title}
              type={currentQuestion.type}
            />
          </div>
        )}

        {isResultPage && (
          <div className={styles.page}>
            <Result
              quizTitle={quizData.title}
              currentUrl={currentUrl}
              numCorrectAnswers={numCorrectAnswers}
              numTotalQuestions={numTotalQuestions}
              results={quizData.results}
              onClickRestart={restartQuiz}
              totalMarks={marksEarned}
            />
          </div>
        )}
      </div>
    </>
     :
     <>
     <NotLoggedIn/>
     </>}</>
   /*:*/);
}

export default Quiz;
