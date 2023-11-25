import React, { Component } from 'react'

export default class UserMessageContainer extends Component {
    constructor(props){
        super(props);
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
