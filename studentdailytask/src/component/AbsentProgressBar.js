import React, { Component } from 'react'

export default class AbsentProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0,
      offset: 251.2, // Full circle
    };
  }
  componentDidMount() {
    // const storageKey = `${this.props.StudentName}-Present`;
    let ShowPaticularData = localStorage.getItem("GetResultInMapPresent") ? JSON.parse(localStorage.getItem("GetResultInMapPresent")) : [];
    let GetCount = localStorage.getItem(ShowPaticularData) ? JSON.parse(localStorage.getItem(ShowPaticularData)) : [];
    let NoOfPresent = GetCount.length;
    let StudentAttendancePresent = localStorage.getItem("GetResultInMapAbsent");
    let PaticularAbsent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
    let GetCountAbsent = localStorage.getItem(PaticularAbsent) ? JSON.parse(localStorage.getItem(PaticularAbsent)) : [];
    let NoOfAbsent = GetCountAbsent.length
    let NoOFBoth = NoOfPresent + NoOfAbsent
    // Calculate percentage based on the length of StudentAttendancePresent array
    const newPercentage = Math.floor((NoOfAbsent / NoOFBoth) * 100) || 0; // MAX_ATTENDANCE_COUNT is the maximum possible attendance count
    const progressOffset = ((100 - newPercentage) / 100) * 251.2;
    this.setState({
      percentage: newPercentage,
      offset: progressOffset,
    });
  }
  render() {
    return (
      <>
        <div>
          <svg className="progress-ring" width="80" height="80">
            <circle
              className="progress-ring__circle"
              stroke="#ccc"
              strokeWidth="4"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
            <circle
              className="progress-ring__circle"
              stroke="#ff0000"
              strokeWidth="4"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              style={{
                strokeDasharray: 251.2,
                strokeDashoffset: this.state.offset,
                transition: 'stroke-dashoffset 0.5s ease 0s',
              }}
            />
            <text x="50%" y="50%" textAnchor="middle" fontSize="16" fill="#000">
              {this.state.percentage}%
            </text>
          </svg>
        </div>

      </>
    )
  }
}






