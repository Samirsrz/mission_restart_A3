import React from 'react';
import AppCard from './SingleAppCard/AppCard';
import { Link } from 'react-router';

const Trendin = ({data}) => {
    return (
        <div className='mx-auto p-3 text-center'>
            <h2 className='text-4xl font-bold'>Trending <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Apps</span></h2>
            <div className='grid grid-cols-2 my-12 lg:grid-cols-4 gap-3.5'>
                {
                      data.slice(0, 8).map(singleData=> <AppCard key={singleData.id} singleData={singleData} />)
                }
            </div>
             <Link to='/apps' className="btn bg-linear-to-r w-[150px] text-white font-semibold from-[#632EE3] to-[#9F62F2]">Show All</Link>
        </div>
    );
};

export default Trendin;