import React, { Component } from 'react';
import UserRow from '../user/UserRow';
import axios from 'axios';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      data: 
           [
              {
                 "id":1,
                 "firstname":"Narender",
                 "lastname":"Singh",
                 "city":"Tampa"
              },
              {
                 "id":2,
                 "firstname":"Baljinder",
                 "lastname":"Sran",
                 "city":"Dallas"
              },
              {
                 "id":3,
                 "firstname":"Yashmeen",
                 "lastname":"Kaur",
                 "city":"Plano"
              }
           ]
    };
    axios.get("https://tr8k8hwxie.execute-api.us-east-2.amazonaws.com/default/ffigetinventories").then(resp=>{console.log('NARENDER SINGH',resp.data);
      this.setState({data: resp.data});
  });
  }
  
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
     <div style={{paddingTop:"100px"}} class="container">
       <div class="row"><div class="col-sm-10">&nbsp;</div></div>
       <div class="row">
 
  <div class="col-sm-12">
       
       <table class="table">
     <thead class="blue white-text">
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Inventory Name</th>
         <th scope="col">Description</th>
         <th scope="col">LOB</th>
         <th scope="col">SUBLOB</th>
       </tr>
     </thead>
     <tbody>
      {this.state.data.map((person,i) => <UserRow  key = {i} data={person}/>)}
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
