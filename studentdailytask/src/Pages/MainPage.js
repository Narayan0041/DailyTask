import React, { Component } from 'react'
import NavBar from '../component/NavBar';
import StudentsList from '../component/StudentsList';
import AdSection from "../component/AdSection"
import BottomNavbar from '../component/BottomNavbar';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "StudentDataLists": [],
    }
  }

  componentDidMount = () => {
    let GetStudentData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
    if (GetStudentData) {
      this.setState({ StudentDataLists: GetStudentData })
    }
    // for (let i = 0; i < GetStudentData.length; i++) {
    //   let SName = GetStudentData[i].StudentName;
    //   let firstChar = SName.charAt(0);
    //   this.setState({ FirstChar: firstChar })
    // }
  }
  render() {
    return (
      <div>
        <NavBar Profile={"S"} />
        <div className="StudentDataList">
          {
            this.state.StudentDataLists.map((value, item) => {
              return (
                // <StudentsList ProfileName={"S"} key={item} StudentName={value.StudentName} StudentEmail={value.StudentEmail}/>
                 <StudentsList ProfileName={"S"} key={item} StudentName={value.StudentName}/>
                )
            })
          }
        </div>

        <div className="AddUserSection">
          <button><span className="fa-solid fa-user-plus"></span> Add Customer</button>
        </div>
        <BottomNavbar Alert={10}/>
      </div>
    )
  }
}
