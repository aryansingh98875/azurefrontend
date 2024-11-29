import { useState, useRef } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside"; 


export default function ProfileDropdown() {
  const [open, setOpen] = useState(false); 
  const [user, setUser] = useState({
    image: "https://api.dicebear.com/6.x/initials/svg?seed=Anmol Singh&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600",
    firstName: "John", 
  });


  

  const navigate = useNavigate();
  const ref = useRef(null);

  // Close the dropdown if the user clicks outside of it
  useOnClickOutside(ref, () => setOpen(false));

  const teacherId = localStorage.getItem("teacherId");
  console.log("Teacher ID:", teacherId);

  const studentId = localStorage.getItem("studentId");
  console.log("Student ID:", studentId);
  
  let linkpath = null;
  if(teacherId) {
    linkpath = `/dashboard-teacher/account`;
  }else{
    linkpath = `/dashboard-student/account`;
  }

  const logoutHandler = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); 
    // setUser(null); 
    navigate("/login"); 
  };

  return (
    <div className="relative">
      {/* Profile image and dropdown button */}
      <button onClick={() => setOpen(!open)} className="flex items-center gap-x-2">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          ref={ref}
          className="absolute top-[118%] -right-8 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Dashboard option */}
          <Link to={linkpath} onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>

          {/* Logout option */}
          <div
            // onClick={logoutHandler}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </div>
  );
}
