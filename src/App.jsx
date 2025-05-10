
import { useState } from 'react'
import './App.css'

function App() {

  const [currDate, setCurrDate] = useState(new Date());

  function AddDaysInDate() {
    const nextDate = new Date(currDate);         // Make a full Date object
    nextDate.setDate(nextDate.getDate() + 1)
    setCurrDate(nextDate)
  }

  return (
    <>
      <button onClick={AddDaysInDate}>step</button>


      {currDate.toString()}
    </>
  )
}

export default App
