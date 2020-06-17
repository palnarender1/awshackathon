import React, { Component } from 'react';
import UserRow from '../user/UserRow';

class Home extends Component {
  state = {
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
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
     <div class="container">
       <div class="row"><div class="col-sm-10">&nbsp;</div></div>
       <div class="row">
  <div class="col-sm-1"></div>
  <div class="col-sm-10">
       
       <table class="table">
     <thead class="blue white-text">
       <tr>
         <th scope="col">#</th>
         <th scope="col">FirstName</th>
         <th scope="col">LastName</th>
         <th scope="col">City</th>
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
