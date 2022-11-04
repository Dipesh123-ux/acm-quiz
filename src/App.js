import React,{useState} from 'react'
import {questions} from './data'
import Button from '@mui/material/Button';

function App() {

  const [question,setQuestion] = useState("Click here to Start!");
  const [count,setCount] = useState(localStorage.getItem("count") || 0);
  console.log();

  const handleClick = () => {
    const idx = Math.floor(Math.random() * 11);
    setQuestion(questions[idx]);
    setCount(count=>count+1);
    localStorage.setItem("count",count);
  }

  return (
    <>
    <div className="logo" >
    </div>
    <div style={{position:"absolute",left:"80%"}} className="text-white m-3 font-weight-bold">
      <h5>Count</h5>
      <h1 className="text-center">{count}</h1>
    </div>
    <div  className="main-head" >
      <h5 className="text-main " >{question}</h5>
      <Button style={{background:"yellow",color:"black"}} onClick={handleClick} variant="contained">Click</Button>
    </div>
    </>
  );
}

export default App;
