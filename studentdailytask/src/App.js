import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import StudentAdd from './component/StudentAdd';
import LoginPage from './Pages/Login';
import { useRef, useState } from 'react';
import AddLectureContainer from './Pages/AddLectureContainer';
import UpComingLectureTecaherSection from './Pages/UpComingLectureTecaherSection';
import UserDetail from './Pages/UserDetail';
import {TeacherPresentSection} from './Pages/TeacherPresentSection';
import GraphPage from './Pages/GraphPage';
import MainPage from './Pages/MainPage';
import RoadMap from './Pages/RoadMap';
import NotificationPage from './Pages/NotificationPage';
import ForgetPassword from './Pages/ForgetPassword'; import SelectMode from './Pages/SelectMode';
import { useReactToPrint } from "react-to-print";
import ProfileSection from './component/ProfileSection';
import ProfileEdit from './component/ProfileEdit';
function App() {
  const [profile, setProfile] = useState(false);
  const [IsLoggin, SetIsLoggin] = useState(false);
  // let loggin = localStorage.getItem("loggin")

  return (
    <>

      <Router>
        <Routes>
          <Route path='/Register' element={<Register />} />
          {
            IsLoggin ? (<Route path='/SelectMode' element={<SelectMode />} />) : (<Route path='/Login' element={<LoginPage SetIsLoggin={SetIsLoggin}/>} />)
          }
          <Route path='/ForgotPassword' element={<ForgetPassword />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/ProfileSection' element={<ProfileEdit/>} />
          <Route path='/:name' element={<UserDetail />} />
          <Route path='/AddUser' element={<StudentAdd />} />
          <Route path='/TeacherLectureSection' element={< UpComingLectureTecaherSection />} />
          <Route path='/AddLectureContainer' element={<AddLectureContainer />} />
          <Route path='/RoadMap' element={<RoadMap />} />
          <Route path='/TeacherAttendance' element={<TeacherPresentSection />} />
          <Route path='/TeacherAttendance/:Student' element={<GraphPage />} />
          <Route path='/Notification' element={<NotificationPage />} />
        </Routes>
      </Router>




      {/* <AdSection image1={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}
 
 image2={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}
 
 image3={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}/> */}

    </>
  );
}

export default App;
