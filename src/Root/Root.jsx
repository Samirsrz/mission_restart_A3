import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
};

export default Root;