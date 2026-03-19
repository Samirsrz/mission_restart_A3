import React from 'react';
import AppErrorImg from'../../assets/App-Error.png'
import { Line } from 'recharts';
import { Link, NavLink } from 'react-router';
const AppError = () => {
    
    return (
       <div className='min-h-screen flex flex-col items-center justify-center'>
                   <img className='w-96' src={AppErrorImg}  alt="404 error" />
                   <h2 className='text-2xl font-bold mt-4 text-gray-700'>App Not Found</h2>
                   <p className='text-gray-400 mt-2'>Please go to app page</p>
                   <NavLink to={'/apps'} className="btn bg-linear-to-r mt-2.5 text-white font-semibold from-[#632EE3] to-[#9F62F2]">Go Back</NavLink>
               </div>
    );
};

export default AppError;