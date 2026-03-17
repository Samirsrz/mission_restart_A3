
import { useLoaderData } from 'react-router';
import AppCard from '../TrendingSection/SingleAppCard/AppCard';

const Apps = () => {
    const data = useLoaderData();

    return (
        <div className='text-center'>
           <p className='text-5xl mt-6 text-center font-bold'>Our All <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text   text-transparent'>Applications </span></p>
                <p className='text-sm mt-6 text-gray-400 font-bold'>Explore All Apps on the Market developed by us. We code for Millions</p>
       
       <div className='justify-evenly  flex my-6  '>
            <p className='font-bold text-xl border-b-2 border-gray-600'>({data.length}) Apps Found</p>
            <input type="text" className='rounded-lg p-2 bg-base-300 border-2' placeholder='Search Apps...' name="searchApp" id="" />
       </div>
              <div className='grid grid-cols-2 my-12 lg:grid-cols-4 gap-3.5'>
                {
                      data.map(singleData=> <AppCard key={singleData.id} singleData={singleData} />)
                }
            </div>
        </div>
    );
};

export default Apps;