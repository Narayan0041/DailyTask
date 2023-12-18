import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RoadMapNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // "FrontEnd": "",
      // "BackEnd": "",
      // "FullStack": "",
      // "Python": ""
      activeButton: 'FrontEnd',
    }
  }
  ClickButton = (event) => {
    let GetData = document.querySelector(`.${event}`);
    if (GetData) {
      alert(event)
      GetData.classList.toggle("active")
    }
    this.setState({ activeButton: event });
    alert(event)
  }
  ClickMenuButton = () => {
    let MenuButton = document.querySelector(".MenuNavbar")
    if (MenuButton) {
      MenuButton.classList.toggle("active")
    }
  }
  render() {
    const { activeButton } = this.state;
    return (
      <>
        <div className="NotificationNavbarContainer">
          <div className="NotificationNavbarSection">
            <div className="NotificationNavbar RoadMapNavbar">
              <div className='LogoSection'>
                <Link to="/"><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40} /></Link></div>
              <div className='NotificationTextSection RoadMapTextSection'><h2>{this.props.NavbarValue}</h2></div>
            </div>
            {/* <div className="NavbarMenuSection">
              <div className="Menu" onClick={this.ClickMenuButton}><span class="fa-solid fa-bars"></span></div>
                <div className='MenuNavbar'>
                <ul>
                  <li>FrontEnd</li>
                  <li>BackEnd</li>
                  <li>FullStack</li>
                  <li>Python</li>
                </ul>
                </div>
              <div className={activeButton === 'FrontEnd' ? 'active' : 'button'} onClick={() => this.ClickButton("FrontEnd")}>FrontEnd</div>
              <div className={activeButton === 'BackEnd' ? 'active' : 'button'} onClick={() => this.ClickButton("BackEnd")}>BackEnd</div>
              <div className={activeButton === 'FullStack' ? 'active' : 'button'} onClick={() => this.ClickButton("FullStack")}>FullStack</div>
              <div className={activeButton === 'Python' ? 'active' : 'button'} onClick={() => this.ClickButton("Python")} >Python</div>
            </div> */}
          </div>
        </div>
      </>
    )
  }
}
