import React from 'react'
import { Link } from 'react-router-dom';
import pp from '../../images/pp.png'
import p8 from '../../images/8.png'
import ppp from '../../images/ppp.png'
import p4 from '../../images/4.png'

const Sidebar = () => {
  return (
    <>
        <nav class="sidebar sidebar-offcanvas border border-secondary-subtle  border-start-0 border-top-0 border-botton-0 sidebar-contain " id="sidebar">
        <ul class="nav">

          <li class=" ">
            <Link class=" " to='/' >
              <img src={pp} class="menu-icon img-width"/>   
            </Link>
          </li>

          <li class=" mt-2">
            <Link class=" " to='/upload' >
              <img src={p8} class="menu-icon img-width"/>     
            </Link>
          </li>

          <li class=" mt-2">
            <Link class=" " to='' >
              <img src={ppp} class="menu-icon img-width"/>     
            </Link>
          </li>

          <li class=" mt-2">
            <Link class=" " to='' >
              <img src={p4} class="menu-icon img-width"/>     
            </Link>
          </li>

          <li class=" mt-2">
            <Link class=" " to='' >
              <img src={p8} class="menu-icon img-width"/>     
            </Link>
          </li>

        </ul>
        </nav>
         
    </>
  )
}

export default Sidebar
