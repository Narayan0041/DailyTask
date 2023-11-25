import React, { Component } from 'react'

export default class UpcomigLectureNavbar extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <div className="NotificationNavbarContainer">
            <div className="NotificationNavbarSection">
                <div className="NotificationNavbar">
                    <div className='LogoSection'><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40}/></div>
                    <div className='NotificationTextSectionss'><h2>{this.props.NavbarValue}</h2></div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
