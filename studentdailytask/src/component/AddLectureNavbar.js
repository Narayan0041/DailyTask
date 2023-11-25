import React, { Component } from 'react'
export default class AddLectureNavbar extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <div className="PresentContainer">
        <div className="PresentSection">
            <div className='AddLectureNavbar'>
                <div><img src='./image/report-analysis.png' alt='logo' width={30}></img></div>
                <div className='AddLectureNavbarTextSection'><h2>{this.props.Title}</h2></div>
            </div>
        </div>
       </div>
      </>
    )
  }
}
