import React, { Component } from 'react';
import   '../modal/css/modal.css'
class Modal extends React.Component {
    render() {

      if(!this.props.show){
        return null;
    }
      return <div class='modal'>
      <div class='modal-content'>
       
        <p>Some text in the Modal..</p>
      </div></div>;
    }
  }
  export default  Modal;