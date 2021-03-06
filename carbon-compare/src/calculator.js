    
import './App.css';
import React, { useState } from 'react';
import logo from './Images/Logo.png';
import start from './Images/Start.png';
import choices from './Images/Choices.png';

import index1 from './index.js'
import inquirer2 from './sendInfo.js'

//Constants
const TOT_QS = 12;


function Calculator() {



  const questions = [
    {
      question: 'How many people live in your household?',
      answers: [
        {answerText: '1', addVal: 25.57},
        {answerText: '2', addVal: 21.39},
        {answerText: '3', addVal: 18.84},
        {answerText: '4', addVal: 17.56},
        {answerText: '5', addVal: 16.71},
        {answerText: '6+', addVal: 15.58},
      ],
    }, {
      question: 'Do you recycle frequently?',
      answers: [
        {answerText: 'Yes', addVal: -0.13},
        {answerText: 'No', addVal: 0}
      ],
    }, {
      question: 'Do you use energy star appliances?',
      answers: [
        {answerText: 'Yes', addVal: -0.6},
        {answerText: 'No', addVal: 0}
      ],
    }, {
      question: 'Do you use energy efficient lightbulbs?',
      answers: [
        {answerText: 'Yes', addVal: -0.6},
        {answerText: 'No', addVal: 0}
      ],
    }, {
      question: 'Do you have and use a programmable thermostat?',
      answers: [
        {answerText: 'Yes', addVal: -0.8},
        {answerText: 'No', addVal: 0}
      ],
    }, {
      question: 'How much of your energy is from clean energy sources?',
      answers: [
        {answerText: 'All', addVal: -2.8},
        {answerText: 'Most', addVal: -1.85},
        {answerText: 'Some', addVal: -0.9},
        {answerText: 'None', addVal: 0},
      ],
    }, {
      question: 'How is your diet?',
      answers: [
        {answerText: 'Overly meat heavy', addVal: 0.8},
        {answerText: 'Average omnivore', addVal: 0},
        {answerText: 'No beef', addVal: -0.6},
        {answerText: 'Vegetarian', addVal: -0.8},
        {answerText: 'Vegan', addVal: -1},
      ],
    }, {
      question: 'How often do you use a non-electric car annually?',
      answers: [
        {answerText: 'Do not travel with a car', addVal: 0},
        {answerText: '0 - 1500 km a year', addVal: 0.2},
        {answerText: '1500 - 4000 km a year', addVal: 0.7},
        {answerText: '4000 - 8000 km a year', addVal: 1.5},
        {answerText: '8000 - 16000 km a year', addVal: 3.05},
        {answerText: '16000 - 24000 km a year', addVal: 5.05},
        {answerText: 'Over 24000 km a year', addVal: 7.05},
      ],
    }, {
      question: 'How often do you use public transit weekly?',
      answers: [
        {answerText: 'Do not travel with public transit', addVal: 0},
        {answerText: '0 - 10km a week', addVal: 0.02},
        {answerText: '10 - 15 km a week', addVal: 0.03},
        {answerText: '15 - 25 km a week', addVal: 0.06},
        {answerText: '25 - 50 km a week', addVal: 0.1},
        {answerText: 'Over 50 km a week', addVal: 0.15},
      ],
    }, {
      question: 'How often do you travel in planes for over 4000km distances?',
      answers: [
        {answerText: 'Never', addVal: 0},
        {answerText: '1 round-trips a year', addVal: 0.85},
        {answerText: '2 round-trips a year', addVal: 1.7},
        {answerText: '3 round-trips a year', addVal: 2.55},
        {answerText: '4+ round-trips a year', addVal: 4},
      ],
    }, {
      question: 'How often do you travel in planes for distances of 500 - 4000km?',
      answers: [
        {answerText: 'Never', addVal: 0},
        {answerText: '1 round-trips a year', addVal: 0.4},
        {answerText: '2 round-trips a year', addVal: 0.8},
        {answerText: '3 round-trips a year', addVal: 1.2},
        {answerText: '4+ round-trips a year', addVal: 2},
      ],
    }, {
      question: 'How often do you travel in planes for distances of < 500 km?',
      answers: [
        {answerText: 'Never', addVal: 0},
        {answerText: '1 round-trips a year', addVal: 0.07},
        {answerText: '2 round-trips a year', addVal: 0.14},
        {answerText: '3 round-trips a year', addVal: 0.21},
        {answerText: '4+ round-trips a year', addVal: 0.3},
      ],
    }
  ]

  const[number, setNumber] = useState(0);
  const[score, setScore] = useState(0);
  const[quizOver, setQuizOver] = useState(false);
  const[startPage, setStartPage] = useState(true);
  const[trees, setTrees] = useState(0);

  const startQuiz = () => {
    setStartPage(false);
    setNumber(0);
    setScore(0);
  }

  const nextQuestion = (addition) => {
    const next = number + 1;
    setNumber(next);
    const nextScore = Math.round((score + addition) * 100) / 100;
    setScore(nextScore);

    if (number === TOT_QS - 1) {
      setQuizOver(true);
      setTrees(Math.round ((score / 0.07) * 100)/100);
      //inquire();
    } else {
      console.log("continue")
    }
  }

  return (
    <body>
      <div className="horizontal-div"  style={{marginTop: "40px", marginBottom: "40px"}}>
        <div>
          <img src={logo} width="130" height="130" alt="Logo"/>
        </div>

        <div className="title" style={{marginLeft: "40px"}}>
          <h1> Carbon Calculator</h1>
        </div>
      </div>

      {(() => {
        if (startPage) {
          return (
            <>
             
              <div className="vertical-div" style={{alignItems: "center"}}>
              <p>You have a say in your own life.  Through your everyday choices, you impact the world around you.  
              How much you cook, how often you travel, and how much of your day you spend commuting are just some of the ways 
              in which your life affects our world.</p>
                <img src ={choices} width="800" height="100%" style={{objectFit: "contain", marginTop: "50px", marginBottom: "20px"}} alt="Choices that impact carbon footprint"/>
                <p style={{marginTop: "10px"}}> Begin your journey into eco-friendliness by understanding how your life choices impacted your carbon footprint!</p>
                <button className='start-btn'><img src ={start} alt="Start Button" width="200" height="100%" style={{objectFit: "contain", marginTop: "10px"}} onClick={startQuiz}/></button>
              </div>
            </>
          )

        } else if (quizOver) {

          return (
            <div className='final-screen'>
              <p> Your total carbon footprint is : {score} tons of carbon dioxide annually</p>
              <p> In order to offset your carbon footprint, you would require {trees} trees to sustain your lifestyle.</p>
            </div>
          )

        } else {
          return (
            <div className='vertical-div'>
              <p>Question: {number + 1} / {TOT_QS}</p>
              <div className='question-banner'>
                <p className = 'question'> {questions[number].question}</p>
                <div className='vertical-div'>
                  {questions[number].answers.map((answers) => (
                    <button className='option-btn' onClick={() => nextQuestion(answers.addVal)}>{answers.answerText}</button>
                  ))}
                </div>
              </div>
            <p style={{width: "85vw", alignSelf: "center", backgroundColor: "#e7f6fa", border: "2px solid #e7f6fa", borderRadius: "20px", textAlign: "center"}}>
              Carbon Footprint: <b> {score} tons </b> of carbon dioxide annually</p>
            </div>
          )
        }
      })()}
      
    </body>
  );
}

export default Calculator;
