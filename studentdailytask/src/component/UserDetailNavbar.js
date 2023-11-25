import React, { Component } from 'react'

export default class UserDetailNavbar extends Component {
  constructor(props) {
    super(props)
    this.state ={
      "UserFirstChar":"",
    }
  }
  componentDidMount = () => {
    let user = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")):[];
    this.setState({UserFirstChar:user.charAt(0)})
    }
  render() {
    return (
      <>
        <div className="UserNavbarContainer">
          <div className="UserNavbarSection">
            <div className='ProfileSection'>
              <p>{this.state.UserFirstChar}</p>
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
