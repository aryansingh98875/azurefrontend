import React from 'react';
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { NavLink } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";

const TeacherSidebar = () => {
 
  return (
    <div className='flex-col items-center pl-20 pr-8 mt-8 bg-[#E7E6E6] py-6 h-screen'>
      <div className='flex gap-16 items-center'>
        <p className='text-black font-bold text-2xl mx-auto'>MENU</p>
        <div className='rounded-full p-2 bg-[#FFFFFF]'>
          <IoIosLogOut size={32} />
        </div>
      </div>

      {/* NavLinks with active styles */}
      <NavLink
        to="/dashboard-teacher/account"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center mt-6 bg-[#75AEFF] p-2  rounded-lg "
            : "flex gap-3 items-center mt-6 text-black"
        }
      >
        <div className='bg-[#FFFFFF] p-2 rounded-full'>
          <CgProfile size={28} />
        </div>
        <p className='text-xl font-semibold'>Account</p>
      </NavLink>

      <NavLink
        to="/dashboard-teacher/allstudents"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center mt-6 bg-[#75AEFF] p-2 rounded-lg "
            : "flex gap-3 items-center mt-6 text-black"
        }
      >
        <div className='bg-[#FFFFFF] p-2 rounded-full'>
          <PiStudent size={28} />
        </div>
        <p className='text-xl font-semibold'>Students</p>
      </NavLink>

      {/* <NavLink
        to="/student-dashboard/stats"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center mt-6 bg-[#75AEFF] p-2 rounded-lg "
            : "flex gap-3 items-center mt-6 text-black"
        }
      >
        <div className='bg-[#FFFFFF] p-2 rounded-full'>
          <IoStatsChartOutline size={28} />
        </div>
        <p className='text-xl font-semibold'>Stats</p>
      </NavLink> */}
    </div>
  );
};

export default TeacherSidebar;
