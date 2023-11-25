import React, { Component } from 'react'
import StudentsList from './StudentsList';
import StudentListPresenty from './StudentListPresenty';

export default class StudentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "StudentDataLists": [],
            "UserList":[]
        }
    }
    componentDidMount = () => {
        let GetStudentData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
        if (GetStudentData) {
            this.setState({ StudentDataLists: GetStudentData })
        }
        const firstChars = GetStudentData.map(user => user.StudentName.charAt(0).toUpperCase());
        this.setState({ UserList: firstChars });
    }
    render() {
        return (
            <>
                <div className="StudentDataListContainer">
                    <div className="StudentDataListSection">
                        {
                            this.state.StudentDataLists.map((value, item) => {
                                return (
                                   <StudentListPresenty ProfileName={this.state.UserList[item]} Key={item} StudentName={value.StudentName} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
