import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
       <div>
         <div className="max-w-7xl mx-auto">
            <Navbar  />
            <Outlet />
            </div>
        <div>
             <Footer />
        </div>
       </div>
    );
};

export default Root;