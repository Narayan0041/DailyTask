import React, { Component } from 'react'
import Present from '../component/Present'
import StudentTable from '../component/StudentTable'
import BottomNavbar from '../component/BottomNavbar'
import MapSection from './MapSection'

export default class TeacherPresentSection extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <Present/>
        <StudentTable/>
        <BottomNavbar/>
      </div>
    )
  }
}
