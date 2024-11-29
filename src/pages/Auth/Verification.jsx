import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ACCOUNT_TYPE } from "../../utils/constants";

const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, accountType } = location.state || {};
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const endpoint =
      accountType === ACCOUNT_TYPE.STUDENT
        ? "http://localhost:8081/api/v1/signup/verify-otp"
        : "http://localhost:8081/api/v1/signup/teacher/verify-otp";

    try {
      toast.loading("Verifying OTP...");
      
      // Ensure OTP is sent as a string
      const response = await axios.post(endpoint, { email, otp});
      
      toast.dismiss();
      toast.success("Account verified successfully!");
        console.log("Response:", response.data);
      //Save token and navigate
      localStorage.setItem("token", response.data.anotherRouteResponse.token);
      if (accountType === ACCOUNT_TYPE.STUDENT) {
        localStorage.setItem("studentId", response.data.anotherRouteResponse.student.id);
        localStorage.setItem("name", response.data.anotherRouteResponse.student.name);
        localStorage.setItem("email", response.data.anotherRouteResponse.student.email);
        localStorage.setItem("uniqueId", response.data.anotherRouteResponse.student.teacherId);
        localStorage.setItem("teacherId", null);
        navigate("/dashboard-student/account");
      } else {
        localStorage.setItem("teacherId", response.data.anotherRouteResponse.teacher.id);
        localStorage.setItem("name", response.data.anotherRouteResponse.teacher.name);
        localStorage.setItem("email", response.data.anotherRouteResponse.teacher.email);
        localStorage.setItem("uniqueId", response.data.anotherRouteResponse.teacher.uniqueId);
        localStorage.setItem("studentId", null);
        navigate("/dashboard-teacher/account");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response?.data?.message || "OTP verification failed.");
      console.log(error)
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
      <form onSubmit={handleVerify} className="w-full max-w-sm">
        <label>
          <p className="mb-1">Enter OTP</p>
          <input
            required
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full rounded-md border p-2"
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default Verification;
