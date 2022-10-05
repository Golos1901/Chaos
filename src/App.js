import React  from 'react';
import Header from './components/Header/Header';
import './App.css';
import NavBar from './components/NavBar/nav';
import Profile from './components/ProFile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = ()=> {
  return (
    <BrowserRouter>
    
    <div className='app-wrapper'>
    <Header/>
    <NavBar/>
    <div className='app-wrapper-content'>
    <Routes>
   <Route exact path='/Dialogs' element={<Dialogs/>}/>
    <Route exact path='/Profile' element={<Profile/>}/>
    </Routes>
    </div>
   
    
    
    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
