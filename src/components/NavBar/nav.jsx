import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css';



const NavBar = ()=> {
  return ( 
     <nav className={s.NavBar}>

<div className={s.item}>
 <NavLink to='/Profile' className = { navData => navData.isActive ? s.active : s.item } > Profile</NavLink>
</div>

<div className={s.item}>
 <NavLink to='/Dialogs' className = { navData => navData.isActive ? s.active : s.item } > Messages</NavLink>
</div>
<div className={s.item}>
 <a> News</a>
</div>
<div className={s.item}>
 <a> Prophecies</a>
</div>
<div className={s.item}>
 <a> Dark Apostle Speeches</a>
</div>

    </nav>
  )
    
    }
    export default NavBar;