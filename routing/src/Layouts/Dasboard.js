import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
function Dasboard() {
  return (
    <div>
        <Menu></Menu>
        <div id="content">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dasboard