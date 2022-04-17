
import './App.css';
import logo from './Images/Logo.png';
import start from './Images/Start.png';
import choices from './Images/Choices.png';

function App() {
  return (
    <body>
      <div className="horizontal-div">
        <div>
          <img src={logo} width="130" height="130" alt="Logo"/>
        </div>

        <div className="title" style={{marginLeft: "40px"}}>
          <h1> Carbon Calculator</h1>
        </div>
      </div>
      <p>You have a say in your own life.  Through your everyday choices, you impact the world around you.  
        How much you cook, how often you travel, and how much of your day you spend commuting are just some of the ways 
        in which your life affects our world.</p>
      <div className="vertical-div" style={{alignItems: "center", marginTop: "80px"}}>
        <img src ={choices} width="800" height="100%" style={{objectFit: "contain", marginBottom: "20px"}} alt="Choices that impact carbon footprint"/>
        <p style={{marginTop: "10px"}}> Begin your journey into eco-friendliness by understanding how your life choices impacted your carbon footprint!</p>
        <img src ={start} alt="Start Button" width="200" height="100%" style={{objectFit: "contain", marginTop: "10px"}}/>
      </div>
    </body>
  );
}

export default App;
