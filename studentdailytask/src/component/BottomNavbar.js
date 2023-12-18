import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import MainPage from '../Pages/MainPage'

export default class BottomNavbar extends Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    return (
      <>
        <div className="BottomNavbarContainer">
          <div className="BottomNavbarSection">
            <div className="BottomNavbarBox" >
              <Link to="/">
                <div className='BottomNavbarElement'>
                  <div><img src='../../image/house.png' alt='Home' width={24}></img></div>
                  <div className='BottomNavbarTextContent'>Home</div>
                </div></Link>
            </div>
            <div className="BottomNavbarBox">
              <Link to="/TeacherLectureSection" >
                <div className='BottomNavbarElement'>
                  <div><img src='../../image/notepad.png' alt='Sedule' width={25}></img></div>
                  <div className='BottomNavbarTextContent'>Schedule</div>
                </div></Link>
            </div>

            <div className="BottomNavbarBox" >
              <Link to="/RoadMap">
                <div className='BottomNavbarElement'>
                  <div><img src='../../image/roadmap.png' alt='Road Map' width={25}></img></div>
                  <div className='BottomNavbarTextContent'>Road Map</div>
                </div></Link>
            </div>

            <div className="BottomNavbarBox">
              <Link to="/TeacherAttendance">
                <div className='BottomNavbarElement'>
                  <div><img src='../../image/verified-account.png' alt='Road Map' width={25}></img></div>
                  <div className='BottomNavbarTextContent'>Attendance</div>
                </div>
              </Link>
            </div>

            <div className="BottomNavbarBox">
              <Link to="/Notification">
                <div className='BottomNavbarElement'>
                  <div className='bell'><img src='../../image/bell.png' alt='Notification' width={22}></img><span>{this.props.Alert}</span></div>
                  <div className='BottomNavbarTextContent'>Notification</div>
                </div></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
