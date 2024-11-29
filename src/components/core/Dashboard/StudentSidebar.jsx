import React from 'react';
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAssignment } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
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
        to="/dashboard-student/account"
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
        to="/dashboard-student/assignment"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center mt-6 bg-[#75AEFF] p-2 rounded-lg "
            : "flex gap-3 items-center mt-6 text-black"
        }
      >
        <div className='bg-[#FFFFFF] p-2 rounded-full'>
          <MdOutlineAssignment size={28} />
        </div>
        <p className='text-xl font-semibold'>Assignment</p>
      </NavLink>

      <NavLink
        to="/dashboard-student/stats"
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
      </NavLink>
    </div>
  );
};

export default StudentSidebar;
