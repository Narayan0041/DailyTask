import React, { Component } from 'react'
import BottomNavbar from '../component/BottomNavbar'

export default class Layout2 extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        {this.props.children}
        <BottomNavbar/>
      </div>
    )
  }
}
