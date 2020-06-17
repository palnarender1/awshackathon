import React, { Component } from 'react';
class UserRow extends Component{
state ={};
constructor(props){
    super(props);
    console.log(props.data);
    console.log(this.state);

}

render(){
    return(
    <tr>
    <td>{this.props.data.id}</td>
    <td>{this.props.data.firstname}</td>
    <td>{this.props.data.lastname}</td>
    <td>{this.props.data.city}</td>
    </tr>);
}


}

export default UserRow;