import React, { Component } from 'react';
import   '../modal/css/modal.css'
class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = { id:0, desc:null,name:null,lob:null,sublob:null};
    this.addInventory = this.addInventory.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateSubLob = this.updateSubLob.bind(this);
    this.updateLob = this.updateLob.bind(this);
    this.updateDesc = this.updateDesc.bind(this);

  }

  updateName(event){
    this.setState({name: event});
  }
  updateLob(event){
    this.setState({lob: event});
  }
  updateSubLob(event){
    this.setState({sublob: event});
  }
  updateDesc(event){
    this.setState({desc : event});
  }
  addInventory(){

  }

    render() {

      if(!this.props.show){
        return null;
    }
      return <div class='modal'>
      <div class='modal-content'>
       <input type="text" value={this.state.name} onChange={this.updateName}/>
       <input type="text" value={this.state.desc} onChange={this.updateDesc}/>
       <input type="text" value={this.state.lob} onChange={this.updateLob}/>
       <input type="text" value={this.state.sublob} onChange={this.updateSubLob}/>
       <input type="button" name="ADD Inventory" onClick={this.addInventory}/>
      </div></div>;
    }
  }
  export default  Modal;