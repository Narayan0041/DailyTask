import React, { Component } from 'react'

export default class RoadMap extends Component {
    constructor(props) {
        super(props)
        this.state ={
            "FrontEnd":"",
        }
    }
    Select =(event ,key)=>{
        const selectedValue = event.target.value;
      this.setState({key:selectedValue},console.log(selectedValue))
    }
    render() {
        return (
            <>
                <div className="RoadMainTextContainer">
                    <div className="RoadMapTextSection">
                        <div>
                        <h1>Road Map:</h1>
                        <label htmlFor="cars">Front End Developer:</label>
                        <select name="FrontEnd Developer" value={this.state.FrontEnd} id="FrontEndDeveloper" onChange={(event)=>{this.Select(event ,"FrontEnd")}}>
                            <option value="">Select</option>
                            <option value="Html">Html</option>
                            <option value="Css">Css</option>
                            <option value="Javascript">Javascript</option>
                        </select>
                        </div>
                        <div className='Result'>
                            <p>{this.state.FrontEnd}</p> 
                    
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
