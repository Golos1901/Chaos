import React  from 'react';
import Header from './components/Header';
import './App.css';
import NavBar from './components/nav';
import Content from './components/Content';

const App = ()=> {
  return (
    <div className='app-wrapper'>
    <Header/>
    <NavBar/>
    <Content/>
    
    
    
    </div>
  );
}

export default App;
