import {BsPlus,BsLightningFill,BsGearFill} from 'react-icons/bs';
import {FaFire,FaPoo} from 'react-icons/fa'
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire  size="28"/>} />
            <SideBarIcon icon={<BsPlus  size="28" />} />
            <SideBarIcon icon={<BsLightningFill size="28" />} />
            {/* <SideBarIcon icon={<BsGearFill size="28" />} /> */}
            <SideBarIcon icon={<FaPoo  size="28"/>} />

        </div>
    )
}

const SideBarIcon = ({icon}) => {
    return (
        <div className="sidebar-icon">
            {icon}
        </div>
    )
}
const DiscordUI = () => {
    return (
       <div className="flex">
              <SideBar />
       </div>
       )
    }
export default DiscordUI;