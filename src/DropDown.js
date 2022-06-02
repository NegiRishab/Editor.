import React, { Component } from "react";
import Tooltip from "./Tooltip";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      positon: "",
    };
  }
  handlechange = (e) => {
 
      this.setState({
          positon:e.target.value
        })
        
  };

  render() {
    
    return (
   
       <div style={{backgroundColor:'lightblue'}}>
         <div >

          <select className="custom-select" id="inputGroupSelect01" 
          style={styles}
          onChange={this.handlechange}
          >  
            <option selected value="top">top</option>
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="bottom">bottom</option>
        </select>
         </div>
        <div className="my-5">
          <Tooltip  positon={this.state.positon}/>
        </div>
            </div>
    
    );
  }
}
const styles={
    color:'blue',
          backgroundColor:'red',
          height:30,
          fontSize:19,
          fontWeight:"bold",
          borderRadius:20,
          paddingLeft:27
}