
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


function App() {

  const [searchText , setSearchText] = useState('');
  const API_KEY ="RGAPI-cb1d3234-180e-4390-bf71-d8396e5cdf8a";
  function searchForPlayer(event){
    var APICallString = `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${searchText}?api_key=${API_KEY}`
  }
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
            <div className='container'>
              <h5>league of legend search</h5>
              <input type="text" onChange={ e => setSearchText(e.target.value)}></input>
              <button onClick={e => searchForPlayer(e)}>search for player</button>
            </div>

                <button onClick={()=>{
      axios.get('https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/갓정태?api_key=RGAPI-cb1d3234-180e-4390-bf71-d8396e5cdf8a').then((결과)=>{
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
