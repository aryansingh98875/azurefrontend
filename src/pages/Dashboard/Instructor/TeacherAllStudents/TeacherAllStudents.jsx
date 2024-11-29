import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { kidProfile } from '../../../../assets/common';
import toast, { Toaster } from 'react-hot-toast';

const TeacherAllStudents = () => {
  const [students, setStudents] = useState([]);
  const uniqueId = localStorage.getItem('uniqueId');
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        toast.loading('Fetching students...');
        const response = await axios.get(`http://localhost:8081/api/v1/data/student/data/${uniqueId}`);
        toast.dismiss();
        toast.success('Students fetched successfully!');
        console.log('Students:', response.data);
        setStudents(response.data);
      } catch (error) {
        toast.error('Error fetching students!');
        console.error('Error fetching students:', error);
      }
    };

    if (uniqueId) fetchStudents();
  }, [uniqueId]);

  return (
    <div>
      <Toaster></Toaster>
      <h2 className="text-3xl font-bold">List Of Students</h2>
      <div className="flex flex-wrap gap-12 mt-8">
        {students.map(({ id, profile, name, highestLevel, accuracy }) => (
          <div
            key={id}
            className="flex flex-wrap pl-4 py-3 boxgradient w-[22rem] h-[13rem] overflow-hidden relative"
          >
            <div className="flex w-full gap-6 pr-4">
              <div>
                <img
                  src={profile || kidProfile}
                  alt="profile"
                  width={72}
                  height={72}
                  className="rounded-full border-[4px] border-[#6F52CE] p-[2px]"
                />
              </div>
              <div className="text-[#5702CE] font-extrabold text-[24px] mt-2">{name}</div>
            </div>
            <div>
              <p className="text-white font-medium">Accuracy: {accuracy}%</p>
            </div>
            <p className="absolute text-[263px] text-white font-extrabold opacity-30 transform translate-x-[170px] -translate-y-[50px]">
              {highestLevel}
            </p>
            <Link
              to={`/students/`}
              className="absolute transform translate-x-[250px] translate-y-[140px] px-4 py-2 bg-[#6920CF] rounded-2xl text-white font-medium hover:bg-[#5420CF] cursor-pointer"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAllStudents;
