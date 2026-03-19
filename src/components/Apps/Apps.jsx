
import { useLoaderData } from 'react-router';
import AppCard from '../TrendingSection/SingleAppCard/AppCard';
import { useState } from 'react';
import AppError from '../Error/AppError';

const Apps = () => {
    const data = useLoaderData();
    const [filteredApp,setFilteredApp]=useState(data)

  const handleSearch=(e)=>{
    e.preventDefault();
    const searchApp = e.target.value;
    console.log(searchApp);

    const foundApp = data.filter(d=>d.title.toLowerCase().includes(searchApp.toLowerCase()));
    console.log(foundApp);
    setFilteredApp(foundApp)
    
  }
    return (
        <div className='text-center'>
           <p className='text-5xl mt-6 text-center font-bold'>Our All <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text   text-transparent'>Applications </span></p>
                <p className='text-sm mt-6 text-gray-400 font-bold'>Explore All Apps on the Market developed by us. We code for Millions</p>
       
       <div className='justify-evenly  flex my-6  '>
            <p className='font-bold text-xl border-b-2 border-gray-600'>({data.length}) Apps Found</p>
            <form onChange={handleSearch} action="">
                <input type="text" name="searchApp" className='rounded-lg p-2 bg-base-300 border-2' placeholder='Search Apps...'  id="" />
                {/* <input className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-2' type="submit" value="search" name="" id="" /> */}

            </form>
       </div>
 
              {
                filteredApp.length > 0 ? <div className='grid grid-cols-2 my-12 lg:grid-cols-4 gap-3.5'>
                    {filteredApp.map(singleData => <AppCard key={singleData.id} singleData={singleData} />)}
                  </div> : <AppError />
               
              }          
 
           
        </div>
    );
};

export default Apps;