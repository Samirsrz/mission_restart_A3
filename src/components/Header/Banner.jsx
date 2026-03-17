import React from 'react';
import heroImage from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className=' my-10 p-4 flex flex-col gap-24'>
             <div className='text-center mx-auto'>
                  <p className='text-7xl font-bold'>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive</span> Apps</p>
                  <p className='text-sm mt-12 text-gray-400 font-bold'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,<br /> and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div>
                <img className='mx-auto' src={heroImage} alt="" />
               <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl p-10 text-white text-center">
                <h2 className="text-3xl font-bold mb-8">Trusted By Millions, Built For You</h2>
                 <div className="flex flex-col lg:flex-row md:flex-row justify-around">
    
              <div className="text-left">
                <p className="text-sm opacity-70">Total Downloads</p>
                <p className="text-5xl font-bold my-2">29.6M</p>
                <p className="text-sm opacity-70">21% More Than Last Month</p>
              </div>

              <div className="text-left">
               <p className="text-sm opacity-70">Total Reviews</p>
               <p className="text-5xl font-bold my-2">906K</p>
               <p className="text-sm opacity-70">46% More Than Last Month</p>
              </div>

              <div className="text-left">
               <p className="text-sm opacity-70">Active Apps</p>
               <p className="text-5xl font-bold my-2">132+</p>
               <p className="text-sm opacity-70">31 More Will Launch</p>
              </div>
                 </div>
               </div>
            </div>

           
        </div>
    );
};

export default Banner;