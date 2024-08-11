import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar'
import Navbar from './components/Navbar'

function Layout() {
    return (
        <>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar />
                <div className='flex flex-col flex-1'>
                    <Navbar />
                    <main className='flex-1 overflow-y-auto'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout