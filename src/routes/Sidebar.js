import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Sidebar = () => {
  return (
    <React.Fragment>
    <aside className='h-screen border-r z-1  md:flex-grow-1 flex-col w-52 w-max-60  hidden'>  
     <div className='mx-5 px-4' >
        <div className='text-3xl font-bold '>
            <span className='text-accent-300'>Raid</span>bin
          </div>
      </div>
      <nav className='flex flex-col justify-between h-full shadow-sm p-5 pb-2 border-t '>
        <ul className='flex-1'>
          <div className='text-xl font-heading'>Savage</div>
          <Link to='/m1s' className='relative inline-block w-full p-1 my-1 cursor-pointer transition-colors rounded-md hover:bg-primary-500'>M1S</Link>
        </ul>
      </nav> 
    </aside>
    <Outlet/>
    </React.Fragment>
  )
}

export default Sidebar
