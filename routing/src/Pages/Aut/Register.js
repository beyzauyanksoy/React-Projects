import React from 'react'
import { Outlet } from 'react-router-dom'

function Register() {
  return (
    <div>
        <h2>Kayıt Ekranı</h2>
        <input placeholder='e-mail'></input>
        <input placeholder='Password' type="Password"></input>

    </div>
  )
}

export default Register