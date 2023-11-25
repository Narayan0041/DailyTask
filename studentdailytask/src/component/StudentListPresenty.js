import React, { Component } from 'react'
import Present from './Present';

export default class StudentListPresenty extends Component {
  constructor(props) {
    super(props)
  }
  ClickTheProfile = (event) => {
  alert(event)
  const storageKey ="GetResultInMapPresent";
  if(storageKey){
    let StudentAttendancePresent = localStorage.getItem(storageKey);
    StudentAttendancePresent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
    StudentAttendancePresent.push(`${this.props.StudentName}-Present`);
    localStorage.setItem(storageKey, JSON.stringify(StudentAttendancePresent));
  }
  let StudentAttendanceAbsent =localStorage.getItem("GetResultInMapAbsent") ? JSON.parse(localStorage.getItem("GetResultInMapAbsent")) :[]
     StudentAttendanceAbsent.push(`${this.props.StudentName}-Absent`);
     localStorage.setItem("GetResultInMapAbsent",JSON.stringify(StudentAttendanceAbsent))

    //  let GetPaticularStudentData =localStorage.getItem(`${this.props.StudentName}`) ? JSON.parse(localStorage.getItem(`${this.props.StudentName}`)) :[];
    //  GetPaticularStudentData.push();
    //  localStorage.setItem()
  }
  
  HandleClickPresent = (event,key) => {
    event.stopPropagation();
    alert(`Marked present for key: ${key}`);
    const storageKey = `${this.props.StudentName}-Present`;
  let StudentAttendancePresent = localStorage.getItem(storageKey);
  StudentAttendancePresent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
  StudentAttendancePresent.push("Present");
  localStorage.setItem(storageKey, JSON.stringify(StudentAttendancePresent));

  };

  HandleClickAbsent = (event,key) => {
    event.stopPropagation();
    alert(`Marked absent for key: ${key}`);
    const storageKey = `${this.props.StudentName}-Absent`;
    let StudentAttendancePresent = localStorage.getItem(storageKey);
    StudentAttendancePresent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
    StudentAttendancePresent.push("Absent");
    localStorage.setItem(storageKey, JSON.stringify(StudentAttendancePresent));
  };
  render() {
    return (
      <>
        <div className="StudentListSection">
          <div className="StudentListContainer">
            <div className="StudentBoxss" onClick={() => { this.ClickTheProfile(`${this.props.StudentName}-Present`) }}>
              <div className="StudentTextSection">
              <div className='StudentProfile'>{this.props.ProfileName}</div>
              <div className='StudentName'>{this.props.StudentName}</div>
              </div>
              <div className='Attendance'>
                <div className='AttendanceButton' onClick={(event) =>{ this.HandleClickPresent(event,"Present")}}>P</div>
                <div className='AttendanceButton' onClick={(event) =>{ this.HandleClickAbsent(event,"Absent")}}>A</div>
              </div>
            </div>
            <div className='BreakPoint'></div>
          </div>
        </div>
      </>
    )
  }
}
