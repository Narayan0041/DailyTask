import React, { Component } from 'react'
import "../App.css"

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      "Search":""
    }
  }
  HandleSearch=(event,key)=>{
   this.setState({[key]:event.target.value})
  }
  render() {
    return (
      <>
        <div className='Navbar'>
          <div className='LogoSection'>
            <img src='./image/report-analysis.png' alt='Logo' width={38} />
          </div>
          <div className='SearchSection'>
          <span className="fa-solid fa-magnifying-glass"></span><input type='search' placeholder='Search User' onChange={(event)=>{this.HandleSearch(event,"Search")}} />
          </div>
          <div className='ProfileSection'>
            <p>{this.props.Profile}</p>
          </div>

        </div>

      </>


    )
  }
}
