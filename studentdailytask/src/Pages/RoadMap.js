import React, { Component } from 'react'
import BottomNavbar from '../component/BottomNavbar'
import RoadMapNavbar from '../component/RoadMapNavbar'
import CourseDropdown from '../component/RoadMapData'

export default class RoadMap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="RoadMapConatiner">
                    <div className="RoadMapSection">
                        <div>
                           <RoadMapNavbar NavbarValue={"Road Map"}/>
                        </div>
                        <div className='RoadMapContainer'>
                       <CourseDropdown/>
                        </div>
                        <div>
                            <BottomNavbar />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
