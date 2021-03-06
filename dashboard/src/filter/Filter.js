import React, { Component } from 'react';
import axios from 'axios';

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      businessEntities : [],
      legalEntities : []
    };
    axios.get("https://1y6np4k375.execute-api.us-east-2.amazonaws.com/default/ffi-redis-lambda-2?key=legalEntities")
    .then(resp => {
    	console.log("Redis Legal Entities" ,JSON.parse(resp.data));
    	this.setState({"legalEntities":JSON.parse(resp.data)});
    });
     axios.get("https://1y6np4k375.execute-api.us-east-2.amazonaws.com/default/ffi-redis-lambda-2?key=businessEntities")
    .then(resp => {
    	console.log("Redis Business Entities" ,JSON.parse(resp.data));
    	this.setState({"businessEntities":JSON.parse(resp.data)});
    });
  }

  render() {
    return (
    <div className="container" style={{paddingTop:"20px"}}>
    <div class="card">

 		<h9 class="card-header blue white-text text-center">
    		<strong>Filter</strong>
  		</h9>
		<div className="row mx-md-n5">
		  <div className="col py-1 px-md-5 bordered col-example">
		  	 <label className="mdb-main-label">Business Entity</label>
			<select class="mdb-select" searchable="Search here.." style={{marginLeft: "15px"}}>
			  <option value="" disabled selected>Select your Business Entity</option>
			  	{this.state.businessEntities.map((optionName,i) => <option value={i}> {optionName} </option> ) }
			</select>
		  </div>
		  <div className="col py-1 px-md-5 bordered col-example">
		  	 <label className="mdb-main-label">Legal Entity</label>
			<select class="mdb-select" searchable="Search here.."  style={{marginLeft: "15px"}}>
			  <option value="" disabled selected>Select your Legal Entity</option>
			  	{this.state.legalEntities.map((optionName,i) => <option value={i}> {optionName} </option> ) }
			</select>
		  </div>
		</div>
		</div>
	</div>
    );
  }
}

export default Filter;
