import React from 'react';
import Navbar from './components/Navbar';
import './main.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='alt1'>
                <span><p className='heading'>ABOUT US</p>
                    <p className='text'>
                    We are a team of academicians led by Prof Awate of IIT, Bombay (Ex Prof ISB, Hyd) who have come together and had a thorough research on the students' learning and development side. The research and learnings have been the backbone of the platform that has been built. During the research it was observed that once parents, teachers and students got to know about the right areas where to focus and worked accordingly, the overall learning of the students increased significantly. 
                    </p>
                </span>
            </div>
            <div className='alt2'>
                <div className='inner'><p className='heading'>KEY QUESTIONS</p>
                    <p className='text'><b><i>Key questions from parents, students and teachers</i> </b><br/><br/>
                    It has been a while since we are associated with academics and dealing with teachers, parents and students for multiple reasons. One of the key areas that we have observed is that all parents and students are severely tensed with the score system especially at K-12 segment. Each one wants to be successful and wants to get points of improvement. Unfortunately the education system gives only scores. From every assessment be it at tuition place or school, students receive scores and marks. It’s not sufficient insight for the overall improvement. 
 
Putting few challenges what we have come across from parents, teachers and students.

                    </p><br/>
                    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Questions received from the parents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "90%"}}>
         1. “My son has scored well in Math in Grade X. But equally he is good in Biology. Engineering or Medical, which one is suitable?”<br/>
2. “My daughter has scored less in word problem Grade 5. What’s the reason? IS that she could not understand and comprehend the Question or she has not understood the problem?” <br/>
3. “My daughter has scored less in Science. What’s the reason? Is it that she could not remember or she did not understand?”<br/>
4. “My son is scoring low in Math. But he plays chess well and I can see he applies good logic. Where is the problem in Math then? Teacher says logical problem. Is that true? How I can use his logical ability in his own growth?” 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Questions received from the students</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "90%"}}>
          1. “I am struggling to run the program. I love coding – but Am I bad at coding and I should focus on something else? Or the solution lies somewhere else. I can also be good at coding. How to find it?”<br/>
2. “I am working hard. But peers are getting promoted/ getting better marks and I am underrated. Why? Is it biasness or I can improve somewhere?”<br/>
3. “I can remember some subjects well whereas I struggle in others. How can I improve! What should I do?” 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Questions received from the teachers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: "90%"}}>
          1. “I am giving my best effort in the class. But few are just not improving. Don’t know what I should do?”<br/>
          2. “The students are just not able to apply what is being taught! Whenever the digit gets changed in the exam from the practice problem, they can’t solve it. What way should I teach them?” 

          </Typography>
        </AccordionDetails>
      </Accordion><br/>
      <p className='text'>
      We have found these challenges are always unanswered. The reason is there is no platform available to help to diagnose the root causes of the problems and give the RIGHT solution. 
These insights and demands have given us the push to think and come with a solution. The challenges and discussion with different stakeholders have given the input ‘what is needed’, what kind of platform can make peoples’ life easy which not only will give insight and help identifying ‘where the problem is’, but it will also help in ‘rectifying’ by giving input on ‘what to be done’ and ‘how to be done’.  
Students, Parents, Teachers or a professional - everybody will be able to use this platform in its own way and this will help them in periodical evolution through statistical data, predictive analysis and timely recommendation. <b>This will make all stakeholders more informed and a better decision maker. </b>
This has led us towards backward thinking from the problem to the solution and this is how we have ended up starting this start up. 

      </p>
                </div>
            </div>
            <div className='alt1'>
                <span><p className='heading'>WHY BLOOMSCOPE</p>
                    <p className='text'>
                
                    <b><i>How this platform is going to be game changer?</i> </b><br/><br/>
We get several score cards during different phases of life - but all the scorecards say about the subject knowledge. We don't know what the problem area is. We don't know what the sweet spot is and what’s the dark spot - what’s the area where we need more focus vs where we have got improvement. We don’t come to know what we as individuals can do to improve ourselves which comes along with a scientific diagnostic result and recommended solution. Our queries for the root cause are always unanswered.  Just IQ (Intelligence Quotient) and EQ (Emotional Quotient) is not enough in this 21st century like. We need to get the “life skill” which is a good combination of a balanced IQ, EQ and SQ (Social Quotient). Currently no platform is available which can give us periodic progress data on the life skill along with evolution of cognition level.

Each one is unique and deserves a learning which is as per the individual need. We need information which is more than how much we have scored. We need our progress report which is holistic- which gives us a clear focus area. We need data which will not only just tell us whether I have scored well or bad- but also can tell us where the problem is- is it something that I am not able to remember what I am studying or is it something that I will need more to get the conceptual clarity or I am facing struggle while applying the knowledge. A broader but very micro horizon.
Bloomscope is going to give the answer to the unanswered questions. A complete and agonistic platform with 360-degree view point. A true game changer for the students. 

                    </p>
                </span>
            </div>
            <div className='alt2'>
                <div className='inner'><p className='heading'>TESTIMONIALS</p></div>
            </div>
            <div className='alt1'>
                <span><p className='heading'>CONTACT US</p>
                    <p style={{fontSize:"90%"}}>
                    <b>Address: </b> 
                     Prof. Snehal Awate<br/>
                    #208, SJMSOM building, <br/>
                    IIT Bombay, <br/>
                    Powai Mumbai 400076<br/><br/>

                    <b>Email:</b> connect@bloomscope.org 

                    
                    </p>
                </span>
            </div>
        </div>

    )
}

export default Home;