import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import Notification from './Notification';
import { Navigation } from 'swiper/modules';

export default class NotificationNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteAll: false,
    }
  }
  ClearAll = (event) => {
    let GetData = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
    console.log(GetData)
    let NewDataNotification = GetData.filter(item => item === ""); // Filtering based on the correct 'id'
    localStorage.setItem("AddLectureData", JSON.stringify(NewDataNotification));
    console.log("Removed the item");
    alert("Delete All the Message");
    this.setState({ deleteAll: true })
  }
  render() {
    return (
      <>
        <div className="NotificationNavbarContainer">
          <div className="NotificationNavbarSection">
            <div className="NotificationNavbar NotificationHeader">
              <div className='LogoSection'>
                <Link to="/"><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40} />
                </Link></div>
              <div className='NotificationTextSection'><h2>{this.props.NavbarValue}</h2></div>
              <div className="Clear" onClick={this.ClearAll}>
                <div className='ClearAll'><img src='./image/dust.png' alt='ClearAll' width={30} />
                </div>
                <div><h4>ClearAll</h4>
                <Navigation deleteAll={this.state.deleteAll} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
