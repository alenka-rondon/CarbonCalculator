import React from 'react';
import './components.css';

const QuestionCard = ({question, options, userAnswer, qNumber, totalQs, callback}) => (
    <div>
        <p>Question: {qNumber} / {totalQs}</p>
        <div className='horizontal-div'>
            <p> {question}</p>
            <div className='vertical-div'>
                {options.map((options) => (
                    <button>{options.answerText}</button>
                ))}
            </div>
        </div>
    </div>
);

export default QuestionCard;