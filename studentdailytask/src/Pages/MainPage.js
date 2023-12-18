import React, { Component } from 'react'
import NavBar from '../component/NavBar';
import StudentsList from '../component/StudentsList';
import AdSection from "../component/AdSection"
import BottomNavbar from '../component/BottomNavbar';
import ProfileSection from '../component/ProfileSection';
import { Link } from 'react-router-dom';
import StudentAdd from '../component/StudentAdd';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "StudentDataLists": [],
      "LoginUserCharFirst": "",
      "UserList": [],
      "NoOfAlert":"",
    }
  }

  componentDidMount = () => {
    let GetStudentData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
    if (GetStudentData) {
      this.setState({ StudentDataLists: GetStudentData })
    }
    const firstChars = GetStudentData.map(user => user.StudentName.charAt(0).toUpperCase());
    this.setState({ UserList: firstChars });

    let LoginUser = localStorage.getItem("LogginUserDetail") ? JSON.parse(localStorage.getItem("LogginUserDetail")) : [];
    if (LoginUser) {
      let userProfile = LoginUser.find((user) => {
        this.setState({ LoginUserCharFirst: user.Name.charAt(0) })
      })
    }
    let NoOfLecture = localStorage.getItem("AddNotification") ? JSON.parse(localStorage.getItem("AddNotification")) : [];
    if(NoOfLecture){
      this.setState({NoOfAlert:NoOfLecture.length})
     }
  }
  render() {
    return (
      <div>
        <NavBar Profile={this.state.LoginUserCharFirst} />
        <div className="StudentDataList">
          {
            this.state.StudentDataLists.map((value, item) => {
              return (
                <StudentsList ProfileName={this.state.UserList[item]} key={item} index={item} StudentName={value.StudentName} />
              )
            })
          }
        </div>

        <div className="AddUserSection">
          <Link to="/AddUser" element={<StudentAdd/>}>
          <button><span className="fa-solid fa-user-plus"></span> Add User</button>
          </Link>
        </div>
        <BottomNavbar Alert={this.state.NoOfAlert} />
        <div className='ProfileContainer'>
          <ProfileSection />
        </div>
      </div>
    )
  }
}
