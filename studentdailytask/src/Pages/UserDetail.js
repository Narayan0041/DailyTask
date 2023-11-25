import React, { Component } from 'react'
import UserDetailNavbar from '../component/UserDetailNavbar'
import UserMessageContainer from '../component/UserMessageContainer'
import AddTextSection from '../component/AddTextSection'

export default class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "UserPaticularData": [],
      "PaticulatUserName": ""
    }
    // textUpdate = {
    //   "TextValue": false
    // }
  }
  componentDidMount = () => {

    let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
    if (GetClickPaticularUser) {
      this.setState({ PaticulatUserName: GetClickPaticularUser })
    }
    let UserDetailAdd=  localStorage.getItem(`${GetClickPaticularUser}`) ? JSON.parse(localStorage.getItem(`${GetClickPaticularUser}`)) :[];
    if (UserDetailAdd) {
      this.setState({ UserPaticularData: UserDetailAdd })
    }
    
  }
 
  render() {
    return (
      <>
        <div className="UserDetailContainer">
          <div className="UserDetailSection">
            <UserDetailNavbar  UserName={this.state.PaticulatUserName} />
            {/* delted Profile={"S"} */}
            <div className="DisplaySection">
              {
                this.state.UserPaticularData.map((value, index) => {
                  return (
                    <UserMessageContainer key={index} UserMessage={value} />
                  )
                })
              }
              <div className='Empty'>
                <p>{this.props.EmptyResult}</p>
              </div>
            </div>
            <div>
              <AddTextSection />
            </div>
          </div>
        </div>
      </>
    )
  }
}
