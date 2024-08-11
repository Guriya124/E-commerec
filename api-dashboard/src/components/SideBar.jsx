import { Link, useLocation } from 'react-router-dom';
import { ChevronFirst, BadgeDollarSign, UserCircle2, MoreVertical, ChevronLast } from 'lucide-react';
import { createContext, useState } from 'react';
import { Menulinks } from "../constant/index";

const SidebarContext = createContext();

export default function Sidebar() {
    const location = useLocation();
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <aside className={`h-screen transition-all ${expanded ? 'w-64' : 'w-20'}overflow-y-auto `}>
                <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                    <div className='p-3 pb-2 flex justify-between items-center border-b'>
                        {expanded && (
                            <Link to='/' className='flex items-center gap-2'>
                                <BadgeDollarSign className='w-8 h-8' />
                                <span className={`flex text-xl font-bold items-center transition-all ${expanded ? "w-32" : "w-0"} overflow-hidden`}>
                                    Ecommerce
                                </span>
                            </Link>
                        )}
                        <button onClick={() => setExpanded((curr) => !curr)} className='p-1 rounded-full hover:bg-slate-300'>
                            {expanded ? <ChevronFirst className='w-6 h-6' /> : <ChevronLast className='w-6 h-6' />}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className='flex-1 px-3 p-3'>
                            {Menulinks.map((link, index) => {
                                const isActive = location.pathname === link.link;
                                return (
                                    <li key={index} className={`relative flex items-center gap-2 py-2 px-3 my-1 font-medium cursor-pointer hover:bg-slate-200 rounded-md transition-colors group ${isActive ? "bg-blue-300" : "hover:bg-blue-200"}`}>
                                        <Link to={link.link} className='flex items-center gap-2'>
                                            <link.icon className='w-6 h-6' />
                                            <span className={`transition-all ${expanded ? "w-auto opacity-100 ml-2" : "w-0 opacity-0 ml-0"} overflow-hidden`}>
                                                {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </SidebarContext.Provider>

                    <div className='border-t flex p-3'>
                        <Link to='/' className='flex items-center gap-2'>
                            <UserCircle2 className='w-10 h-10 rounded-md' />
                            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-0 ml-0"}`}>
                                <div className='leading-4'>
                                    <h4 className='font-bold'>Jhon Doe</h4>
                                    <p className='text-xs text-gray-500'>jhone@mail.com</p>
                                </div>
                                <MoreVertical className='w-6 h-6' />
                            </div>
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
}