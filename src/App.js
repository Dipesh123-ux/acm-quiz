import React,{useState} from 'react'
import {questions} from './data'
import Button from '@mui/material/Button';

function App() {

  const [question,setQuestion] = useState("Click here to Start!");

  const handleClick = () => {
    const idx = Math.floor(Math.random() * 4);
    setQuestion(questions[idx]);
  }

  return (
    <div  className="main-head" >
      <h5 className="text-main " >{question}</h5>
      <Button style={{background:"yellow",color:"black"}} onClick={handleClick} variant="contained">Click</Button>
    </div>
  );
}

export default App;
