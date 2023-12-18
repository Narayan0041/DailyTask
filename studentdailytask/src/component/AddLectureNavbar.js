import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AddLectureNavbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className="PresentContainer">
          <div className="PresentSection">
            <div className='AddLectureNavbar'>
              <div>
                <Link to="/"><img src='./image/report-analysis.png' alt='logo' width={40}></img>
                </Link></div>
              <div className='AddLectureNavbarTextSection'><h2>{this.props.Title}</h2></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
