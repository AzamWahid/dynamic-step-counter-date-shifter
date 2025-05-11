
import { useState } from 'react'
import './App.css'

function App() {

  const [currDate, setCurrDate] = useState(new Date());
  const [steps, setsteps] = useState(1);
  const [counts, setcounts] = useState(0);

  function AddDaysInDate(noOfChnage) {
    const nextDate = new Date();         // Make a full Date object
    nextDate.setDate(nextDate.getDate() + noOfChnage)
    setCurrDate(nextDate)
  }

  function stepIncrDescr(type) {
    if (type == 'add') {
      setsteps((step) => step+1);
    }
    else if (type == 'less') {
      setsteps((step) =>  step != 0 ? step - 1 : 0);
    }
  }

    function countIncrDescr(type) {
    if (type == 'add') {
      setcounts((count) => count+ steps);
    }
    else if (type == 'less') {
      setcounts((count) => count - steps);
    }
     AddDaysInDate(counts)

  }

  return (
    <>

      <button onClick={() => stepIncrDescr('add')}>+</button> steps : {steps} <button onClick={() => stepIncrDescr('less')}>-</button>
      <br />
      <button onClick={() => countIncrDescr('add')}>+</button> Count : {counts} <button onClick={() => countIncrDescr('less')}>-</button>
      <br />

      <button onClick={AddDaysInDate}>step</button>



      <br />


      {currDate.toString()}
    </>
  )
}

export default App
