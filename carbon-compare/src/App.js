import './App.css';
import React, { useState } from 'react';

// images
import logo from './Images/Logo.png';
import Calculator from './calculator.js';
import startCalculator from './Images/StartCalculator.png';
import startCompare from './Images/StartCompare.png';


function App() {

  const[startPage, setStartPage] = useState(true);
  const[calculator, setCalculator] = useState(false);
  const[compare, setCompare] = useState(false);

  const goToCalculator = () => {
    setCalculator(true);
    setStartPage(false);
  }

  return (
    <body>
    {(() => {
      if (startPage) {
        return (
          <>
          <div className="horizontal-div"  style={{marginTop: "40px", marginBottom: "40px"}}>
            <div>
              <img src={logo} width="130" height="130" alt="Logo"/>
            </div>
    
            <div className="title" style={{marginLeft: "40px"}}>
              <h1> Carbon Compare</h1>
            </div>
          </div>

          <div className="vertical-div" style={{alignItems: "center", textAlign: "center"}}>
            <p>Welcome to CarbonCompare, where you can measure your carbon footprint and then compare it to those of others who have used 
            our carbon calculator.  Feel free to access any of our features when you're ready.</p>
            
            <div className='horizontal-div'>
              <button className='start-btn'><img src ={startCalculator} alt="Start Calculator" width="200" height="100%" style={{objectFit: "contain", marginTop: "10px"}} onClick={goToCalculator}/></button>
              <button className='start-btn'><img src ={startCompare} alt="Start Calculator" width="200" height="100%" style={{objectFit: "contain", marginTop: "10px"}}/></button>
            </div>
          </div>
          </>
        )

      } else if (calculator) {
        return (
          <Calculator/>
        )

      } else {
        return (
          <div className="horizontal-div"  style={{marginTop: "40px", marginBottom: "40px"}}>
            <div>
              <img src={startCalculator} width="130" height="130" alt="Logo"/>
            </div>
    
            <div className="title" style={{marginLeft: "40px"}}>
              <h1> Carbon Compare</h1>
            </div>
          </div>
        )
      }
    })()}
    </body>
   
  );
}

export default App;
