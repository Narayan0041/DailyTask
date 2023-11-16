import React, { Component } from 'react'
import NavBar from '../component/NavBar'
import BottomNavbar from '../component/BottomNavbar'

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
                            <NavBar />
                        </div>
                        <div className='RoadMapContainer'>
                            <h1>ROad Map</h1>
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
