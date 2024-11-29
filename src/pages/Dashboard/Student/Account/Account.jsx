import React from "react";

const Account = () => {
  const studentData = {
    name: "Emma Johnson",
    role: "Student",
    email: "emma.johnson@example.com",
    studentId: 1,
    age: 5,
    favoriteColor: "Red",
    grade: "KINDERGARTEN",
    skillLevel: "Level-1",
    ethnicity: "White-American",
    background:
      "Emma is originally from California. She loves painting, playing outdoors, and reading fairy tales.",
  };

  const handleEdit = () => {
    alert("Edit Profile clicked!");
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] p-8 flex  items-center justify-center">
      {/* Profile Card */}
      <div className=" w-full bg-white rounded-3xl shadow-2xl ">
        {/* Top Section with Background */}
        <div className="relative bg-gradient-to-r  from-[#75AEFF] to-[#6b2ba3]  p-8 text-white">
          <div className="flex items-center gap-8">
            <img
              src="https://api.dicebear.com/6.x/initials/svg?seed=Anmol Singh&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600"
              alt="Student Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-4xl font-bold">{studentData.name}</h1>
              <p className="text-lg font-medium">{studentData.role}</p>
              <p>{studentData.email}</p>
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="absolute top-6 right-6 bg-white text-[#FF8C00] px-6 py-2 rounded-full shadow-md font-semibold hover:bg-gray-100 transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Student ID</p>
            <p className="text-xl font-semibold">{studentData.studentId}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Age</p>
            <p className="text-xl font-semibold">{studentData.age}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Favorite Color</p>
            <p
              className="text-xl font-semibold"
              style={{ color: studentData.favoriteColor.toLowerCase() }}
            >
              {studentData.favoriteColor}
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Grade</p>
            <p className="text-xl font-semibold">{studentData.grade}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Skill Level</p>
            <p className="text-xl font-semibold">{studentData.skillLevel}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
            <p className="text-gray-600 font-medium">Ethnicity</p>
            <p className="text-xl font-semibold">{studentData.ethnicity}</p>
          </div>
        </div>

        {/* Background Section */}
        <div className="bg-[#FFF8E1] p-8">
          <h2 className="text-3xl font-semibold text-[#FF8C00] text-center mb-4">
            About {studentData.name}
          </h2>
          <p className="text-gray-700 text-lg text-center sm:text-left">
            {studentData.background}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
