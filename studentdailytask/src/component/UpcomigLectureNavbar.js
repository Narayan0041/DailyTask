import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                    <div className='LogoSection'>
                      <Link to="/"><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40}/>
                      </Link></div>
                    <div className='NotificationTextSectionss'><h2>{this.props.NavbarValue}</h2></div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
