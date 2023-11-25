import React, { Component } from 'react'

export default class SelectModeNavbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="NotificationNavbarContainer">
                    <div className="NotificationNavbarSection">
                        <div className="SelectModeNavbar">
                            <div className='LogoSection'><img src='./image/report-analysis.png' alt='NavbBarLogo' width={40} /></div>
                            <div className='SelectModeTextSection'><h3>{this.props.NavbarValue}</h3></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
