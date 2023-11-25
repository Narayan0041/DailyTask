import React, { Component } from 'react'
import Present from '../component/Present'
import BottomNavbar from '../component/BottomNavbar'
import MapSection from './MapSection'
export default class GraphPage extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <Present/>
        <MapSection/>
        <BottomNavbar/>
      </div>
    )
  }
}
