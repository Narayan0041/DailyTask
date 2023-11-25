import React, { Component } from 'react'
import AddLectureNavbar from '../component/AddLectureNavbar'
export default class AddLectureContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Date: "",
      Day: "",
      TextArea: ""

    }

  }
  // Bind the event handler method to the class instance
  ChangeDate = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  ChangeDay = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  ChangeText = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  Submit = () => {
    let { Date, Day, TextArea } = this.state
    // Generate id based on the current length of AddLectureData
    let AddLectureData = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
    let id = AddLectureData.length + 1;
    AddLectureData.push({ id, "Date": Date, "Day": Day, "TextArea": TextArea })
    localStorage.setItem("AddLectureData", JSON.stringify(AddLectureData))
    alert("Add Lecture SuccessFully!!")

    let AddNotification = localStorage.getItem("AddNotification") ? JSON.parse(localStorage.getItem("AddNotification")) : []; // Parse if it exists in localStorage 
    AddNotification.push(Date);
    localStorage.setItem("AddNotification", JSON.stringify(AddNotification));

  }

  render() {
    return (
      <>
        <div className="AddLectureSection">
          <div>
            <AddLectureNavbar  Title={"Add Lecture"} />
          </div>
          <div className="AddLectureContainer">
            <h1>Add Your Lecture</h1>
            <img src='./image/notepad.png' alt='AddLectureImage' width={60} />
            <div className="AddLectureInputSection">
              <div>
                <label htmlFor='Select Date'>Select Date:</label>
                <input type='date' id='date' value={this.state.Date} onChange={(event) => { this.ChangeDate(event, "Date") }} />
              </div>
              <div className="WeakDays">
                <label htmlFor='WeakDays'>Select Day:</label>
                <select name="Todays_Day" value={this.state.Day} onChange={(event) => { this.ChangeDay(event, "Day") }}>
                  <option value="" selected>Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <textarea id='text' placeholder='Enter the lecture here...' rows={4} cols={30} onChange={(event) => { this.ChangeText(event, "TextArea") }} />
              <button className='Submit' onClick={this.Submit}>Submit</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
