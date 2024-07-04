import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post='강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
z
  let [따봉, c] = useState([0,0,0]);  
  dfdfdfdffd
  let [modal, setModal]= useStdfdfdfafdfdfdfdfte(false);

  function 함수(){  //() => {console.log} //함수 만드는 문법 바로 넣어도 괜찮음
    console.log(1);
  }
  return (
    <div className="dfdfdfdfdfdfApp">dfdfdfdf
      <div className='black-navcvcvcvcvdfdfdfdfdfcvxvcvcv'>
        <h4>블로그</h4>
        </div>

        <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);

        }}> 가나다순 정렬</button>

       {/*  <button onClick={() => {
          let copy = [...글제목];
          copy[0] ='여자코트추천';
          글제목변경(copy);
        }}>글수정</button>

        <div className="list"> 
          <h4>{글제목[0]}<span onClick={ () => {c(따봉+1)} }>👍</span> {따봉}</h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4 onClick={() => {
            modal == false ? setModal(true) : setModal(false)

          }}>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>

        {
          modal == true ? <Modal/>: null
        } */}

        {
          글제목.map(function(a, i){  //반복문 돌때마다 0부터 1씩 증가하는 정수
            return (   
            <div className="list">
              <h4 onClick={() => {setModal(true)}}>
              { 글제목[i] }
                <span onClick={ () => {
                  let copy = [...따봉];
                  copy[i] = copy[i]+1;
                  c(copy)
                } 
              
              }>👍</span> {따봉[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
            )
          })
        }
        
    </div>
  );
}

function Modal() {
  return(

        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}

function Title() {
  return(
    <h4>안녕하세요</h4>
  )
}

export default App;
