import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ACCOUNT_TYPE } from '../../utils/constants';
import Tab from '../../components/common/Tab';
import { StudentPic, TeacherPic } from '../../assets/common';
import toast, { Toaster } from 'react-hot-toast'; // Import hot-toast

const Login = () => {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const apiEndpoint =
      accountType === ACCOUNT_TYPE.STUDENT
        ? 'http://localhost:8081/api/v1/student/auth/login'
        : 'http://localhost:8081/api/v1/teacher/auth/login';

    try {
      const response = await axios.post(apiEndpoint, loginData);
      toast.loading('Logging in...');
      // Extract token from response
      const { token } = response.data;

      // Save token to localStorage
      localStorage.setItem('token', token);
      if (accountType === ACCOUNT_TYPE.STUDENT && response.data.student) {
        localStorage.setItem("studentId", response.data.student.id);
        localStorage.setItem("email", response.data.student.email);
        localStorage.setItem("name", response.data.student.name);
        localStorage.setItem("uniqueId", response.data.student.teacherId);
        localStorage.setItem("teacherId", null);
      } else if (accountType === ACCOUNT_TYPE.INSTRUCTOR && response.data.teacher) {
        localStorage.setItem("teacherId", response.data.teacher.id);
        localStorage.setItem("email", response.data.teacher.email);
        localStorage.setItem("name", response.data.teacher.name);
        localStorage.setItem("uniqueId", response.data.teacher.uniqueId);
        localStorage.setItem("studentId", null);
      }
      toast.dismiss();

      // Show success toast
      toast.success('Login successful!');

      // Reset form data
      setFormData({
        email: '',
        password: '',
      });

      // Navigate to the appropriate dashboard
      const dashboardRoute =
        accountType === ACCOUNT_TYPE.STUDENT ? '/dashboard-student/account' : '/dashboard-teacher/account';
      navigate(dashboardRoute);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      
      // Show error toast
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const tabData = [
    {
      id: 1,
      tabName: 'Student',
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: 'Instructor',
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div className='h-screen bg-[#F4F4F4] pt-24'>
      <Toaster></Toaster>
      <div className="flex px-12 justify-center">
      <div className="w-[35%] border-black border-y-2 border-l-2 px-20 py-12">
        <h1 className="text-center font-bold text-4xl mb-6">Login</h1>
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />

        <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
              Email Address <sup className="text-[#5B9CF9]">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              style={{
                boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
              }}
              className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] text-black"
            />
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
              Password <sup className="text-[#5B9CF9]">*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
              }}
              className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] pr-10 text-black"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#000000" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#000000" />
              )}
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-[#5B9CF9] py-[8px] px-[12px] font-medium text-richblack-900"
          >
            Login
          </button>
        </form>
      </div>

      <div className="border-2 border-black">
        <img
          src={accountType === ACCOUNT_TYPE.STUDENT ? StudentPic : TeacherPic}
          alt="Account Type"
          className="rounded-xl"
        />
      </div>
    </div>
    </div>
  );
};

export default Login;
