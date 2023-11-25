import React, { Component } from 'react'
import AddLectureNavbar from './AddLectureNavbar';

export default class StudentAdd extends Component {
  constructor() {
    super();
    this.state = {
      "StudentName": "",
      "StudentEmail": "",
      "Course": "",
      "Instructor": "",
      "Batchs": ""
    }
  }
  ChangeInput = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  handleSubmit = () => {
    let { StudentName, StudentEmail, Course, Instructor, Batch } = this.state
    let StudentAddData = localStorage.getItem("StudentAddData") ? JSON.parse(localStorage.getItem("StudentAddData")) : [];
    StudentAddData.push({ "StudentName": StudentName, "StudentCourse": Course, "Instructor": Instructor, "Batch": Batch })
    let StudentAddDataInString = JSON.stringify(StudentAddData);
    localStorage.setItem("StudentAddData", StudentAddDataInString)
    alert("Detail fill SuccessFully!!");
    this.setState({
      "StudentName": "",
      "StudentEmail": "",
      "Course": "", // Resetting Course to an empty value
      "Instructor": "", // Resetting Instructor to an empty value
      "Batch": "" // Resetting Batch to an empty value
    });
  }
  render() {
    return (
      <>
        <div className="StudentAddSection">
          <AddLectureNavbar />
          <div className="StudentAddContainer">
            <div className="StudentAdd">
              <h2>Add Student</h2>
              <img src='./image/user.png' width={60} />
              <div className="StudentAddInputSection">
                <div>
                  <label htmlFor='StudentName'>Student Name</label>
                  <input type='text' id='StudentName' placeholder='Enter Student Name' value={this.state.StudentName} autoFocus onChange={(event) => { this.ChangeInput(event, "StudentName") }} />
                </div>
                <div className='course'>
                  <label htmlFor="course">Choose a Course:</label>
                  <select id="course" name="course" onChange={(event) => { this.ChangeInput(event, "Course") }}>
                    <option value={this.state.Course}>Choose a Course</option>
                    <option value="Front End (ReactJS)">Front End (With React JS)</option>
                    <option value="Front ENd(BackEnd) ">BackEnd</option>
                    <option value="Python">Python</option>
                    <option value="FullStack">Full Stack</option>
                  </select>
                </div>
                <div className='Instructor'>
                  <label htmlFor="Instructor">Choose a Instructor :</label>
                  <select id="Instructor" name="Instructor" onChange={(event) => { this.ChangeInput(event, "Instructor") }}>
                    <option value={this.state.Instructor}>Choose a Instructor</option>
                    <option value="Munaf Haji">Munaf Haji</option>
                    <option value="Amir Shaikh">Amir Shaikh</option>
                    <option value="Sohail">Sohail</option>
                  </select>
                </div>
                <div className='Batch'>
                  <label htmlFor="batch">Choose a Batch :</label>
                  <select id="batch" name="batch"  onChange={(event) => { this.ChangeInput(event, "Batch") }}>
                    <option value={this.state.Batchs}>Choose a Batch</option>
                    <option value="2023 (Jan-April)">2023 (Jan-April)</option>
                    <option value="2023 (May-August)">2023 (May-August)</option>
                    <option value="2023 (Sep -Dec)">2023 (Sep -Dec)</option>
                  </select>
                </div>
                <button className='Submit' onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
