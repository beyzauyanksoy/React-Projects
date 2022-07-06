import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './autstyles.css';

function AutLayout() {
  return (
    <div className='aut-container'>
      <div className='aut-menu'>
      <Link to="/Aut">Giriş Yap</Link>
       <Link to="/Aut/Register">Kayıt ol</Link>
      </div>
       
        <hr></hr>
        <Outlet/>
    </div>
    
  )
}

export default AutLayout