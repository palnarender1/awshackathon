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
    <td>{this.props.data.name}</td>
    <td>{this.props.data.desc}</td>
    <td>{this.props.data.lob}</td>
    <td>{this.props.data.sublob}</td>
    </tr>);
}


}

export default UserRow;