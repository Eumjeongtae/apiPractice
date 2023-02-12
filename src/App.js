
import './App.css';
import './reset.css';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Search from './routes/Search'
import data from './data.js';


function App() {

  const [searchText , setSearchText] = useState('');
  const API_KEY ="zrqal4OTyBovv5ucDpanztK5KYKQZPrX";
  let [user,setUser] =useState();
  function searchForPlayer(event){
    var APICallString = `https://api.neople.co.kr/cy/players?nickname=${searchText}&wordType=<wordType>&apikey=${API_KEY}`
    axios.get(APICallString).then((결과)=>{
      console.log(결과.data)
      let origin = [...결과.data]
      console.log(origin)
      

    }) 
    .catch(()=>{
      console.log('실패함')
    })
  }
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
            <div className='container'>
              <h5><strong> 사&middot;이&middot;퍼&middot;즈</strong> <span>전적검색</span></h5>
              <div className='srch'>
                <input type="text" onChange={ e => setSearchText(e.target.value)} placeholder='닉네임을 정확히 입력하세요'></input>
                <button onClick={e => searchForPlayer(e)} className="srch-btn"></button>
              </div>
              <dl class="noti">
                <dt>사이퍼즈 전적검색 이용방법</dt>
                <dd>&middot; &nbsp; 전적은 공성전 시작을 기준으로 1시간 마다 갱신됩니다.</dd>
                <dd>&middot; &nbsp; 닉네임이 정확히 일치하는 경우에만 검색이 가능합니다.</dd>
                <dd>&middot; &nbsp; 전적 데이터는 매 시즌 종료를 기준으로 초기화 됩니다.</dd>
                <dd>&middot; &nbsp; 실시간 랭킹(HERO, LEGEND)은 게임 내 '내정보 &gt; 랭킹'에서 확인할 수 있습니다.</dd>
              </dl>
            </div>

                {/* <button onClick={()=>{
      axios.get('https://api.neople.co.kr/cy/players?nickname=안녕&wordType=<wordType>&apikey=zrqal4OTyBovv5ucDpanztK5KYKQZPrX').then((결과)=>{
        console.log(결과.data)
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>버튼</button> */}
            </> 
            } /> 
             <Route path='/search' element={<Search />}/>
        </Routes>
    </div>
  );
}

export default App;
