import React, { Component } from 'react'

export default class NotificationNavbar extends Component {
  constructor(props) {
    super(props)
  }
  ClearAll=(event)=>{
    let GetData = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
    console.log(GetData)
         let NewDataNotification = GetData.filter(item => item ==="" ); // Filtering based on the correct 'id'
        localStorage.setItem("AddLectureData", JSON.stringify(NewDataNotification));
        console.log("Removed the item");
        alert("Item removed");
        window.location.reload()
  }
  render() {
    return (
      <>
        <div className="NotificationNavbarContainer">
          <div className="NotificationNavbarSection">
            <div className="NotificationNavbar NotificationHeader">
              <div className='LogoSection'><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40} /></div>
              <div className='NotificationTextSection'><h2>{this.props.NavbarValue}</h2></div>
              <div className="Clear" onClick={this.ClearAll}>
              <div className='ClearAll'><img src='./image/dust.png' alt='ClearAll' width={30} />
                </div>
                <div><h4>ClearAll</h4>
                </div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
