import React, { Component } from 'react';
import UserRow from '../user/UserRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/HighlightOff';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      data: 
           [
           ]
    };
    axios.get("https://tr8k8hwxie.execute-api.us-east-2.amazonaws.com/default/ffigetinventories").then(resp=>{console.log('NARENDER SINGH',resp.data);
      this.setState({data: resp.data});
  });
  }
  
  
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  updateGrid = ()=> {
    axios.get("https://tr8k8hwxie.execute-api.us-east-2.amazonaws.com/default/ffigetinventories").then(resp=>{console.log('NARENDER SINGH',resp.data);
      this.setState({data: resp.data});
  });
  }

  deleteInventory(id){
    console.log("delete record "+ id);
    axios.get("https://8pjln5f1hj.execute-api.us-east-1.amazonaws.com/manage?id="+id,this.state.inventory).then(resp=>{
      console.log('Inventory deleted Successfully',resp);
      this.updateGrid();
    });
  }

  render() {
    return (
     <div style={{paddingTop:"10px"}} class="container">
       <div class="row"><div class="col-sm-12">&nbsp;</div></div>
       <div class="row">
 
  <div class="col-sm-12" style={{height:"395px", overflow:"auto"}}>

      
       <table class="table">
     <thead class="blue white-text">
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Inventory Name</th>
         <th scope="col">Description</th>
         <th scope="col">LOB</th>
         <th scope="col">SUBLOB</th>
         <th scope="col">&nbsp;</th>
       </tr>
     </thead>
     <tbody>
      {this.state.data.map((person,i) =>  <tr style={ i % 2? { background : "#E5E7E9" }:{ background : "white" }}>
    <td>{person.id}</td>
    <td>{person.name}</td>
    <td>{person.desc}</td>
    <td>{person.lob}</td>
    <td>{person.sublob}</td>
    <td><EditIcon onClick={()=>{this.props.openEditModal(person);}}/>&nbsp;&nbsp;<DeleteIcon onClick={()=>{
      //if(window.confirm("Are you sure you want to delete?")) 
      this.deleteInventory(person.id);
      }}/> </td>
    </tr> )} 
     </tbody>
   </table>
   
   
   
   </div>
  <div class="col-sm-1"></div>
</div>
</div>
    );
  }
}

export default Home;
