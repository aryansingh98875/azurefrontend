import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Level1 from './pages/Levels/Level1';
import Studentdash from './pages/Dashboard/Student/Studentdash';
import Instructordash from './pages/Dashboard/Instructor/Instructordash';
import Account from './pages/Dashboard/Student/Account/Account';
import Assignment from './pages/Dashboard/Student/Assignment/Assignment';
import Stats from './pages/Dashboard/Student/Stats/Stats';
import TeacherAccount from './pages/Dashboard/Instructor/TeacherAccount/TeacherAccount';
import TeacherAllStudents from './pages/Dashboard/Instructor/TeacherAllStudents/TeacherAllStudents';
import {jwtDecode} from 'jwt-decode';
import Navbar from './components/common/Header/Navbar';
import Verification from './pages/Auth/Verification';

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route
          path="signup"
          element={
              <Signup />
          }
        />
      <Route
          path="login"
          element={
              <Login />
          }
        />
        <Route path="/verification" element={<Verification/>}></Route>
        <Route path="/level1" element={<Level1/>} /> 

        <Route path="/dashboard-student/*"  element={<Studentdash/>}>
          <Route path="account" element={<Account/>} /> 
          <Route path="assignments" element={<Assignment/>} />
          <Route path="stats" element={<Stats/>} />
        </Route>

        <Route path="/dashboard-teacher/*" element={<Instructordash/>}> 
          <Route path="account" element={<TeacherAccount/>} /> 
          <Route path="allstudents" element={<TeacherAllStudents/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
