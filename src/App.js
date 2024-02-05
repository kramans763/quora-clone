import React from 'react';
import './App.css';
import Quora from './components/Home/Quora';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AddQuestion from './components/AddQuestion/AddQuestion';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Answer from './components/Answer/Answer';
import AnswerPageDetail from './components/AnswerPageDetail/AnswerPageDetail';



function App() {
  const dispatch = useDispatch() ;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Quora/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/addQues' element={<AddQuestion/>}></Route>
        <Route path='/working' element={<UnderConstruction/>}></Route>
        <Route path='/answer' element={<Answer/>}></Route>
        <Route path='/pagedetail/:id' element={<AnswerPageDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
