import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import AdSection from './component/AdSection';
import StudentAdd from './component/StudentAdd';
// import Login from './Pages/Login';
import SelectMode from './Pages/SelectMode';
import UpComingLecture from './component/UpComingLecture';
import UpComingLecturePage from './Pages/UpComingLecturePage';
import LoginPage from './Pages/Login';
import Layout from './Pages/Layout';
import { useState } from 'react';
import AddLectureContainer from './Pages/AddLectureContainer';
import UpComingLectureTecaherSection from './Pages/UpComingLectureTecaherSection';
import BottomNavbar from './component/BottomNavbar';
import MainPage from './Pages/MainPage';
import RoadMap from './Pages/RoadMap';
//  import RoadMap from './component/RoadMap';
import NotificationPage from './Pages/NotificationPage';
import ForgetPassword from './Pages/ForgetPassword';
import RecoveryPassword from './Pages/RecoveryPassword';
import UserDetail from './Pages/UserDetail';
import AddTextSection from './component/AddTextSection';
import NavBar from './component/NavBar';
import StudentsList from './component/StudentsList';
import ProfileSection from './component/ProfileSection';
import ProfileEdit from './component/ProfileEdit';
import Notification from './component/Notification';
import Present from './component/Present';
import StudentTable from './component/StudentTable';
import TeacherPresentSection from './Pages/TeacherPresentSection';
import StudentListPresenty from './component/StudentListPresenty';
import NotificationNavbar from './component/NotificationNavbar';
import CircularProgress from './component/CircularProgress';
import AbsentProgressBar from './component/AbsentProgressBar';
import MapSection from './Pages/MapSection';
import GraphPage from './Pages/GraphPage';
import StudentMap from './Pages/StudentMap';
import CourseDropdown from './component/RoadMapData';
import Layout2 from './Pages/Layout2';

function App() {
  const [profile, setProfile] = useState(false)
  const [ISloggin, setLoggin] = useState(false)
  let loggin = localStorage.getItem("loggin")
  return (
    <>
      {/* <Notification/> */}
      {/* <ProfileSection/> */}
      {/* <Register/> */}
      {/* <LoginPage/> */}
      {/* <Layout>{
   loggin==1?<SelectMode/>:<LoginPage setLoggin={setLoggin}/>
    } 
    </Layout>  */}
      {/* <ForgetPassword/> */}
      {/* <RecoveryPassword/> */}
      {/* <SelectMode/> */}
      {/* <MainPage/> */}
      {/* <StudentAdd/> */}
      {/* <UserDetail/> */}
      {/* <UpComingLecturePage /> */}
      {/* <UpComingLectureTecaherSection/> */}
      {/* <AddLectureContainer/> */}
      {/* <ProfileEdit/> */}
      {/* <NotificationPage/>  */}
       {/* <RoadMap/> */}
        {/* <Present/> */}
        {/* <StudentTable/> */}
      {/* <TeacherPresentSection/> */}
    {/* <StudentListPresenty/> */}
    {/* <NotificationNavbar/> */}
    {/* <CircularProgress/> */}
    {/* <AbsentProgressBar/> */}
    {/* <MapSection/> */}
    {/* <GraphPage/> */}
    {/* <StudentMap/> */}
    {/* <CourseDropdown/> */}



      {/* <StudentsList/> */}
      {/* <h1>hello</h1> */}
      {/* <Router>
        <Routes>
          <Route index element={<MainPage/>}></Route>
          <Route path='Login' element={<LoginPage/>}></Route>
          <Route  element={<MainPage/>}></Route>
          {/* <Route path='./Pages/MainPage' element={<h1>Error Page</h1>} />
          <Route></Route> */}
      {/* </Routes>
      </Router> */}
      {/* <RecoveryPassword/> */}
      {/* <ForgetPassword/> */}
      {/* <NotificationPage/> */}
      {/* <RoadMap/> */}
      {/* <StudentAdd/> */}

      {/* <BottomNavbar/> */}
      {/* <AddLectureContainer/> */}
      {/* <Layout>{
   loggin==1?<SelectMode/>:<LoginPage setLoggin={setLoggin}/>
    }
    </Layout> */}
      {/* <Register/> */}
      {/* <LoginPage/> */}
      {/* <AddTextSection/> */}

      {/* <RecoveryPassword/> */}
      {/* <ForgetPassword/> */}
      {/* <AddLectureContainer/> */}
      {/* <UpComingLectureTecaherSection/> */}
      {/* <LoginPage/> */}
      {/* <StudentAdd/> */}
      {/* <UpComingLecturePage /> */}
      {/* <UpComingLecture Date={"12/11/23"} Instructor={"Munaf Haji"} Topic={"HTML"}/> */}
      {/* <StudentAdd/> */}
      {/* 
    */}
      {/* <NavBar Profile={"P"}/> */}

      {/* <AdSection image1={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}
 
 image2={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}
 
 image3={"https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-19T160559Z_674009644_UP1EJAJ18GW6J_RTRMADP_3_CRICKET-WORLDCUP-IND-BGD-1697801837.jpg?resize=770%2C513&quality=80"}/> */}
 
{/* <Layout2>
  </Layout2> */}

  <Router>
 <Routes>
  <Route path='/Register' element={<Register />}/>
  <Route path='/Login' element={<LoginPage />}/>
  <Route path='/ForgotPassword' element={<ForgetPassword/>}/>
  <Route path='/' element={<MainPage />}/>
  <Route path='/AddUser' element={<StudentAdd/>} />
  <Route path='/TeacherLectureSection' element={< UpComingLectureTecaherSection/>}/>
  <Route path='/AddLectureContainer' element={<AddLectureContainer/>}/>
  <Route path='/RoadMap' element={<RoadMap/>}/>
  <Route path='/TeacherAttendance' element={<TeacherPresentSection/>}/>
  <Route path='/Notification' element={<NotificationPage/>}/>


 </Routes>
 </Router> 
    </>
  );
}

export default App;
