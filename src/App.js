import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import SongButton from './components/SongButton'
import { Route , Link } from 'react-router-dom'
import SongPage from './components/SongPage'
import Home from './Home'
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';



class App extends React.Component {
  render(){
    return (
      <div>
        <Header></Header>
        <Route path='/' component={Home} exact></Route>
        <Route path='/components/SongPage' component={SongPage}></Route>
        <Route path='/components/RegisterPage' component={RegisterPage}></Route>
        <Route path='/components/LoginPage' component={LoginPage}></Route>

        
      </div>
    );
  }
  
  }
  
export default App;
