import React from 'react'
import Navbar from '../../../components/common/Header/Navbar'
import StudentSidebar from '../../../components/core/Dashboard/StudentSidebar'
import { Outlet } from 'react-router-dom'

const Studentdash = () => {
  return (
    <div className='bg-[#F4F4F4] w-full h-full'>
       
        <div className='flex gap-12'>
            <div>
                <StudentSidebar></StudentSidebar>
            </div>
            <div className='mt-12 pr-20'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Studentdash