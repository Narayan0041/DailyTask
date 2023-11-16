import React, { Component } from 'react'

export default class BottomNavbar extends Component {
  constructor(props) {
    super(props)
  }
  HandleClick = () => {
    // alert("click hua")
  }

  render() {
    return (
      <>
        <div className="BottomNavbarContainer">
          <div className="BottomNavbarSection">
            <div className="BottomNavbarBox" onClick={this.HandleClick}>
              <div><img src='./image/house.png' alt='Home' width={22}></img></div>
              <div className='BottomNavbarTextContent'>Home</div>
            </div>
            <div className="BottomNavbarBox" onClick={this.HandleClick}>
              <div><img src='./image/notepad.png' alt='Sedule' width={22}></img></div>
              <div className='BottomNavbarTextContent'>Schedule</div>
            </div>
            <div className="BottomNavbarBox" onClick={this.HandleClick}>
              <div><img src='./image/success.png' alt='Road Map' width={25}></img></div>
              <div className='BottomNavbarTextContent'>Road Map</div>
            </div>
            <div className="BottomNavbarBox" onClick={this.HandleClick}>
              <div className='bell'><img src='./image/bell.png' alt='Notification' width={22}></img><span>{this.props.Alert}</span></div>
              <div className='BottomNavbarTextContent'>Notification</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
