
import { data } from '../../../../utils/navDataLinks';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {

    const path = useLocation();
    const { user } = useSelector((state) => state.profile);
    // console.log(path.pathname);
    return (
        <div className="min-w-[260px] h-[calc(100vh-64px)] overflow-y-auto bg-gray-800">
            <div className="flex flex-col gap-3 p-4">
                <ul className="outline-none flex flex-col gap-3 text-white" >
                    {
                        data.map((navData, index) => (
                            navData?.role === user?.role && (
                                <li key={index} className={`${path.pathname === navData.path ? 'bg-teal-600' : ''} px-3 py-3 rounded-md`}>
                                    <NavLink to={navData.path} className="flex items-center gap-2">
                                        {navData.icon}
                                        <span className="text-base font-sans">{navData.title}</span>
                                    </NavLink>
                                </li>
                            )
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Sidebar