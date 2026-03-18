import toast from "react-hot-toast";

const getInstallApps=()=>{
   const storedInstallAppsSTR = localStorage.getItem("installedApps");
   if(storedInstallAppsSTR){
    const storedApps = JSON.parse(storedInstallAppsSTR);
    return storedApps;
   }
   else{
    return [];
   }
}

const addInstallApps=(id)=>{
   const installApps = getInstallApps();
   if(installApps.includes(id)){
    return toast.error('This is already installed')
   } 
   else{
    installApps.push(id);
    const data = JSON.stringify(installApps)
    localStorage.setItem("installedApps",data);
   }
}
const uninstallApp = (id) => {
    const installedAppsstr = getInstallApps();
    const installedApps=installedAppsstr.map(i=>parseInt(i))
    const updated = installedApps.filter(appId => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App Uninstalled!");
}
export {getInstallApps,addInstallApps,uninstallApp}