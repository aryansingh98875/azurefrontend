import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ACCOUNT_TYPE } from "../../utils/constants";
import Tab from "../../components/common/Tab";
import { StudentPic, TeacherPic } from "../../assets/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    teacherid: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { Name, email, password, confirmPassword, teacherid } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = {
      email,
      password,
      name: Name,
      teacherId: teacherid,
    };

    const endpoint =
      accountType === ACCOUNT_TYPE.STUDENT
        ? "http://localhost:8081/api/v1/signup/student/send-otp"
        : "http://localhost:8081/api/v1/signup/teacher/send-otp";

    try {
      toast.loading("Sending OTP...");

      await axios.post(endpoint, signupData);

      toast.dismiss();
      toast.success("OTP sent successfully! Please verify.");

      // Redirect to verification route
      navigate("/verification", { state: { email, accountType } });
    } catch (error) {
      toast.dismiss();
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div className="w-full bg-[#F4F4F4] pt-24 h-screen overflow-y-auto">
      <Toaster />
      <div className="flex px-12 justify-center">
        <div className="max-w-[50%] border-black border-y-2 border-l-2 px-16 py-12">
          <h1 className="text-center font-bold text-4xl">Sign Up</h1>
          <Tab tabData={tabData} field={accountType} setField={setAccountType} />

          <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
            <div>
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                  Name <sup className="text-[#5B9CF9]">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="Name"
                  value={Name}
                  onChange={handleOnChange}
                  placeholder="Enter first name"
                  className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] text-black"
                />
              </label>
            </div>
            <label>
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
                className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] text-black"
              />
            </label>
            <div className="flex gap-x-4">
              <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                  Create Password <sup className="text-[#5B9CF9]">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] pr-10 text-black"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} />
                  ) : (
                    <AiOutlineEye fontSize={24} />
                  )}
                </span>
              </label>
              <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                  Confirm Password <sup className="text-[#5B9CF9]">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] pr-10 text-black"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} />
                  ) : (
                    <AiOutlineEye fontSize={24} />
                  )}
                </span>
              </label>
            </div>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
                Teacher Id <sup className="text-[#5B9CF9]">*</sup>
              </p>
              <input
                required
                type="text"
                name="teacherid"
                value={teacherid}
                onChange={handleOnChange}
                placeholder="Enter Teacher Id"
                className="w-full rounded-[0.5rem] border-[1px] border-black p-[12px] text-black"
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-[#5B9CF9] py-[8px] px-[12px] font-medium text-richblack-900"
            >
              Send OTP
            </button>
          </form>
        </div>
        <div className="rounded-xl">
          <img
            src={accountType === ACCOUNT_TYPE.STUDENT ? StudentPic : TeacherPic}
            alt="Account Type"
            className=" border-2 border-black "
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
