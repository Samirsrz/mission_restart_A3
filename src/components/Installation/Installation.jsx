
import { useLoaderData } from 'react-router';
import { getInstallApps, uninstallApp } from '../Js/AddToDB';
import { IoMdDownload } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import toast from 'react-hot-toast';

const Installation = () => {
    const data = useLoaderData();
    
    const installedAppsStr = getInstallApps()
    const installedApps = installedAppsStr.map(i=>parseInt(i)) 
    console.log(installedApps);
    const installationDone = data.filter(d=> installedApps.includes(d.id))
    console.log(installationDone);

     

    const handleUninstall=(id)=>{
          console.log(id);
          toast.success('Successfully Uninstalled. Please reload!!')
           uninstallApp(id);
           
    }
 

    return (
      <div className='text-center'>
        
           <p className='text-5xl mt-6 text-center font-bold'> Your <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text   text-transparent'> Installed </span> Apps </p>
                <p className='text-sm my-6 text-gray-400 font-bold'>Explore All Trending Apps on the Market developed by us.</p>

        <div className='flex justify-between items-center'>
            <p className='text-xl my-6 text-gray-700 border-b-2 font-bold'>{installationDone.length} installed</p>
            <details className="dropdown">
              <summary className="btn m-1">Sort By Downloads </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a >High-Low</a></li>
                <li><a >Low-High</a></li>
              </ul>
            </details>

        </div>
                <div>
                    {
                        installationDone.map(app=>(
                        <div key={app.id} className="flex items-center justify-between px-6 py-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
                <img src={app.image} alt={app.title} className="w-16 h-16 rounded-xl object-cover bg-gray-200" />
                <div>
                    <h3 className="font-bold text-gray-800">{app.title}</h3>
                    <div className="flex items-center gap-3 text-sm mt-1">
                        <span className="text-green-500 flex gap-1.5 items-center font-medium"> <IoMdDownload /> {app.downloads}</span>
                        <span className="text-orange-400 flex gap-1.5 items-center font-medium"><FcRating /> {app.ratingAvg}</span>
                        <span className="text-gray-400">{app.size} MB</span>
                    </div>
                </div>
            </div>
            <button onClick={()=> handleUninstall(app.id)} className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium">
                Uninstall
            </button>
        </div>
         ))
            }
      </div>
            
        </div>
    );
};

export default Installation;