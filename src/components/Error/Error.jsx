import React from 'react';
import errorImg from'../../assets/error-404.png'
import { useNavigate } from 'react-router';
const Error = () => {
    const navigate =useNavigate()
    return (
      <div className='min-h-screen flex flex-col items-center justify-center'>
            <img className='w-175 animate-bounce' src={errorImg}  alt="404 error" />
            <h2 className='text-2xl font-bold mt-4 text-gray-700'>Opps!! Page Not Found</h2>
            <p className='text-gray-400 mt-2'>The page you are looking for is not available</p>
            <button onClick={navigate(-1)} className="btn bg-linear-to-r mt-2.5 text-white font-semibold from-[#632EE3] to-[#9F62F2]">Go back</button>
        </div>
    );
};

export default Error;