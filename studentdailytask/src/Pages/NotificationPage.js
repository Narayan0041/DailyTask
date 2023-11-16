import React, { Component } from 'react'
import NavBar from '../component/NavBar'
import BottomNavbar from '../component/BottomNavbar'

export default class NotificationPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="NotificationPageContainer">
                    <div className="NotificationPageSection">
                        <div>
                            <NavBar />
                        </div>
                        <div className='NotificationDisplayContainer'>
                            <h1>Notification</h1>
                            <div className='NotificationList'>
                                <div className="NotificationBox">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus laudantium atque voluptatem est? Ad pariatur quisquam nulla doloribus veritatis sit iure inventore.</p>
                                </div>
                                <div className="NotificationBox">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus laudantium atque voluptatem est? Ad pariatur quisquam nulla doloribus veritatis sit iure inventore.</p>
                                </div>
                                <div className="NotificationBox">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem delectus laudantium atque voluptatem est? Ad pariatur quisquam nulla doloribus veritatis sit iure inventore.</p>
                                </div>
                            </div>
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
