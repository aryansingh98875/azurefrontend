import React from 'react';

const TeacherAccount = () => {
  // Sample data for the teacher profile
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const teacherData = {
    name: name,
    role: 'Teacher',
    email: email,
    profilePhoto: `https://api.dicebear.com/6.x/initials/svg?seed= ${name} &backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`, // Placeholder image for profile photo
    bio: 'Passionate educator with a love for technology. Striving to inspire students and help them achieve their goals',
    numberOfStudents: 150,
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-8  pl-8 pr-24 flex  w-full shadow-2xl">
      <div className="w-full  bg-white rounded-xl shadow-xl  h-full">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-gradient-to-r  from-[#75AEFF] to-[#6b2ba3] text-white rounded-t-lg ">
          <div className="flex items-center mb-6 sm:mb-0">
            <img
              src={teacherData.profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="ml-6">
              <h2 className="text-4xl font-semibold">{teacherData.name}</h2>
              <p className="text-xl mt-2">{teacherData.role}</p>
              <p className="text-lg mt-1">{teacherData.email}</p>
            </div>
          </div>
          <div className="text-right mt-6 sm:mt-0">
            <button className="px-6 py-2 bg-white text-[#75AEFF] font-semibold rounded-full shadow-lg hover:bg-[#75AEFF] hover:text-white transition duration-300 ease-in-out">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-[#75AEFF] mb-4">Bio</h3>
          <p className="text-gray-700">{teacherData.bio}</p>
        </div>

        {/* Students Count */}
        <div className="p-8 bg-gray-50">
          <h3 className="text-2xl font-semibold text-[#75AEFF] mb-4">Number of Students</h3>
          <p className="text-xl text-gray-700">{teacherData.numberOfStudents}</p>
        </div>

        {/* Background Section */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-[#75AEFF] mb-4">Background</h3>
          <p className="text-gray-700">
            I have been teaching for over 10 years, with a focus on creating innovative learning experiences for students. I love
            integrating technology into my lessons and providing individualized support to ensure every student can succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherAccount;
