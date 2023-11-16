import React, { Component } from 'react'

export default class UserMessageContainer extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <>
       <div className="UserMessageContainer">
        <div className="UserMessageSection">
            <p>{this.props.UserMessage}</p>
        </div>
       </div>
      </>
    )
  }
}
