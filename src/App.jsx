import { useState } from 'react';
import './App.css';
import CustomizedSlider from './ValueLabelComponent';

function App() {
  const [currDate, setCurrDate] = useState(new Date());
  const [steps, setSteps] = useState(1);
  const [counts, setCounts] = useState(0);
  const [prevSlider, setPrevSlider] = useState(0); 

  function AddDaysInDate(noOfChange) {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate() + noOfChange);
    setCurrDate(nextDate);
  }

  function stepIncrDescr(type) {
    if (type === 'add') {
      setSteps((step) => step + 1);
    } else if (type === 'less') {
      setSteps((step) => (step !== 0 ? step - 1 : 0));
    }
  }

  function countIncrDescr(type) {
    let newCount;
    if (type === 'add') {
      newCount = counts + steps;
    } else if (type === 'less') {
      newCount = counts - steps;
    }
    setCounts(newCount);
    AddDaysInDate(newCount);
  }
  const handleSliderChange = (event, newValue) => {
    if (newValue > prevSlider) {
      countIncrDescr('add');
    } else if (newValue < prevSlider) {
      countIncrDescr('less');
    }

    setPrevSlider(newValue);   // Track current slider value
  };

  return (
    <div className="container">
      <h1>Date Step Counter</h1>

      <div className="control">
        <h2>Step Control</h2>
        <div className="button-group">
          <button onClick={() => stepIncrDescr('less')}>-</button>
          <span>{steps}</span>
          <button onClick={() => stepIncrDescr('add')}>+</button>
        </div>
      </div>

      <div className="control">
        <h2>Count Control</h2>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <CustomizedSlider value={counts} onChange={handleSliderChange} />
        </div>

        <div className="button-group">
          <button onClick={() => countIncrDescr('less')}>-</button>
          <span>{counts}</span>
          <button onClick={() => countIncrDescr('add')}>+</button>
        </div>
      </div>

      <div className="result">
        <p><strong>{counts}</strong> day(s) from today is:</p>
        <p className="date">{currDate.toDateString()}</p>
      </div>
    </div>
  );
}

export default App;
