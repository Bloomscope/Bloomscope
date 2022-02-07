import React, { useState } from "react";
import "./styles.scss";
import Navbar from "../../Components/Navbar";
import styled from "styled-components";
import { quiz } from './testData';
import Quiz from "react-quiz-component";

const Questions = styled.div`
  padding: 2rem;
  font-size: 2rem;
  background-color: white;
  width: 70%;
`;

// function Test() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <div>
//           {qBank.map((q, i) => (
//             <div key={i}>
//               <form>
//                 <Questions>{q.question}</Questions>
//                 <div className="AnswerContainer">
//                   <input type="radio" name={q.question} value={q.A} />
//                   <label htmlFor={q.A}>{q.A}</label>
//                 </div>
//                 <div className="AnswerContainer">
//                   <input type="radio" name={q.question} value={q.B} />
//                   <label htmlFor={q.B}>{q.B}</label>
//                 </div>
//                 <div className="AnswerContainer">
//                   <input type="radio" name={q.question} value={q.C} />
//                   <label htmlFor={q.C}>{q.C}</label>
//                 </div>
//                 <div className="AnswerContainer">
//                   <input type="radio" name={q.question} value={q.D} />
//                   <label htmlFor={q.D}>{q.D}</label>
//                 </div>
//               </form>
//               <br/><br/><br/>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
function Test() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
        <Quiz quiz={quiz}></Quiz>
        </div>
      </div>
    </>
  );
}

export default Test;
