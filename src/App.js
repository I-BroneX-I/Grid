import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import GalaryPage from './Components/GaleryPage/GalaryPage';
import HomePage from './Components/HomePage/HomePage';
import foto from './logo.png';

const App = () => {

  let authorization =  useSelector( state => state.registration.authorization )
  if( authorization ){
    return (
      <div className={s.bodyApp}>
        <header>
          <div className={s.container}>
            <div className={s.logo}>
              <img src={foto}></img>
            </div>
            <nav>
              <li>
                <NavLink to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/galary'>
                  Galary
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='/links'>
                  Links
                </NavLink>
              </li>
  
            </nav>
            <div>
              <button>
                Log in/LogOut
              </button>
            </div>
  
          </div>
        </header>
  
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/galary' element={<GalaryPage />} />
            <Route path='/contact' />
            <Route path='/links' />
            <Route path='*' element = { <h1>Error Paht</h1> }/>
  
          </Routes>
        </main>
      </div>
    )
  } else {
    return (
      <h1>You must initialization </h1>
    )
  }

}

export default App
