import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';

const Root = () => {
    return (
       <div>
         <div className="max-w-7xl mx-auto">
            <Navbar  />
            <Outlet />
            </div>
        <div>
             <h1>Footer</h1>
        </div>
       </div>
    );
};

export default Root;