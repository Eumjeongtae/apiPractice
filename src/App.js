
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


function App() {

  

    
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
                <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button>
            </> 
            } /> 
        </Routes>
    </div>
  );
}

export default App;
