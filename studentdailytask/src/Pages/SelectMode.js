import React, { Component } from 'react'

export default class SelectMode extends Component {
    constructor() {
        super();
    }
    SelectModeClick = (value) => {
        localStorage.setItem("SelectMode",value)
        alert(value)
    }
    render() {
        return (
            <>
                <div className="SelectModeContainer">
                    <div className="MainContainer">
                        <div className="SelectModeHeader">
                            <h2>Select Mode</h2>
                        </div>
                        <div className='ModeSection'>
                            <div className='TeacherSection RoleBox' onClick={()=>{ this.SelectModeClick("Teacher")}}>
                                <h1>Teacher</h1>
                                <p className='UnderLine'></p>
                                <p>For Teacher  Role here , Click to do Your Work </p>
                                <span className='RoleIcon'>
                                    <img src='./image/teacher.png' width={60} alt='Teacher'></img>
                                </span>
                            </div>
                            <div className='StudentSection RoleBox' onClick={()=>{ this.SelectModeClick("Student")}}>
                                <h1>Student</h1>
                                <p className='UnderLine'></p>
                                <p>For Student  Role here , Click to do Your Work </p>
                                <span className='RoleIcon'>
                                    <img src='./image/read.png' width={60} alt='Student'></img>
                                </span>
                            </div>
                            <div className='OtherSection RoleBox' onClick={()=>{ this.SelectModeClick("Other")}}> 
                                <h1>Other</h1>
                                <p className='UnderLine'></p>
                                <p>For Teacher  Role here , Click to do Your Work </p>
                                <span className='RoleIcon'>
                                    <img src='./image/man.png' width={60} alt='OtherImage'></img>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
