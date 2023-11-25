import React, { Component } from 'react'
import Present from '../component/Present'
import BottomNavbar from '../component/BottomNavbar'

export default class StudentMap extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
        <div className="StudentContainer">
        <Present/>
        <BottomNavbar/>
        </div>
      </>
    )
  }
}
