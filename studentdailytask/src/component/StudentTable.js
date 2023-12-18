import React, { useState, useEffect } from 'react';
import StudentsList from './StudentsList';
import StudentListPresenty from './StudentListPresenty';

const StudentTable = React.forwardRef((props,ref) => {
    const [studentDataLists, setStudentDataLists] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const getStudentData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
        if (getStudentData.length > 0) {
            setStudentDataLists(getStudentData);
            const firstChars = getStudentData.map(user => user.StudentName.charAt(0).toUpperCase());
            setUserList(firstChars);
        }
    }, []);

    return (
        <div ref={ref}>
            <div className="StudentDataListContainer">
                <div className="StudentDataListSection">
                    {studentDataLists.map((value, index) => (
                        <StudentListPresenty
                            key={index}
                            ProfileName={userList[index]}
                            StudentName={value.StudentName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default StudentTable;






















// import React, { Component } from 'react'
// import StudentsList from './StudentsList';
// import StudentListPresenty from './StudentListPresenty';

// export default class StudentTable extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "StudentDataLists": [],
//             "UserList":[]
//         }
//     }
//     componentDidMount = () => {
//         let GetStudentData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
//         if (GetStudentData) {
//             this.setState({ StudentDataLists: GetStudentData })
//         }
//         const firstChars = GetStudentData.map(user => user.StudentName.charAt(0).toUpperCase());
//         this.setState({ UserList: firstChars });
//     }
//     render() {
//         return (
//             <>
//                 <div className="StudentDataListContainer">
//                     <div className="StudentDataListSection">
//                         {
//                             this.state.StudentDataLists.map((value, item) => {
//                                 return (
//                                    <StudentListPresenty ProfileName={this.state.UserList[item]} Key={item} StudentName={value.StudentName} />
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
