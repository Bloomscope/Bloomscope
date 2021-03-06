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
  display: ${(props) => (props.isActive ? "block" : "none")};
`;
const Quiz = () => {

  let paramMapping = {
    1: "Remember",
    2: "Understand", 
3: "Apply",
4: "Analyze",
5: "Evaluate", 
6: "Create"
  }
  const nav = useNavigate()
  const [currQues, setCurrInd] = useState(0);
  const [prevQues, setPrevInd] = useState(1);
  const {state} = useLocation();
  const [timerActive, setTimeAct] = useState(true);
  if(!state)
  {
    alert("There has been an error, Please login again")
    nav("/student/dashboard")
  }
  let quizData = state.data;
  var t = quizData.time; 
  // let autoNext = false;

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
      setCurrentPage(currentPage + numTotalQuestions + 5);
      setTime('00:00:00')
      setTimeAct(false)
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
  const isConfirmPage = currentPage === numTotalQuestions + 2
  const isResultPage = currentPage >= numTotalQuestions + 3;

  const currentQuestion = quizData.questions[currentPage - 2];

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onAnswerSelected = (clickedAlternative, quesId) => {

    const currentQuestionIndex = currentPage - 2;

    quizData.questions[currentQuestionIndex].alternatives.map(
      ans => ans.isUserAnswer ? ans.isUserAnswer=false : ans.isUserAnswer=false
    )

    console.log(quizData.questions[currentQuestionIndex].alternatives);
        
    clickedAlternative.isUserAnswer = true;

    quizData.questions[currentQuestionIndex].isAnswered = true
    let param = 0;
    param = quizData.questions[currentQuestionIndex].parameter.map(para_id => para_id.parameter)
    console.log(param)
    let formatted = {
      question_id : quesId,
      param_id : param[0],
      param_name: paramMapping[param[0]],
      user_choice: clickedAlternative.id,
    }
    console.log(formatted)

    function quesInd(value, index, array)
    {
      return value.question_id === quesId
    }

    let currInd = selectedOpts.findIndex(quesInd)
    console.log(currInd);

    if(currInd == -1){
       selectedOpts.push(formatted)
    }
    else{
      selectedOpts[currentQuestionIndex].user_choice =  clickedAlternative.id
    }

    console.log(selectedOpts)
    // setTimeout(() => {      
    //   setCurrInd(1)
    //   goToNextPage();
    // }, 500);
  };

  const goToPrevPage = () =>{
    if(currentPage > 2){
    setCurrentPage(currentPage - 1);
        }
  }

  const submitResponse = () => {
    setCurrentPage(currentPage + 1);
    setTimeAct(false)
    console.log(timerActive);
  }

  const restartQuiz = () => {
    setCurrentPage(1);
  };

   const access = getSessionState();
   const [logged] = useAuth();
   var callCount = 0;
   return (
    <>
      {logged&&access.type==1?<>
    <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        
        <TimerClass isActive = {timerActive}>Time left: {timer}</TimerClass>
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
          numAnswered={selectedOpts.length}          
          numTotalQuestions={numTotalQuestions} 
          />
        </div>
        )}

        {isResultPage && (
          <div className={styles.page}>
            <Result
              quizTitle={quizData.title}
              numTotalQuestions={numTotalQuestions}
              count = {callCount}
              onClickRestart={restartQuiz}
              data = {selectedOpts}
              test_id = {quizData.test_id}
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
