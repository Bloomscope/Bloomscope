import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from './Quiz.module.scss';
 import Navbar from "../../Components/Navbar";
import Start from './pages/Start/Start';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';
import Confirm from './pages/Confirm/Confirm'
 import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
 import {login, useAuth, logout, getSessionState, authFetch} from "../../../auth"
 import { useNavigate, useLocation  } from "react-router";

let selectedOpts = [];

const TimerClass = styled.div`
  background-color: #fffcf5;
  color: black;
  padding: 1em;
  margin: 0.5em;
  font-size: 1.25rem;
  border: 2px black solid;
  border-radius: 3px;
`;

const Quiz = () => {

  const [currQues, setCurrInd] = useState(0);
  const [prevQues, setPrevInd] = useState(1);
  const {state} = useLocation();
  let quizData = state.data;
  var t = quizData.time; 

  const [currentPage, setCurrentPage] = useState(1);
  // const [numAnswered, setnumAnswered] = useState(0);
  const [time, setTime] = useState(t);
  //Timer Start

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

  //Timer End


  const numTotalQuestions = quizData.questions.length;
  
  const numCurrentQuestion = currentPage - 1;

  const isStartPage = currentPage === 1;
  const isConfirmPage = currentPage >= numTotalQuestions + 2
  const isResultPage = currentPage >= numTotalQuestions + 3;

  const currentQuestion = quizData.questions[currentPage - 2];
  // console.log(currentQuestion);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onAnswerSelected = (clickedAlternative, quesId) => {
    const currentQuestionIndex = quizData.questions.findIndex(
      question => question.id === quesId,
    ) ;

    quizData.questions[currentQuestionIndex].alternatives.map(
      ans => ans.isUserAnswer ? false : false
    )

    console.log(quizData.questions[currentQuestionIndex].alternatives);
        
    clickedAlternative.isUserAnswer = true;
    // const alternativesCopy = [...currentQuestion.alternatives];

    // const foundAlternative = alternativesCopy.find(
    //   alternative => alternative.id === clickedAlternative.id,
    // );

    // const updatedAlternative = {
    //   ...foundAlternative,
    //   isUserAnswer: true,
    // };

    // const alternativeIndex = alternativesCopy.findIndex(
    //   alternative => alternative.id === updatedAlternative.id,
    // );

    // alternativesCopy[alternativeIndex] = updatedAlternative;
    // console.log(alternativesCopy[alternativeIndex])

    quizData.questions[currentQuestionIndex].isAnswered = true
    console.log(quizData.questions[currentQuestionIndex].isAnswered);

    let formatted = {
      questionId : quesId,
      optionId: clickedAlternative.id,
    }

    if(currQues === prevQues){
      console.log( currQues, prevQues)
      selectedOpts.pop()
      selectedOpts.push(formatted)
    }

    else{      
      console.log( currQues, prevQues)     
      selectedOpts.push(formatted)
      setPrevInd(quesId)
      setCurrInd(quesId)
    }

    console.log(selectedOpts)
    setTimeout(() => {      
      console.log( currQues, prevQues)      
      // setnumAnswered(numAnswered + 1);
      setCurrInd(1)
      goToNextPage();
    }, 500);
  };

  const goToPrevPage = () =>{
    if(currentPage > 2)
    setCurrentPage(currentPage - 1);    
  }

  const submitResponse = () => {
    setCurrentPage(currentPage + 1);
  }

  const restartQuiz = () => {
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
        {!isStartPage && !isResultPage && !isConfirmPage &&(
          <div className={styles.page}>
            <Question
              numCurrentQuestion={numCurrentQuestion}
              numTotalQuestions={numTotalQuestions}
              onAnswerSelected={onAnswerSelected}
              question={currentQuestion}
              quizTitle={quizData.title}
              goBack = {goToPrevPage}
              goForward = {goToNextPage}
              type={currentQuestion.type}
            />
          </div>
        )}

        {isConfirmPage && (
          <div className={styles.page}>
          <Confirm
          goBack = {goToPrevPage}
          confirmSubmission = {submitResponse}
          />
        </div>
        )}

        {!isConfirmPage && isResultPage && (
          <div className={styles.page}>
            <Result
              quizTitle={quizData.title}
              // numAnswered={numAnswered}
              numTotalQuestions={numTotalQuestions}
              results={quizData.results}
              onClickRestart={restartQuiz}
              data = {selectedOpts}
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
