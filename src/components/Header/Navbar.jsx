import React from 'react';
import {Link, NavLink,  } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {


    const links =<>
<NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2' : 'm-2'}>
    Home
</NavLink>
    <NavLink to='/apps' className={({ isActive }) => isActive ? 'border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2' : 'm-2'}>
    Apps
</NavLink>

 <NavLink to='/installation' className={({ isActive }) => isActive ? 'border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2' : 'm-2'}>
   Installation
</NavLink>

    
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns={logo} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {
        links
     }
      </ul>
    </div>
    <Link to={'/'} className=" btn bg-white border-0 items-center text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img className='w-[50px]' src={logo} alt="" />HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
      links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Samirsrz' className="btn bg-linear-to-r text-white font-semibold from-[#632EE3] to-[#9F62F2]"><FaGithub />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;