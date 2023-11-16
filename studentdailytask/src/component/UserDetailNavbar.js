import React, { Component } from 'react'

export default class UserDetailNavbar extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
       <div className="UserNavbarContainer">
        <div className="UserNavbarSection">
        <div className='ProfileSection'>
            <p>{this.props.Profile}</p>
          </div>
          <div className='UserName'>
            <h3>{this.props.UserName}</h3>
          </div>
        </div>
        </div> 
      </>
    )
  }
}
