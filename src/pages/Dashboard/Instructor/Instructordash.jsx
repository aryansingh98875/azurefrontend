import React from 'react'
import Navbar from '../../../components/common/Header/Navbar'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from '../../../components/core/Dashboard/TeacherSidebar'

const Instructordash = () => {
  return (
    <div className='bg-[#F4F4F4] w-full h-full'>
        
        <div className='flex gap-12'>
            <div>
                <TeacherSidebar></TeacherSidebar>
            </div>
            <div className='mt-12 pr-20'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Instructordash