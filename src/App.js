import React, { useState } from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import SignIn from './Components/LoginPage/SignIn';
import MainPage from './Components/MainPage/MainPage';
import Dashboard from './Components/MainPart/DashBoard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage/>}/> 
        <Route path='/signin' element={<SignIn/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
